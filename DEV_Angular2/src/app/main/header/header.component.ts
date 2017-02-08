import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from "../../api-communicator.service";
import {BodyDynamicsService} from "../../body-dynamics.service";
import {Router} from '@angular/router';
import {LoginService} from '../../login.service';

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
  public test;
  public avatarID;
  public avatarPictures = [];


  constructor(private apiCommunicatorService: ApiCommunicatorService, private bodyDynamics: BodyDynamicsService, private router: Router, private loginService: LoginService) {
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
    this.profileBackgroundImage = "url(../../.." + (this.avatarPictures[this.avatarID])["avatarUrl"] + ")";
  }

  deactivateProfileBackgroundImage() {
    this.profileBackgroundImage = "url(../../.." + (this.avatarPictures[this.avatarID])["avatarInactiveUrl"] + ")";
  }

  ngOnInit() {
    this.getStudentData();
    this.getEducationalPlan();
  }

  getStudentData() {
    this.apiCommunicatorService.getAvatar("All")
      .subscribe((avatar: Array<Object>) => this.avatarPictures = avatar);

    this.apiCommunicatorService.getStudent().map(res => {
      this.headerdaten = res;
      this.studyGroup = res["studyGroups"];
      this.school = res["school"];
      this.groupBackgroundImage = "url(../../.." + this.studyGroup["imageUrlInactive"] + ")";
      this.schoolBackgroundImage = "url(../../.." + this.school["imageUrlInactive"] + ")";
      this.avatarID = res["avatarId"];
      this.test = this.avatarPictures[this.avatarID]["avatarBigUrl"];
      this.profileBackgroundImage = (this.avatarPictures[this.avatarID])["avatarBigUrl"];



    }).subscribe(res => sessionStorage.setItem("avatarId", this.headerdaten['avatarId']));


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
    console.log("header");
    this.loginService.logout();
    this.router.navigate(["../home"]);
  }

  getEducationalPlan() {
    this.apiCommunicatorService.getEdPlan("All")
      .subscribe((edPlan: Array<Object>) => this.educationalArray = edPlan);
  }

}
