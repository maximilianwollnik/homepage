'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('homepage', function() {

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  it('should render home when user navigates to /home', function() {
    expect(element.all(by.css('#headerwrap')).getText()).
      toMatch('DEVELOPER');
  });

  describe('should render about when user navigates to /about', function() {

    beforeEach(function() {
      browser.get('index.html#/about');
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
      browser.get('index.html#/work');
    });

    it('and the correct header text must be available', function() {
      expect(element.all(by.css('#workwrap')).getText()).
        toMatch('NEW WEBSITE');
    });

  });
});
