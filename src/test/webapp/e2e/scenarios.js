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

  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#/about');
    });

    it('should render about when user navigates to /about', function() {
      expect(element.all(by.css('#aboutwrap')).getText()).
        toContain('');
    });

  });

  describe('work', function() {

    beforeEach(function() {
      browser.get('index.html#/work');
    });

    it('should render work when user navigates to /work', function() {
      expect(element.all(by.css('#workwrap')).getText()).
        toMatch('NEW WEBSITE');
    });

  });
});
