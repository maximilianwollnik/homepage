'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe(
    'homepage education',
    function() {

      function social() {
        expect(element(by.css('.fa-xing')).isPresent()).toBe(true);
        expect(element(by.css('.fa-facebook')).isPresent()).toBe(true);
        expect(element(by.css('.fa-github')).isPresent()).toBe(true);
        expect(element(by.css('.fa-stack-overflow')).isPresent()).toBe(true);
        expect(element(by.css('.fa-google-plus')).isPresent()).toBe(true);
        expect(element(by.css('.fa-envelope-square')).isPresent()).toBe(true);
      }

      function footer() {
        expect(element.all(by.css('#footerwrap')).getText())
            .toMatch('Version:');
        expect(element.all(by.css('#footerwrap')).getText()).toMatch(
            'Copyright');
      }

      it(
          'should automatically redirect to /home when location hash/fragment is empty',
          function() {
            browser.ignoreSynchronization = true;
            browser.get('index.html');
            browser.waitForAngular();
            browser.driver.manage().window().setSize(1280, 1024);
            expect(browser.getLocationAbsUrl()).toMatch("/home");
          });

      describe('should render education when user navigates to /education',
          function() {

            beforeEach(function() {
              element(by.css('a[href*="#/education"]')).click();
            });

            it('and the correct header text must be available in German',
                function() {
                  expect(element(by.css('#educationwrap')).isPresent()).toBe(false);
                  browser.sleep(500);
                  browser.executeScript('window.scrollTo(0,0);').then(function () {
                      element(by.css('img[src*="assets/img/de.png"]')).click();
                      var ele = element.all(by.css('.container'));
                      browser.waitForAngular();
                      expect(ele.getText()).toMatch('Ausbildung');
                      expect(element(by.css('#educationwrap')).isPresent()).toBe(
                          true);
                      })   
                });

            it('and the correct header text must be available in English',
                function() {
                  element(by.css('img[src*="assets/img/en.png"]')).click();
                  var ele = element.all(by.css('.container'));
                  browser.waitForAngular();
                  expect(ele.getText()).toMatch('Education');
                  expect(element(by.css('#educationwrap')).isPresent()).toBe(
                      true);
                });

            it('and the lorem ipsum text must not be available in German',
                function() {
                  element(by.css('img[src*="assets/img/de.png"]')).click();
                  var ele = element.all(by.css('.container'));
                  browser.waitForAngular();
                  expect(ele.getText()).not.toMatch('Lorem Ipsum');
                });

            it('and the lorem ipsum text must not be available in English',
                function() {
                  element(by.css('img[src*="assets/img/en.png"]')).click();
                  var ele = element.all(by.css('.container'));
                  browser.waitForAngular();
                  expect(ele.getText()).not.toMatch('Lorem Ipsum');
                });

            it('and the education must be listed', function() {
              element(by.css('img[src*="assets/img/de.png"]')).click();
              browser.waitForAngular();
              expect(element.all(by.css('.featurette')).count()).toEqual(1);
              expect(element.all(by.css('.col-md-7')).getText())
                  .toMatch('Fachhochschule der Wirtschaft');
            });

            it('should render social when user navigates to /education',
                function() {
                  social();
                });

            it('and the footer must be available', function() {
              footer();
            });

          });

    });
