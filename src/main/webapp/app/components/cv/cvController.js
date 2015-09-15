'use strict';

angular.module('homepage.cv', ['angular-timeline'])

.controller('CvCtrl', ['$scope', function($scope) {
  $scope.events = [{
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'CV.EVENTS.ONE.TITLE',
    content: 'CV.EVENTS.ONE.CONTENT'
  }, {
    badgeClass: 'warning',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'CV.EVENTS.TWO.TITLE',
    content: 'CV.EVENTS.TWO.CONTENT'
  }];
}]);
