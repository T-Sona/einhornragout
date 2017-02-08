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

  constructor() {
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

  sortCompetenceArrayByDate() {
    console.log("Test 1");
    this.chapterBubbles.sort(sortDate)

    function sortDate(date1, date2) {

      console.log("Test 2: " + date1.fromDate);

      if (date1.fromDate < date2.fromDate) {
        return -1;
      } else if (date1.fromDate > date2.fromDate) {
        return 1;
      } else {
        return 0;
      }
    }


  }
}



