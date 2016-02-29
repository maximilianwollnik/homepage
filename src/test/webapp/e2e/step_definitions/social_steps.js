var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require('../support/helper.js');

module.exports = function() {
    this.When(/^I click on the envelope$/, function (callback) {
        element(by.css('.fa-envelope-square')).click();
        browser.sleep(500);
        Promise.all([
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.name.$error.required"]')).isDisplayed()).to.eventually.equal(false),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.email.$error.required"]')).isDisplayed()).to.eventually.equal(false),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.body.$error.required"]')).isDisplayed()).to.eventually.equal(false)
        ]).should.notify(callback);
    });
    
    this.When(/^I click on the submit button$/, function (callback) {
        element(by.css('button[class*="btn btn-primary"]')).click();
        browser.sleep(500);
        callback();
    });
    
    this.When(/^I enter an invalid email address$/, function (callback) {
        element(by.css('input[name*="name"]')).sendKeys('name');
        element(by.css('input[name*="email"]')).sendKeys('name');
        element(by.css('textarea[name*="body"]')).sendKeys('name');
        callback();
    });
    
    this.Then(/^I close the form again$/, function (callback) {
        element(by.css('.close')).click();
        callback();
    });
    
    this.Then(/^(.*) should be visible in the mail form$/, function (text, callback) {
        expect(element(by.css('#mailModalLabel')).getText()).to.eventually.contain(text).and.notify(callback);
    });
    
    this.Then(/^all form errors are shown$/, function (callback) {
        Promise.all([
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.name.$error.required"]')).isDisplayed()).to.eventually.equal(true),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.email.$error.required"]')).isDisplayed()).to.eventually.equal(true),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.body.$error.required"]')).isDisplayed()).to.eventually.equal(true)
        ]).should.notify(callback);
    });
    
    this.Then(/^only email error is shown$/, function (callback) {
        element(by.css('button[class*="btn btn-primary"]')).click();
        Promise.all([
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.name.$error.required"]')).isDisplayed()).to.eventually.equal(false),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.$error.email"]')).isDisplayed()).to.eventually.equal(true),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.body.$error.required"]')).isDisplayed()).to.eventually.equal(false)
        ]).should.notify(callback);
    });
    
    this.Then(/^all form errors are resetted after reopening$/, function (callback) {
        element(by.css('.fa-envelope-square')).click();
        browser.sleep(500);
        element(by.css('button[class*="btn btn-primary"]')).click();
        browser.sleep(500);
        element(by.css('button[class*="btn btn-default"]')).click();
        browser.sleep(500);
        element(by.css('.fa-envelope-square')).click();
        browser.sleep(500);
        Promise.all([
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.name.$error.required"]')).isDisplayed()).to.eventually.equal(false),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.email.$error.required"]')).isDisplayed()).to.eventually.equal(false),
            expect(element(by.css('span[data-ng-show*="submitted && mailForm.body.$error.required"]')).isDisplayed()).to.eventually.equal(false)
        ]).should.notify(callback);
    });
};
