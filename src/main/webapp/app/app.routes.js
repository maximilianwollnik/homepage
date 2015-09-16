'use strict';

angular.module('homepage').config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'HomeCtrl',
    name: "BUTTON.MENU_HOME"
  })
  .when('/about', {
    templateUrl: 'app/components/about/aboutView.html',
    controller: 'AboutCtrl',
    name: "BUTTON.MENU_ABOUT"
  })
  .when('/cv', {
    templateUrl: 'app/components/cv/cvView.html',
    controller: 'CvCtrl',
    name: "BUTTON.MENU_CV"
  })
  .when('/work', {
    templateUrl: 'app/components/work/workView.html',
    controller: 'WorkCtrl',
    name: "BUTTON.MENU_WORK"
  })
  .otherwise({redirectTo: '/home'});
}]);
