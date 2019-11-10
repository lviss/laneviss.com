import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IpComponent implements OnInit {

  getIp;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getIp = this.httpClient.get("/ip?plain=true", {responseType: 'text'});
  }

}
