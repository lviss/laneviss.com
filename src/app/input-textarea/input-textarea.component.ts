import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {
  @Input() placeHolder: string;
  @Output() inputData = new EventEmitter<string>();
  data: string;

  constructor() { }

  ngOnInit() {
  }

}
