import { Component, OnInit } from '@angular/core';
import { debounce } from "debounce";

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  outputData: string = "";
  constructor() { }

  ngOnInit() {
  }

  onInputChanged = debounce(function(data: string) {
  }, 500);
}
