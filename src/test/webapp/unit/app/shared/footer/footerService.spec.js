'use strict';

describe(
    'homepage.footer.service module',
    function() {
      var version, location, $httpBackend;
      beforeEach(module('homepage'));
      beforeEach(module('templates'));
      beforeEach(module('homepage.footer'));
      beforeEach(inject(function($injector, $location, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        version = $injector.get('footerVersion');
        location = $location;
        jasmine.getJSONFixtures().fixturesPath = 'base/src/main/webapp/assets/i18n';

        $httpBackend.whenGET('assets/i18n/de_DE.json').respond(
            getJSONFixture('de_DE.json'));
        $httpBackend.whenGET('assets/i18n/C.json').respond(
            getJSONFixture('de_DE.json'));
      }));

      describe('gets all data for the footer', function() {

        it('and reads the correct version from the real respond', function() {
          $httpBackend.whenGET('info').respond({
            'build' : {
              'version' : 'test',
              'timestamp' : 'tomorrow'
            }
          });
          version.async().then(function(d) {
            expect(d.version).toBe('test');
            expect(d.timestamp).toBe('tomorrow');
          });
          $httpBackend.flush();
        });

        it('and returns a default value if the endpoint is not reachable',
            function() {
              $httpBackend.whenGET('info').respond(404);
              version.async().then(function(d) {
                expect(d.version).toBe('default');
                expect(d.timestamp).toBe('today');
              });
              $httpBackend.flush();
            });

      });
    });
