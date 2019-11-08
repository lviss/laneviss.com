import { Component, OnInit } from '@angular/core';
import { debounce } from "debounce";

@Component({
  selector: 'app-strlen',
  templateUrl: './strlen.component.html',
  styleUrls: ['./strlen.component.scss']
})
export class StrlenComponent implements OnInit {

  outputData: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onInputChanged = debounce(function(data: string) {
    this.outputData.push(data + ' - ' + data.length);
  }, 500);
}
