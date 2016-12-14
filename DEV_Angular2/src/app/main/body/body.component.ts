import { Component, OnInit } from '@angular/core';
import { ApiCommunicatorService } from '../../api-communicator.service';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  providers: [ApiCommunicatorService]
})
export class BodyComponent implements OnInit {
  public siteContent= [];
  public newSiteContent = [];

  constructor(private apiCommunicatorService: ApiCommunicatorService) {
  }

  ngOnInit() {
    this.siteContent = ApiCommunicatorService.getCompetences();
    this.apiCommunicatorService.getCompApi().subscribe((comp: Array<Object>) => this.newSiteContent = comp);
  }

}
