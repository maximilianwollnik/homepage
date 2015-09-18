'use strict';

angular.module('homepage.disclaimer', [])

.controller('DisclaimerCtrl', ['$scope', function($scope) {
  $scope.disclaimers = [{
    title: 'DISCLAIMER.BODY.LIMITATION_INTERNAL.TITLE',
    text: 'DISCLAIMER.BODY.LIMITATION_INTERNAL.TEXT'
  }, {
    title: 'DISCLAIMER.BODY.LIMITATION_EXTERNAL.TITLE',
    text: 'DISCLAIMER.BODY.LIMITATION_EXTERNAL.TEXT'
  }, {
    title: 'DISCLAIMER.BODY.COPYRIGHT.TITLE',
    text: 'DISCLAIMER.BODY.COPYRIGHT.TEXT'
  }, {
    title: 'DISCLAIMER.BODY.PROTECTION.TITLE',
    text: 'DISCLAIMER.BODY.PROTECTION.TEXT'
  }];
}]);
