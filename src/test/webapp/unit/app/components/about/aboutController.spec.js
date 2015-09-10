'use strict';

describe('homepage.about', function() {

  beforeEach(module('homepage.about'));

  describe('provides the about controller', function(){

    it('and it must be defined', inject(function($controller) {
      //spec body
      var aboutCtrl = $controller('AboutCtrl');
      expect(aboutCtrl).toBeDefined();
    }));

  });
});
