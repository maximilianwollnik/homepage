'use strict';

angular.module('homepage.social.controller', ['ajoslin.promise-tracker'])

.controller('SocialCtrl', ['$scope', '$http', 'promiseTracker', '$timeout', '$translate', function ($scope, $http, promiseTracker, $timeout, $translate) {
  // Inititate the promise tracker to track form submissions.
  $scope.progress = promiseTracker();

  // Form submit handler.
  $scope.submit = function(form) {
    // Trigger validation flag.
    $scope.submitted = true;

    // If form is invalid, return and let AngularJS show validation errors.
    if (form.$invalid) {
      return;
    }

    // Default values for the request.
    var config = {
      'name' : $scope.name,
      'email' : $scope.email,
      'body' : $scope.body
    };

    // Perform JSONP request.
    var $promise = $http.post('/send-mail', config)
      .success(function(data, status, headers, config) {
        if (data == 'OK') {
          $scope.name = null;
          $scope.email = null;
          $scope.subjectList = null;
          $scope.url = null;
          $scope.body = null;
          $translate('SOCIAL.MAIL.SUCCESS').then(function (text) {
            $scope.messages = text;
          });
          $scope.submitted = false;
        } else {
          $translate('SOCIAL.MAIL.ERROR_SERVER').then(function (text) {
            $scope.messages = text;
          });
        }
      })
      .error(function(data, status, headers, config) {
        $scope.progress = data;
        $translate('SOCIAL.MAIL.ERROR_NETWORK').then(function (text) {
            $scope.messages = text;
          });
      })
      .finally(function() {
        // Hide status messages after three seconds.
        $timeout(function() {
          $scope.messages = null;
        }, 3000);
      });

    // Track the request and show its progress to the user.
    $scope.progress.addPromise($promise);
  };
}]);
