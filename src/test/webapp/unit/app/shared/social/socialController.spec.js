'use strict';

describe('homepage.social', function() {
  var scope, ctrl, form, templateHtml, formElem, dirElementInput;
  var $compile, $rootScope, $httpBackend;
  beforeEach(module('homepage'));
  // load the templates
  beforeEach(module('templates'));

  beforeEach(inject(function($controller, _$httpBackend_, _$compile_, _$rootScope_, _$templateCache_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    jasmine.getJSONFixtures().fixturesPath = 'base/src/main/webapp/assets/i18n';

    $httpBackend.whenGET('assets/i18n/de_DE.json').respond(
        getJSONFixture('de_DE.json'));
    $httpBackend.whenGET('assets/i18n/C.json').respond(
        getJSONFixture('de_DE.json'));
    
    scope = $rootScope;
    ctrl = $controller('SocialCtrl', {
      $scope : scope
    });
    
    var element = angular.element(_$templateCache_.get('app/shared/social/socialDirectiveView.html'));
    $compile(element)(scope);
    formElem = element.find('form');
    $compile(formElem)(scope);
    form = scope.mailForm;
  }));

  describe('provides the social controller', function() {

    it('and it must be defined', function() {
      expect(ctrl).toBeDefined();
    });
    
    it('and the form must be valid, when the correct entries are included', function() {

      form.name.$setViewValue('name');
      form.email.$setViewValue('name@domain.de');
      form.body.$setViewValue('text');
      scope.$apply();
      $rootScope.$digest();      
      
//      angular.element(dirElementInput).val('name@domain.de').trigger('input');
      //scope.submit(form);
//      expect(dirElementInput.hasClass('ng-valid')).toEqual(true);
//      alert(form);
      expect(form.$valid).toEqual(true);
    });

  });
});
