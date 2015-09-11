'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage', function() {

  beforeEach(function() {
    browser.driver.manage().window().setSize(1280, 1024);
  });

  it('should automatically redirect to /home when location hash/fragment is empty', function() {beforeEach(function() {
        browser.driver.manage().window().setSize(1280, 1024);
    });
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  it('should render home when user navigates to /home in German', function() {
    element(by.css('img[src*="assets/img/de.png"]')).click();
    expect(element.all(by.css('#headerwrap')).getText()).
      toMatch('Entwickler');
  });

  it('should render home when user navigates to /home in English', function() {
    element(by.css('img[src*="assets/img/en.png"]')).click();
    expect(element.all(by.css('#headerwrap')).getText()).
      toMatch('Developer');
  });

  describe('should render about when user navigates to /about', function() {

    beforeEach(function() {
      element(by.css('a[href*="#/about"]')).click();
      browser.waitForAngular();
    });

    it('and the correct header must be available', function() {
      expect(element.all(by.css('#aboutwrap')).getText()).
        toContain('');
    });

    it('and the footer must contain a version information', function() {
      expect(element.all(by.css('#footerwrap')).getText()).
        toMatch('Version:');
    });

  });

  describe('should render work when user navigates to /work', function() {

    beforeEach(function() {
      element(by.css('a[href*="#/work"]')).click();
    });

    it('and the correct header text must be available in German', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
      expect(element.all(by.css('#workwrap')).getText()).
        toMatch('Muster');
    });

    it('and the correct header text must be available in English', function() {
      element(by.css('img[src*="assets/img/en.png"]')).click();
      expect(element.all(by.css('#workwrap')).getText()).
        toMatch('Samples');
    });

  });

  describe('should hide the navigation into a toggle object', function() {

    beforeEach(function() {
      browser.driver.manage().window().setSize(600, 400);
      
    });

    it('and the navigation must be available when the navbar button is pressed', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
      element(by.css('button[class*="navbar-toggle"]')).click();
      expect(element(by.css('div[aria-expanded*="true"]')).isPresent()).toBe(true);
    });

  });
});
