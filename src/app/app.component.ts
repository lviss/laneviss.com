import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { map, filter} from 'rxjs/operators';
import { NavItemsService } from './nav-items.service';
import { BookmarksService } from './bookmarks.service';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  route;
  navItems;
  bookmarks;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,
    private router: Router, 
    private navItemsService: NavItemsService,
    private bookmarksService: BookmarksService,
    private swUpdate: SwUpdate,
    public snackBar: MatSnackBar,
  ) {
    this.navItems = navItemsService.get();
    this.bookmarks = bookmarksService.get();
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.route = this.navItems.find(i => i.path === this.router.url).label;
      if (this.mobileQuery.matches)
        this.sidenav.close();
    });

    // determine if we're on a small screen
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // check for service worker updates
    if (swUpdate.isEnabled) {
      interval(60 * 60 * 1000).subscribe(() => swUpdate.checkForUpdate()
        .then(() => console.log('checking for updates')));
    }
    this.swUpdate.available.subscribe(event => this.promptUpdate());
  }

  private promptUpdate(): void {
    console.log('updating to new version');
    let snack = this.snackBar.open('A new version is available!', 'Update', { duration: undefined });
    snack.onAction().subscribe(() => {
      this.swUpdate.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
