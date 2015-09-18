'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage home', function() {
  
  function social() {
	expect(element(by.css('.fa-xing')).isPresent()).toBe(true);
	expect(element(by.css('.fa-facebook')).isPresent()).toBe(true);
	expect(element(by.css('.fa-github')).isPresent()).toBe(true);
	expect(element(by.css('.fa-stack-overflow')).isPresent()).toBe(true);
	expect(element(by.css('.fa-google-plus')).isPresent()).toBe(true);
	expect(element(by.css('.fa-envelope-square')).isPresent()).toBe(true);
  }
  
  function footer() {
	expect(element.all(by.css('#footerwrap')).getText()).toMatch('Version:');
	expect(element.all(by.css('#footerwrap')).getText()).toMatch('Copyright');
  }

  beforeEach(function() {
	browser.ignoreSynchronization = true; 
	browser.get('index.html'); 
	browser.waitForAngular();
    browser.driver.manage().window().setSize(1280, 1024);
  });

  it('should automatically redirect to /home when location hash/fragment is empty', function() {beforeEach(function() {
        browser.driver.manage().window().setSize(1280, 1024);
    });
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  it('should render home when user navigates to /home in German', function() {
    element(by.css('img[src*="assets/img/de.png"]')).click();
	expect(element.all(by.css('.container')).getText()).toMatch('Entwickler');
	expect(element(by.css('#headerwrap')).isPresent()).toBe(true);
  });

  it('should render home when user navigates to /home in English', function() {
    element(by.css('img[src*="assets/img/en.png"]')).click();
	expect(element.all(by.css('.container')).getText()).toMatch('Developer');
	expect(element(by.css('#headerwrap')).isPresent()).toBe(true);
  });
  
  it('should render social when user navigates to /home', function() {
    social();
  });
  
  it('and the footer must be available', function() {
	footer();
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
