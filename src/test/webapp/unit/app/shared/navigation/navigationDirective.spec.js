'use strict';

describe('homepage.navigation.directive module', function() {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('homepage'));
  // load the templates
  beforeEach(module('templates'));

  beforeEach(inject(function(_$httpBackend_, _$compile_, _$rootScope_){  
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend =  _$httpBackend_;
    jasmine.getJSONFixtures().fixturesPath='base/src/main/webapp/assets/i18n';

    $httpBackend.whenGET('assets/i18n/de_DE.json').respond(
        getJSONFixture('de_DE.json') 
    );
    $httpBackend.whenGET('assets/i18n/C.json').respond(
        getJSONFixture('de_DE.json')
    );
    $httpBackend.flush(); 
  }));

  describe('loads the navigation directive', function() {
    it('and our links must be available', function() {
      var element = $compile("<navigation></navigation>")($rootScope);
      // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
      $rootScope.$digest();
      expect(element.html()).toContain("<a href=\"#/about\" ng-bind-html=\"route.name\" class=\"ng-binding\">About</a>");
      expect(element.html()).toContain("<a href=\"#/work\" ng-bind-html=\"route.name\" class=\"ng-binding\">Work</a>");
    });
  });
});
