import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Md5Component } from './md5/md5.component';
import { StrlenComponent } from './strlen/strlen.component';
import { UrlencodeComponent } from './urlencode/urlencode.component';
import { IpComponent } from './ip/ip.component';
import { NotepadComponent } from './notepad/notepad.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'md5', component: Md5Component },
  { path: 'strlen', component: StrlenComponent },
  { path: 'urlencode', component: UrlencodeComponent },
  { path: 'ip', component: IpComponent },
  { path: 'notepad', component: NotepadComponent },
  { path: 'json-formatter', component: JsonFormatterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
