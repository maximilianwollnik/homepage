'use strict';

describe('homepage.education', function() {

  beforeEach(module('homepage.education'));

  describe('provides the education controller', function(){

    it('and it must be defined', inject(function($controller) {
      //spec body
      var ctrl = $controller('EducationCtrl');
      expect(ctrl).toBeDefined();
    }));

  });
});
