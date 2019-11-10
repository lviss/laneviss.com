import { Component, OnInit } from '@angular/core';
import { debounce } from "debounce";

@Component({
  selector: 'app-pst',
  templateUrl: './pst.component.html',
  styleUrls: ['./pst.component.scss']
})
export class PstComponent implements OnInit {

  outputData: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  onInputChanged = debounce(function(data: string) {
    let trimmed = data.trim();
    if (trimmed.match(/^\d*$/)) {
      let int = parseInt(data);
      let date = new Date(int * 1000);
      this.outputData.push(date.toString());
    } else {
      let date = new Date(trimmed);
      this.outputData.push(date.toString());
    }
  }, 500);
}
