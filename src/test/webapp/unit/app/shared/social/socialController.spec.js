'use strict';

describe('homepage.social', function() {
  var scope, ctrl, form, templateHtml, formElem, $compile, $rootScope, $httpBackend, elemName, elemMail, elemBody;
  beforeEach(module('homepage'));
  // load the templates
  beforeEach(module('templates'));

  beforeEach(inject(function($controller, _$httpBackend_, _$compile_, _$rootScope_, _$templateCache_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    jasmine.getJSONFixtures().fixturesPath = 'base/src/main/webapp/assets/i18n';

    $httpBackend.whenGET('assets/i18n/de_DE.json').respond(getJSONFixture('de_DE.json'));
    $httpBackend.whenGET('assets/i18n/C.json').respond(getJSONFixture('de_DE.json'));

    scope = $rootScope;
    ctrl = $controller('SocialCtrl', {
      $scope : scope
    });

    var element = angular.element(_$templateCache_.get('app/shared/social/socialDirectiveView.html'));
    $compile(element)(scope);
    formElem = element.find('form');
    elemName = element.find('input[name*="name"]');
    elemMail = element.find('input[name*="email"]');
    elemBody = element.find('textarea[name*="body"]');
    $compile(formElem)(scope);
    $compile(elemName)(scope);
    $compile(elemMail)(scope);
    $compile(elemBody)(scope);
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

      expect(angular.element(elemName).hasClass('ng-valid')).toEqual(true);
      expect(angular.element(elemMail).hasClass('ng-valid')).toEqual(true);
      expect(angular.element(elemBody).hasClass('ng-valid')).toEqual(true);

      expect(form.$valid).toEqual(true);
    });
    
    it('and the form must be invalid, when the input name is empty', function() {

      form.name.$setViewValue('');
      form.email.$setViewValue('name@domain.de');
      form.body.$setViewValue('text');
      scope.$apply();
      $rootScope.$digest();

      expect(angular.element(elemName).hasClass('ng-invalid')).toEqual(true);
      expect(angular.element(elemMail).hasClass('ng-valid')).toEqual(true);
      expect(angular.element(elemBody).hasClass('ng-valid')).toEqual(true);

      expect(form.$valid).toEqual(false);
    });
    
    it('and the form must be invalid, when the input mail is empty', function() {

      form.name.$setViewValue('name');
      form.email.$setViewValue('');
      form.body.$setViewValue('text');
      scope.$apply();
      $rootScope.$digest();

      expect(angular.element(elemName).hasClass('ng-valid')).toEqual(true);
      expect(angular.element(elemMail).hasClass('ng-invalid')).toEqual(true);
      expect(angular.element(elemBody).hasClass('ng-valid')).toEqual(true);

      expect(form.$valid).toEqual(false);
    });
    
    it('and the form must be invalid, when the input body is empty', function() {

      form.name.$setViewValue('name');
      form.email.$setViewValue('name@domain.de');
      form.body.$setViewValue('');
      scope.$apply();
      $rootScope.$digest();

      expect(angular.element(elemName).hasClass('ng-valid')).toEqual(true);
      expect(angular.element(elemMail).hasClass('ng-valid')).toEqual(true);
      expect(angular.element(elemBody).hasClass('ng-invalid')).toEqual(true);

      expect(form.$valid).toEqual(false);
    });
    
    it('and the form must be invalid, when the input email is invalid', function() {

      form.email.$setViewValue('name');
      scope.$apply();
      $rootScope.$digest();

      expect(angular.element(elemMail).hasClass('ng-invalid')).toEqual(true);
      
      form.email.$setViewValue('name@');
      scope.$apply();
      $rootScope.$digest();

      expect(angular.element(elemMail).hasClass('ng-invalid')).toEqual(true);
      
      form.email.$setViewValue('@asd');
      scope.$apply();
      $rootScope.$digest();

      expect(angular.element(elemMail).hasClass('ng-invalid')).toEqual(true);

    });

  });
});
