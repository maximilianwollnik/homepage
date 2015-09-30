'use strict';

describe('homepage.routes', function() {

  beforeEach(module('homepage'));

  describe('provides all routes', function(){

    it('and all routes must be loaded correctly', inject(function($route) {
      expect($route.routes['/disclaimer'].controller).toBe('DisclaimerCtrl');
      expect($route.routes['/work'].controller).toBe('WorkCtrl');
      expect($route.routes['/home'].controller).toBe('HomeCtrl');

      expect($route.routes['/disclaimer'].templateUrl).toEqual('app/components/disclaimer/disclaimerView.html');
      expect($route.routes['/work'].templateUrl).toEqual('app/components/work/workView.html');
      expect($route.routes['/home'].templateUrl).toEqual('app/components/home/homeView.html');

      expect($route.routes[null].redirectTo).toMatch('home')
    }));
  });
});
