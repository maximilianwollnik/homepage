'use strict';

angular.module('homepage.footer.service', [])

.factory('footerVersion', ['$route', '$http', function($route, $http) {
  var myService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('info').then(function (response) {
        // The return value gets picked up by the then in the controller.
        return response.data.build.version;
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return 'default';
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
}]);
