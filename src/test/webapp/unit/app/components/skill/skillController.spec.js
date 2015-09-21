'use strict';

describe('homepage.skill', function() {
  var scope, ctrl;
  beforeEach(module('homepage.skill'));
  
  beforeEach(inject(function($controller,_$rootScope_){
	scope = _$rootScope_.$new();
	ctrl = $controller('SkillCtrl',{$scope: scope});
  }));

  describe('provides the skill controller', function(){

    it('and it must be defined',function() {
      expect(ctrl).toBeDefined();
    });
	
	  it('and the skills array must have the length 10', function() {
      expect(scope.skills.length).toBe(10);
    });

  });
});
