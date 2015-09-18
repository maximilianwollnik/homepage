'use strict';

describe('homepage.disclaimer', function() {
  var scope, disclaimerCtrl;
  beforeEach(module('homepage.disclaimer'));
  
  beforeEach(inject(function($controller,_$rootScope_){
	scope = _$rootScope_.$new();
	disclaimerCtrl = $controller('DisclaimerCtrl',{$scope: scope});
  }));  

  describe('provides the disclaimer controller', function(){

    it('and it must be defined', inject(function($controller) {
      expect(disclaimerCtrl).toBeDefined();
    }));

	it('and the disclaimers array must have the length 4', function() {
      expect(scope.disclaimers.length).toBe(4);
    });
  });
});
