'use strict';

describe(
    'homepage about',
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

      describe('should render disclaimer when user navigates to /disclaimer',
          function() {

            beforeEach(function() {
              element(by.css('a[href*="#/disclaimer"]')).click();
            });

            it('and the correct header must be available', function() {
              browser.sleep(1000);
              browser.executeScript('window.scrollTo(0,0);').then(
                  function() {
                    browser.sleep(500);
                    expect(element(by.css('div[class*="header col-lg-8 col-lg-offset-2"]'))
                        .getText()).not.toMatch('DISCLAIMER.HEADLINE.PRE');
                    expect(element.all(by.css('#disclaimerwrap')).getText())
                        .toContain('');
                  })
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

            it('and 4 disclaimers + 2 containers must be available',
                function() {
                  expect(element.all(by.css('.col-lg-offset-2')).count())
                      .toEqual(6);
                });

            it('and the footer must be available', function() {
              footer();
            });

            it('should render social when user navigates to /disclaimer',
                function() {
                  social();
                });

          });
    });
