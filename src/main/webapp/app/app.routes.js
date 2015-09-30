'use strict';

angular.module('homepage')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'HomeCtrl',
    name: "BUTTON.MENU_HOME",
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
  .when('/skill', {
    templateUrl: 'app/components/skill/skillView.html',
    controller: 'SkillCtrl',
    name: "BUTTON.MENU_SKILL"
  })
  .when('/education', {
    templateUrl: 'app/components/education/educationView.html',
    controller: 'EducationCtrl',
    name: "BUTTON.MENU_EDUCATION"
  })
  .when('/disclaimer', {
    templateUrl: 'app/components/disclaimer/disclaimerView.html',
    controller: 'DisclaimerCtrl',
    name: "BUTTON.MENU_DISCLAIMER"
  })
  .otherwise({redirectTo: 'home'});
}])
.run(['$rootScope', '$location', '$anchorScroll', '$routeParams', function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
}]);
