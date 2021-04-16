import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor() { }

  get() {
    return [{
      url: 'https://gmail.com',
      label: 'Gmail',
      icon: 'assets/gmail.ico'
    },{
      url: 'https://youtube.com',
      label: 'YouTube',
      icon: 'assets/youtube.ico'
    },{
      url: 'https://reddit.com',
      label: 'Reddit',
      icon: 'assets/reddit.png'
    },{
      url: 'https://twitch.tv',
      label: 'Twitch',
      icon: 'assets/twitch.png'
    },{
      url: 'https://music.youtube.com',
      label: 'Youtube Music',
      icon: 'assets/youtube-music.png'
    },{
      url: 'https://recipes.laneviss.com',
      label: 'Recipes',
      icon: 'assets/recipes.png'
    },{
      url: 'http://regexr.com',
      label: 'Regexr',
      icon: 'assets/regexr.png'
    }];
  }
}
