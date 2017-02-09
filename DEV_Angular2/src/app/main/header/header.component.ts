import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from "../../api-communicator.service";
import {BodyDynamicsService} from "../../body-dynamics.service";
import {Router} from '@angular/router';
import {LoginService} from '../../login.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerdaten = {};
  public studyGroup = {};
  public school = {};
  public educationalArray = [];
  public groupBackgroundImage;
  public schoolBackgroundImage;
  public profileBackgroundImage;
  public profileHeaderImage;
  public avatarID;
  public avatarPictures = [];
  public edPlanData = {};
  public edPlanCompetences = [];


  constructor(private apiCommunicatorService: ApiCommunicatorService, private bodyDynamics: BodyDynamicsService, private router: Router, private loginService: LoginService) {
    this.getStudentData();
    this.getEducationalPlan();
    this.getEdPlanData();
  }

  ngOnInit() {
  }

  async getStudentData() {
    await Observable.forkJoin(this.apiCommunicatorService.getAvatar("All"), this.apiCommunicatorService.getStudent()).subscribe(res => {
      this.avatarPictures = res[0];
      this.headerdaten = res[1];
      this.studyGroup = res[1]["studyGroups"];
      this.school = res[1]["school"];
      this.avatarID = res[1]["avatarId"];
      this.groupBackgroundImage = "url(../../.." + this.studyGroup["imageUrlInactive"] + ")";
      this.schoolBackgroundImage = "url(../../.." + this.school["imageUrlInactive"] + ")";
      this.profileBackgroundImage = "url(../../.." + this.avatarPictures[this.avatarID]["avatarInactiveUrl"] + ")";
      this.profileHeaderImage = "url(../../.." + this.avatarPictures[this.avatarID]["avatarBigUrl"];
    });
  }

  async getEdPlanData() {
    await this.apiCommunicatorService.getEdPlan(1)
      .map((edplan: Array<Object>) => this.edPlanData = edplan)
      .subscribe(() => this.apiCommunicatorService.getEdPlan(1).map(res => {
          this.edPlanData = res;
          this.edPlanCompetences = res["competences"];
        }
      ));
    console.log(this.edPlanData);
    console.log(this.edPlanCompetences);
  }

  loadChapter(i) {

    this.apiCommunicatorService.getChapter(i).subscribe((res: Array<Object>) => this.bodyDynamics.changeBackground(res["weakcolor"]));
    this.bodyDynamics.changeFlag(i);
    this.bodyDynamics.changeButtonUp(i);
    this.bodyDynamics.changeButtonDown(i);
    this.apiCommunicatorService.getCompetences("All", i)
      .subscribe((competence: Array<Object>) => this.bodyDynamics.changeChapterBubbles(competence));
    this.bodyDynamics.fillBooleanArray(this.bodyDynamics.chapterBubbles.length);
    this.router.navigate(["../main"])
  }

  loadCompetences(i) {
    this.apiCommunicatorService.getChapter(i).subscribe((res: Array<Object>) => this.bodyDynamics.changeBackground(res["weakcolor"]));
    this.bodyDynamics.changeFlag(i);
    this.bodyDynamics.changeButtonUp(i);
    this.bodyDynamics.changeButtonDown(i);
    this.apiCommunicatorService.getCompetences("true", i)
      .subscribe((competence: Array<Object>) => this.bodyDynamics.changeChapterBubbles(competence));
    this.bodyDynamics.fillBooleanArray(this.bodyDynamics.chapterBubbles.length);
    this.router.navigate(["../main"]);
  }


  logout() {
    this.loginService.logout();
    this.router.navigate(["../home"]);
  }

  async getEducationalPlan() {
    await this.apiCommunicatorService.getEdPlan("All")
      .subscribe((edPlan: Array<Object>) => this.educationalArray = edPlan);
  }

  activateGroupBackgroundImage() {
    this.groupBackgroundImage = "url(../../.." + this.studyGroup["imageUrl"] + ")";
  }

  deactivateGroupBackgroundImage() {
    this.groupBackgroundImage = "url(../../.." + this.studyGroup["imageUrlInactive"] + ")";
  }

  activateSchoolBackgroundImage() {
    this.schoolBackgroundImage = "url(../../.." + this.school["imageUrl"] + ")";
  }

  deactivateSchoolBackgroundImage() {
    this.schoolBackgroundImage = "url(../../.." + this.school["imageUrlInactive"] + ")";
  }

  activateProfileBackgroundImage() {
    this.profileBackgroundImage = "url(../../.." + this.avatarPictures[this.avatarID]["avatarUrl"] + ")";
  }

  deactivateProfileBackgroundImage() {
    this.profileBackgroundImage = "url(../../.." + this.avatarPictures[this.avatarID]["avatarInactiveUrl"] + ")";
  }


}
