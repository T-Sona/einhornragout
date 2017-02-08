import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from '../../api-communicator.service';
import {Http, Headers} from '@angular/http';
import {Router} from "@angular/router";
import {LoginService} from "../../login.service";
import {BodyDynamicsService} from "../../body-dynamics.service";

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  providers: [ApiCommunicatorService]
})


export class BodyComponent implements OnInit {
  public siteIllustrations = [];

  constructor(private apiCommunicatorService: ApiCommunicatorService, private loginService: LoginService, private router: Router,
              private bodyDynamics: BodyDynamicsService) {
  }

  ngOnInit() {
    console.log("LoggedIn:" + this.loginService.isLoggedIn());
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["../home"]);
    }

    if (this.bodyDynamics.loadAllCompetences == true) {
      this.getFirstCompetences();
      this.bodyDynamics.sortCompetenceArrayByDate();
      this.bodyDynamics.changeLoadAllCompetences(false);
    }

    this.getAllIllustrations();

  }

  private getFirstCompetences() {
    this.apiCommunicatorService.getCompetences("true", "All")
      .subscribe((competence: Array<Object>) => this.bodyDynamics.changeChapterBubbles(competence));
  }

  private getAllIllustrations() {
    this.apiCommunicatorService.getChapterIllustrations("All")
      .subscribe((illustration: Array<Object>) => this.siteIllustrations = illustration);
  }


}

