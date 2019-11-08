import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  route;
  navItems = [
    'home',
    'md5',
    'strlen',
    'urlencode',
    'ip',
    'notepad',
    'json-formatter'
  ];

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.route = this.router.url;
      this.sidenav.close();
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
}
