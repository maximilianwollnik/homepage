'use strict';

describe('homepage.social.directive module', function() {
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
    $httpBackend.whenGET('assets/i18n/C.json').respond(
        getJSONFixture('de_DE.json')
    );
    $httpBackend.flush();
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('loads the social directive', function() {
    it('and our social container must be available', function() {
      var element = $compile("<social></social>")($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("div class=\"container\"");
    });
  });
});
