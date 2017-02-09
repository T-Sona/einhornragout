import {Injectable} from '@angular/core';

@Injectable()
export class BodyDynamicsService {

  public chapterColor = "#8da6d6";
  public chapterFlag = "../../../images/surprise.png";
  public buttonUp = "../../../images/chapter15/scrollUp.png";
  public buttonDown = "../../../images/chapter15/scrollDown.png";
  public pictureInBubble = "../../../images/chapter15/competenceDone.png";
  public chapterBubbles = [];
  public loadAllCompetences = true;
  public sideTextBooleanArray = [];
  public edPlans = {
              "this": "",
              "count": 0,
              "plans": [],
              "competences" : {}
          };

  constructor() {
  }


  formatDate(dateFromApi) {

    if (dateFromApi == null) {
      return "Du hast diese Kompetenz noch nicht erreicht.";
    } else {
      let day = dateFromApi.slice(8, 10);
      let month = dateFromApi.slice(5, 7);
      let year = dateFromApi.slice(0, 4);

      switch (month) {
        case "01":
          month = "Januar";
          break;
        case "02":
          month = "Februar";
          break;
        case "03":
          month = "Maerz";
          break;
        case "04":
          month = "April";
          break;
        case "05":
          month = "Mai";
          break;
        case "06":
          month = "Juni";
          break;
        case "07":
          month = "Juli";
          break;
        case "08":
          month = "August";
          break;
        case "09":
          month = "September";
          break;
        case "10":
          month = "Oktober";
          break;
        case "11":
          month = "November";
          break;
        default:
          month = "Dezember";
      }

      return "Du hast diese Kompetenz am " + day + ". " + month + " " + year + " erreicht!";
    }
  }

  calcContentHeigth() {

    let i = this.chapterBubbles.length * 130 + 110;

    if (i > 1080) {
      return i + "px";
    } else {
      return "1080px";
    }


  }

  fillBooleanArray(j) {

    for (let i = 0; i <= j; i++) {
      this.sideTextBooleanArray[i] = false;
    }

  }

  changeShowBubbleSidetext(i) {
    if (!this.sideTextBooleanArray[i]) {
      this.sideTextBooleanArray[i] = true;
    } else {
      this.sideTextBooleanArray[i] = false;
    }
  }

  changeLoadAllCompetences(i) {
    this.loadAllCompetences = i;
  }

  changeBackground(newColor) {
    this.chapterColor = newColor;
  }

  changeFlag(i) {
    if (i < 10) {
      this.chapterFlag = "../../../images/chapter0" + i + "/littleChapterFlag.png";
    } else {
      this.chapterFlag = "../../../images/chapter" + i + "/littleChapterFlag.png";
    }
  }

  changeButtonUp(i) {
    if (i < 10) {
      this.buttonUp = "../../../images/chapter0" + i + "/scrollUp.png"
    } else {
      this.buttonUp = "../../../images/chapter" + i + "/scrollUp.png"
    }
  }

  changeButtonDown(i) {
    if (i < 10) {
      this.buttonDown = "../../../images/chapter0" + i + "/scrollDown.png"
    } else {
      this.buttonDown = "../../../images/chapter" + i + "/scrollDown.png"
    }
  }

  changeChapterBubbles(i) {
    this.chapterBubbles = i;
  }

  assignPictureInBubble(arrayElement) {

    var i = arrayElement.chapterId;

    if (arrayElement.checked) {
      if (i < 10) {
        return "../../../images/chapter0" + i + "/competenceDone.png";
      } else {
        return "../../../images/chapter" + i + "/competenceDone.png";
      }
    } else {
      if (i < 10) {
        return "../../../images/chapter0" + i + "/competenceUndone.png";
      } else {
        return "../../../images/chapter" + i + "/competenceUndone.png";
      }

    }

  }


}
