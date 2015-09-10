'use strict';

homepage.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'HomeCtrl',
    name: "Home"
  })
  .when('/about', {
    templateUrl: 'app/components/about/aboutView.html',
    controller: 'AboutCtrl',
    name: "About"
  })
  .when('/work', {
    templateUrl: 'app/components/work/workView.html',
    controller: 'WorkCtrl',
    name: "Work"
  })
  .otherwise({redirectTo: '/home'});
}]);
