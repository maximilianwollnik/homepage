'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage work', function() {
  
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
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('should render work when user navigates to /work', function() {

    beforeEach(function() {
      element(by.css('a[href*="#/work"]')).click();
    });

    it('and the correct header text must be available in German', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
	  expect(element.all(by.css('.container')).getText()).toMatch('Muster');
	  expect(element(by.css('#workwrap')).isPresent()).toBe(true);
    });

    it('and the correct header text must be available in English', function() {
      element(by.css('img[src*="assets/img/en.png"]')).click();
      expect(element.all(by.css('.container')).getText()).toMatch('Samples');
	  expect(element(by.css('#workwrap')).isPresent()).toBe(true);
    });

	it('should render social when user navigates to /work', function() {
	  social();
	});
	
	it('and the footer must be available', function() {
      footer();
    });
	
	it('and 2 samples must be available', function() {
	  browser.waitForAngular();
	  expect(element.all(by.css('.embed-responsive-16by9')).count()).toEqual(2);
    });
  });
  
});
