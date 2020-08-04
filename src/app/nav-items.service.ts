import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavItemsService {

  constructor() { }

  get() {
    return [{
      path: '/md5',
      label: 'MD5',
      icon: 'flaky'
    },{
      path: '/strlen',
      label: 'strlen',
      icon: 'square_foot'
    },{
      path: '/urlencode',
      label: 'urlencode',
      icon: 'filter_alt'
    },{
      path: '/ip',
      label: 'IP',
      icon: 'alternate_email'
    },{
      path: '/notepad',
      label: 'Notepad',
      icon: 'create'
    },{
      path: '/json-formatter',
      label: 'JSON Formatter',
      icon: 'code'
    },{
      path: '/pst',
      label: 'PST',
      icon: 'schedule'
    }]
  }
}
