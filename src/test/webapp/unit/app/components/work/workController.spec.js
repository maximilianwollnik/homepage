'use strict';

describe('homepage.work module', function() {
  var scope, workCtrl;
  beforeEach(module('homepage.work'));
  
  beforeEach(inject(function($controller,_$rootScope_){
	scope = _$rootScope_.$new();
	workCtrl = $controller('WorkCtrl',{$scope: scope});
  }));

  describe('provides the work controller', function(){

    it('and it must be defined', function() {
      expect(workCtrl).toBeDefined();
    });

	it('and the samples array must have the length 2', function() {
      expect(scope.samples.length).toBe(2);
    });
	
  });
});
