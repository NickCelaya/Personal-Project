angular.module("firstApp",["ui.router"]).config(function($stateProvider, $urlRouterProvider){

$stateProvider

.state("home", {
  url: "/",
  templateUrl: "./views/homeTmpl.html",
  controller: "homeCtrl" //change to mainCtrl to see data
})

.state("about",{
  url: "/about",
  templateUrl: "./views/aboutTmpl.html",
  controller: "aboutCtrl"
})


$urlRouterProvider
.otherwise("/");

});
