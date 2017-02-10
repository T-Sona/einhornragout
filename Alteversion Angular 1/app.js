var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "views/home.html",
    controller: "homeController"
  })
  .when("/home",{
    templateUrl: "views/home.html",
    controller: "homeController"
  })
  .when("/login", {
    templateUrl: "views/login.html",
    controller: "homeController"
  })
  .otherwise({
    template: "ERROR:404"
  });
}]);
