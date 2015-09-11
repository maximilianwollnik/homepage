'use strict';

describe('homepage.footer.directive module', function() {
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
    $httpBackend.whenGET('info').respond(
        {"build":{"version": "test"}}
    );
    $httpBackend.flush();
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('loads the footer directive', function() {
    it('and our footerwrap must be available', function() {
      
      var element = $compile("<footer></footer>")($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("div class=\"container\"");
    });
  });
});
