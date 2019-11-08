import { Component, OnInit } from '@angular/core';
import md5 from 'md5';
import { debounce } from "debounce";

@Component({
  selector: 'app-md5',
  templateUrl: './md5.component.html',
  styleUrls: ['./md5.component.scss']
})
export class Md5Component implements OnInit {

  outputData: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onInputChanged = debounce(function(data: string) {
    this.outputData.push(md5(data));
  }, 500);
}
