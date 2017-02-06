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
  public siteIllustrations = [];

  constructor(private apiCommunicatorService: ApiCommunicatorService) {
  }

  ngOnInit() {
    this.getAllCompetences();
    this.getAllIllustrations();
    var elem = document.getElementById("scrollButtonBottom");
    elem.addEventListener("mousedown", mouseDown);
    elem.addEventListener("mouseup", mouseUp);
    var scrollflag = false;

    while (scrollflag) {
      scrollBy(0, 10);
    }

    function mouseDown() {
      scrollflag=true;
      while (scrollflag) {
        scrollBy(0, 10);
      }

    }

    function mouseUp() {
      scrollflag=false;
    }
  }

  private getAllCompetences() {
    this.apiCommunicatorService.getCompetences("All", "All")
      .subscribe((competence: Array<Object>) => this.siteContent = competence);
  }

  private getAllIllustrations(){
    this.apiCommunicatorService.getChapterIllustrations("All")
        .subscribe((illustration: Array<Object>) => this.siteIllustrations = illustration);
  }


}

