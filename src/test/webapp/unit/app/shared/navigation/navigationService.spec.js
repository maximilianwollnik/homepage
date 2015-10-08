'use strict';

describe('homepage.navigation.service module', function() {
  var navigation, location;
  var posHome = 0;
  var posCv = 1;
  var posWork = 2;
  var posSkill = 3;
  var posEducation = 4;
  var posDisclaimer = 5;
  beforeEach(module('homepage'));
  beforeEach(module('homepage.navigation'));
  beforeEach(inject(function($injector, $location) {
    navigation = $injector.get('routeNavigation');
    location = $location;
  }));

  describe('gets all data for the navigation', function() {

    it('and the current length must be 6', function() {
      expect(navigation.routes.length).toBe(6);
    });

    it('and the name of the home route must be Home', function() {
      expect(navigation.routes[0].name).toBe('BUTTON.MENU_HOME');
    });

    it('and no active routes are available', function() {
      angular.forEach(navigation.routes, function(route) {
        expect(navigation.activeRoute(route)).toEqual(false);
      });
    });

    it('and home route is after navigation active', function() {
      location.path('home?scrollTo=content');
      expect(navigation.activeRoute(navigation.routes[posHome])).toEqual(true);
    });

    it('and cv route is after navigation active', function() {
      location.path('cv?scrollTo=content');
      expect(navigation.activeRoute(navigation.routes[posCv])).toEqual(true);
    });

    it('and work route is after navigation active', function() {
      location.path('work?scrollTo=content');
      expect(navigation.activeRoute(navigation.routes[posWork])).toEqual(true);
    });

    it('and skill route is after navigation active',
        function() {
          location.path('skill?scrollTo=content');
          expect(navigation.activeRoute(navigation.routes[posSkill])).toEqual(
              true);
        });

    it('and education route is after navigation active', function() {
      location.path('education?scrollTo=content');
      expect(navigation.activeRoute(navigation.routes[posEducation])).toEqual(
          true);
    });

    it('and disclaimer route is after navigation active', function() {
      location.path('disclaimer?scrollTo=content');
      expect(navigation.activeRoute(navigation.routes[posDisclaimer])).toEqual(
          true);
    });
  });
});
