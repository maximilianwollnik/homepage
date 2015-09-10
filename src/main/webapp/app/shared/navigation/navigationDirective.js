'use strict';

angular.module('homepage.navigation.directive', ['homepage.navigation.service'])

.directive('navigation', ['routeNavigation', function (routeNavigation) {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "app/shared/navigation/navigationDirectiveView.html",
    controller: ['$scope', function ($scope) {
      $scope.routes = routeNavigation.routes;
      $scope.activeRoute = routeNavigation.activeRoute;
    }]
  };
}]);
