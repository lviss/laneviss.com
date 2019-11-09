import { Component, OnInit } from '@angular/core';
import { debounce } from "debounce";

@Component({
  selector: 'app-urlencode',
  templateUrl: './urlencode.component.html',
  styleUrls: ['./urlencode.component.scss']
})
export class UrlencodeComponent implements OnInit {

  outputData: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onInputChanged = debounce(function(data: string) {
    this.outputData.push(encodeURI(data));
  }, 500);
}
