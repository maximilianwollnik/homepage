'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage about', function() {
  
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

  describe('should render about when user navigates to /about', function() {

    beforeEach(function() {
      element(by.css('a[href*="#/about"]')).click();
    });

    it('and the correct header must be available', function() {
      expect(element.all(by.css('#aboutwrap')).getText()).
        toContain('');
    });

    it('and the footer must be available', function() {
      footer();
    });
	
	it('should render social when user navigates to /about', function() {
	  social();
	});

  });
});
