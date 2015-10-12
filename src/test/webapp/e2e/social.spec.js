'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage social', function() {

  function social() {
    expect(element(by.css('.fa-xing')).isPresent()).toBe(true);
    expect(element(by.css('.fa-facebook')).isPresent()).toBe(true);
    expect(element(by.css('.fa-github')).isPresent()).toBe(true);
    expect(element(by.css('.fa-stack-overflow')).isPresent()).toBe(true);
    expect(element(by.css('.fa-google-plus')).isPresent()).toBe(true);
    expect(element(by.css('.fa-envelope-square')).isPresent()).toBe(true);
  }

  function openModal() {
    element.all(by.css('#mail')).getCssValue('display').then(function(styleProperty) {
      expect(styleProperty).toMatch('none');
    });
    element(by.css('a[data-target*="#mail"]')).click();
    browser.driver.sleep(500);
    element.all(by.css('#mail')).getCssValue('display').then(function(styleProperty) {
      expect(styleProperty).toMatch('block');
    });
  }

  function closeModal() {
    element(by.css('button[class*="btn btn-default"]')).click();
    browser.driver.sleep(500);
    element.all(by.css('#mail')).getCssValue('display').then(function(styleProperty) {
      expect(styleProperty).toMatch('none');
    });
  }

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.ignoreSynchronization = true;
    browser.get('index.html');
    browser.waitForAngular();
    browser.driver.manage().window().setSize(1280, 1024);
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('should render social when user navigates to /home', function() {

    it('and the mail modal be available in German when opened', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
      browser.executeScript('window.scrollTo(0,10000);').then(function() {
        openModal();

        expect(element(by.css('#mailModalLabel')).getText()).toMatch('Schreiben Sie mir eine Mail');

        closeModal();
      });
    });

    it('and the mail modal must be invalid when it is submitted empty', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
      browser.executeScript('window.scrollTo(0,10000);').then(
          function() {
            openModal();

            expect(element(by.css('span[data-ng-show*="submitted && mailForm.name.$error.required"]')).isDisplayed())
                .toBe(false);
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.email.$error.required"]')).isDisplayed())
                .toBe(false);
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.body.$error.required"]')).isDisplayed())
                .toBe(false);
            element(by.css('button[class*="btn btn-primary"]')).click();
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.name.$error.required"]')).isDisplayed())
                .toBe(true);
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.email.$error.required"]')).isDisplayed())
                .toBe(true);
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.body.$error.required"]')).isDisplayed())
                .toBe(true);

            closeModal();
          });
    });
    
    it('and the mail modal must be invalid when it is submitted with wrong email', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
      browser.executeScript('window.scrollTo(0,10000);').then(
          function() {
            openModal();

            element(by.css('input[name*="name"]')).sendKeys('name');
            element(by.css('input[name*="email"]')).sendKeys('name');
            element(by.css('textarea[name*="body"]')).sendKeys('name');
            
            element(by.css('button[class*="btn btn-primary"]')).click();
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.name.$error.required"]')).isDisplayed())
                .toBe(false);
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.$error.email"]')).isDisplayed())
                .toBe(true);
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.body.$error.required"]')).isDisplayed())
                .toBe(false);

            closeModal();
          });
    });

    it('should render social when user navigates to /work', function() {
      social();
    });
  });

});
