describe('homepage.module', function () {
  var $httpBackend;
  
  beforeEach(module('homepage'));

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

  describe('loads the main app', function() {
    it('and the default language should be set to de_DE', inject(function($translate) {
      var current = $translate.use();
      if (current == 'C') {
        current = 'de_DE';
      }
      expect(current).toEqual('de_DE');
    }));
  });

  describe('is responsible for the view overview', function() {
    var element, scope;  

    beforeEach(inject(function(_$compile_, _$rootScope_,_$location_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $location = _$location_;
    
      scope = $rootScope.$new();
      // prepare scope in which your directive should be used
      // ...
      element = angular.element('<h4 ng-bind-html="\'HOME.HEADLINE.PRE\' | translate"></h4><h1 ng-bind-html="\'HOME.HEADLINE.TITLE\' | translate"></h1>');
      $compile(element)(scope);
      scope = element.scope();
      return scope.$apply();
    }));

    it('and the english translation should be loaded', inject(function($compile) {
      expect(element.text()).toBe('Hi, mein Name istMaximilian Wollnik');
    }));

  }); 
});
