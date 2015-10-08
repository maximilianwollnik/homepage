'use strict';

angular.module('homepage.footer.directive', [])

.directive('footer', [ 'footerVersion', function(footerVersion) {
  return {
    restrict : "E",
    replace : true,
    templateUrl : "app/shared/footer/footerDirectiveView.html",
    controller : [ '$scope', function($scope) {
      footerVersion.async().then(function(d) {
        $scope.version = d.version;
        $scope.timestamp = d.timestamp;
      });
    } ]
  };
} ]);
