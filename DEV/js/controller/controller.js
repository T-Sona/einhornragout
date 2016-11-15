app.controller("homeController",function($scope){
  var testDate = new Date();

  $scope.date = testDate;

  $scope.testArray = [{
    name: "Martin",
    eigenschaft: "cool",
    bild: "img/test/0.png",
    show: 1
  },
  {
    name: "Johannes",
    eigenschaft: "auch sehr geil",
    bild: "img/test/1.png",
    show: 1
  },
  {
    name: "Timo",
    eigenschaft: "das größte Opfer aller Zeiten",
    bild: "img/test/2.png",
    show: 2
  },
  {
    name: "Dennis",
    eigenschaft: "Kevin 2015",
    show: 0
  }];
});
