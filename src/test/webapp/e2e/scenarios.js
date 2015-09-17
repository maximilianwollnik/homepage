'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage', function() {
  
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
  
  it('should render social when user navigates to /home', function() {
    social();
  });
  
  it('and the footer must be available', function() {
	footer();
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

    it('and the footer must be available', function() {
      footer();
    });
	
	it('should render social when user navigates to /about', function() {
	  social();
	});

  });
  
  describe('should render work when user navigates to /cv', function() {

    beforeEach(function() {
      element(by.css('a[href*="#/cv"]')).click();
    });

    it('and the correct header text must be available in German', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
      expect(element.all(by.css('#cvwrap')).getText()).
        toMatch('');
    });
	
	it('and the timeline tag must contain experience in German', function() {
      element(by.css('img[src*="assets/img/de.png"]')).click();
      expect(element.all(by.css('timeline')).getText()).
        toMatch('Erfahrung');
    });
	
	it('and the timeline tag must contain experience in English', function() {
      element(by.css('img[src*="assets/img/en.png"]')).click();
      expect(element.all(by.css('timeline')).getText()).
        toMatch('Experience');
    });

	it('should render social when user navigates to /work', function() {
	  social();
	});
	
	it('and the footer must be available', function() {
      footer();
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
