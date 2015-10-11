'use strict';

describe('homepage.social', function() {
  var scope, ctrl, form, templateHtml, formElem, dirElementInput;
  var $compile, $rootScope, $httpBackend;
  beforeEach(module('homepage'));
  // load the templates
  beforeEach(module('templates'));

  beforeEach(inject(function($controller, _$httpBackend_, _$compile_, _$rootScope_, $templateCache) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    jasmine.getJSONFixtures().fixturesPath = 'base/src/main/webapp/assets/i18n';

    $httpBackend.whenGET('assets/i18n/de_DE.json').respond(
        getJSONFixture('de_DE.json'));
    $httpBackend.whenGET('assets/i18n/C.json').respond(
        getJSONFixture('de_DE.json'));
    
    scope = $rootScope.$new();
    ctrl = $controller('SocialCtrl', {
      $scope : scope
    });
    
    formElem = $compile("<form name=\"mailForm\" role=\"form\"></form>")(scope);
    form = scope.mailForm;
    dirElementInput = $compile("<input type=\"email\" name=\"email\" data-ng-model=\"email\" class=\"form-control\" required />")(scope);
    alert(dirElementInput.$valid);
    
    $rootScope.$digest();
    scope.$apply();
  }));

  describe('provides the social controller', function() {

    it('and it must be defined', function() {
      expect(ctrl).toBeDefined();
    });
    
    it('should not allow an invalid `width`', function() {
      scope.email = "name";
      
//      angular.element(dirElementInput).val('name@domain.de').trigger('input');
      scope.submit(form);
//      expect(dirElementInput.hasClass('ng-valid')).toEqual(true);
//      alert(form);
      expect(form.$valid).toEqual(true);
    });

  });
});
