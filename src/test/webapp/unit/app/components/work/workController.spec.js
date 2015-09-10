'use strict';

describe('homepage.work module', function() {

  beforeEach(module('homepage.work'));

  describe('provides the work controller', function(){

    it('and it must be defined', inject(function($controller) {
      var workCtrl = $controller('WorkCtrl');
      expect(workCtrl).toBeDefined();
    }));

  });
});
