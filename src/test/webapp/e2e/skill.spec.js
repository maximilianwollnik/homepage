'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage skill', function() {
  
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
 	  browser.waitForAngular();
    browser.get('index.html');
    browser.driver.manage().window().setSize(1280, 1024);
  });
  
  it('should automatically redirect to /home when location hash/fragment is empty', function() {beforeEach(function() {
      browser.driver.manage().window().setSize(1280, 1024);
    });
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('should render skill when user navigates to /skill', function() {

    beforeEach(function() {
      element(by.css('a[href*="#/skill"]')).click();
    });

    it('and the correct header text must be available in German', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
	    expect(element(by.css('#skillwrap')).isPresent()).toBe(true);
    });
	
	  it('and the skill tag must contain angular in German', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
	    expect(element.all(by.css('slick')).getText()).toMatch('Angular');
    });
	
	  it('and the timeline tag must contain angular in English', function() {
      element(by.css('img[src*="assets/img/en.png"]')).click();
	    expect(element.all(by.css('slick')).getText()).toMatch('Angular');
    });
	
	  it('and 10 skills must be available', function() {
	    expect(element.all(by.css('h3')).count()).toEqual(10);
    });

	  it('should render social when user navigates to /skill', function() {
	    social();
	  });
	
	  it('and the footer must be available', function() {
      footer();
    });
  });
});
