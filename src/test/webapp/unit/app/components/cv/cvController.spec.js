'use strict';

describe('homepage.cv', function() {
  var scope, cvCtrl;
  beforeEach(module('homepage.cv'));

  beforeEach(inject(function($controller, _$rootScope_) {
    scope = _$rootScope_.$new();
    cvCtrl = $controller('CvCtrl', {
      $scope : scope
    });
  }));

  describe('provides the cv controller', function() {

    it('and it must be defined', function() {
      expect(cvCtrl).toBeDefined();
    });

    it('and the explanation array must have the length 4', function() {
      expect(scope.explanations.length).toBe(4);
    });

    it('and the event array must have the length 11', function() {
      expect(scope.events.length).toBe(11);
    });

  });
});
