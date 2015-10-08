'use strict';

angular.module('homepage.navigation.service', [])

.factory('routeNavigation',
    [ '$route', '$location', function($route, $location) {
      var routes = [];
      angular.forEach($route.routes, function(route, path) {
        if (route.name) {
          routes.push({
            path : path + '?scrollTo=content',
            name : route.name
          });
        }
      });
      return {
        routes : routes,
        activeRoute : function(route) {
          return route.path === $location.path();
        }
      };
    } ]);
