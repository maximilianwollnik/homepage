'use strict';

angular.module('homepage.footer.directive', [])

.directive('footer', function () {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "app/shared/footer/footerDirectiveView.html",
  };
});
