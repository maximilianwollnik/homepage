'use strict';

angular.module('homepage.navigation.directive', ['homepage.navigation.service'])

.controller('navigationController', ['$translate','$scope', 'routeNavigation', function($translate, $scope, routeNavigation) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
    $scope.routes = routeNavigation.routes;
    $scope.activeRoute = routeNavigation.activeRoute;
}])

.directive('navigation', function () {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "app/shared/navigation/navigationDirectiveView.html"
  };
});
