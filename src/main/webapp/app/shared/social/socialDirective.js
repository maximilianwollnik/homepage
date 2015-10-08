'use strict';

angular.module('homepage.social.directive', [])

.directive('social', function() {
  return {
    restrict : "E",
    replace : true,
    templateUrl : "app/shared/social/socialDirectiveView.html",
  };
});
