'use strict';

describe('homepage.navigation.service module', function() {
  var navigation, location;
  var posHome = 0;
  var posCv = 1;
  var posWork = 2;
  var posSkill = 3;
  var posDisclaimer = 4;
  beforeEach(module('homepage'));
  beforeEach(module('homepage.navigation'));
  beforeEach(inject(function($injector, $location) {
    navigation = $injector.get('routeNavigation');
    location = $location;
  }));

  describe('gets all data for the navigation', function() {
    
    it('and the current length must be 5', function() {
      expect(navigation.routes.length).toBe(5);
    });

    it('and the name of the home route must be Home', function() {
      expect(navigation.routes[0].name).toBe('BUTTON.MENU_HOME');
    }); 

    it('and no active routes are available', function() {
      angular.forEach(navigation.routes, function (route) {
        expect(navigation.activeRoute(route)).toEqual(false);
      });
    });

    it('and home route is after navigation active', function() {
      location.path('home');
      expect(navigation.activeRoute(navigation.routes[posHome])).toEqual(true);
    });

    it('and cv route is after navigation active', function() {
      location.path('cv');
      expect(navigation.activeRoute(navigation.routes[posCv])).toEqual(true);
    });
	
	  it('and work route is after navigation active', function() {
      location.path('work');
      expect(navigation.activeRoute(navigation.routes[posWork])).toEqual(true);
    });

    it('and work route is after navigation active', function() {
      location.path('skill');
      expect(navigation.activeRoute(navigation.routes[posSkill])).toEqual(true);
    });
	
	  it('and disclaimer route is after navigation active', function() {
      location.path('disclaimer');
      expect(navigation.activeRoute(navigation.routes[posDisclaimer])).toEqual(true);
    });
  });
});
