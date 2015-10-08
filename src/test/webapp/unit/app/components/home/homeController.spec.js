'use strict';

describe('homepage.home', function() {

  beforeEach(module('homepage.home'));

  describe('provides the home controller', function() {

    it('and it must be defined', inject(function($controller) {
      // spec body
      var homeCtrl = $controller('HomeCtrl');
      expect(homeCtrl).toBeDefined();
    }));

  });
});
