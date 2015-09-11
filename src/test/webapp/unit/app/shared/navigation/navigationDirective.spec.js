'use strict';

describe('homepage.navigation.directive module', function() {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('homepage'));
  // load the templates
  beforeEach(module('templates'));

  beforeEach(inject(function(_$httpBackend_){  
    $httpBackend =  _$httpBackend_;
    jasmine.getJSONFixtures().fixturesPath='base/src/main/webapp/assets/i18n';

    $httpBackend.whenGET('assets/i18n/de_DE.json').respond(
        getJSONFixture('de_DE.json')
    );
    $httpBackend.flush();
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('loads the navigation directive', function() {
    it('and our links must be available', function() {
      var element = $compile("<navigation></navigation>")($rootScope);
      // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
      $rootScope.$digest();
      expect(element.html()).toContain("<a href=\"#/about\" class=\"ng-binding\">About</a>");
      expect(element.html()).toContain("<a href=\"#/work\" class=\"ng-binding\">Work</a>");
    });
  });
});