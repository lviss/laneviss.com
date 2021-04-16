import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookmarks;
  constructor(
    private bookmarksService: BookmarksService,
  ) {
    this.bookmarks = bookmarksService.get(); 
  }

  ngOnInit() {
  }

}
