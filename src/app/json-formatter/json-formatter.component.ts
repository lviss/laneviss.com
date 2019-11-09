import { Component, OnInit } from '@angular/core';
import { debounce } from "debounce";

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnInit {

  json: any;
  error: string;
  constructor() { }

  ngOnInit() {
  }

  onInputChanged = debounce(function(data: string) {
    try {
      this.json = JSON.parse(data);
      this.error = null;
    } catch(e) { 
      if (e.message && e.message == 'Unexpected end of JSON input')
        this.error = null;
      else
        this.error = e.message ? e.message : e; 
    };
  }, 500);
}
