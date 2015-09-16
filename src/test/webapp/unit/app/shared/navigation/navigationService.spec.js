'use strict';

describe('homepage.navigation.service module', function() {
  var navigation, location;
  beforeEach(module('homepage'));
  beforeEach(module('homepage.navigation'));
  beforeEach(inject(function($injector, $location) {
    navigation = $injector.get('routeNavigation');
    location = $location;
  }));

  describe('gets all data for the navigation', function() {
    
    it('and the current length must be 4', function() {
      expect(navigation.routes.length).toBe(4);
    });

    it('and the name of the about route must be About', function() {
      expect(navigation.routes[0].name).toBe('BUTTON.MENU_HOME');
    }); 

    it('and no active routes are available', function() {
      angular.forEach(navigation.routes, function (route) {
        expect(navigation.activeRoute(route)).toEqual(false);
      });
    });

    it('and home route is after navigation active', function() {
      location.path('home');
      expect(navigation.activeRoute(navigation.routes[0])).toEqual(true);
    });

    it('and about route is after navigation active', function() {
      location.path('about');
      expect(navigation.activeRoute(navigation.routes[1])).toEqual(true);
    });

    it('and cv route is after navigation active', function() {
      location.path('cv');
      expect(navigation.activeRoute(navigation.routes[2])).toEqual(true);
    });
	
	it('and work route is after navigation active', function() {
      location.path('work');
      expect(navigation.activeRoute(navigation.routes[3])).toEqual(true);
    });
  });
});
