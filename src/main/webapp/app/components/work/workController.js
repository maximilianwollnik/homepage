'use strict';

angular.module('homepage.work', [])

.controller('WorkCtrl', [ '$scope', '$sce', function($scope, $sce) {
  $scope.samples = [ {
    "header" : "WORK.BODY.CBA.CARDLESS.HEADER",
    "text" : "WORK.BODY.CBA.CARDLESS.TEXT",
    "src" : "https://www.youtube.com/embed/nO7dcpULd-g"
  }, {
    "header" : "WORK.BODY.CBA.DEPOSIT.HEADER",
    "text" : "WORK.BODY.CBA.DEPOSIT.TEXT",
    "src" : "https://www.youtube.com/embed/0yI9V7eJO6w"
  } ];
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
} ]);
