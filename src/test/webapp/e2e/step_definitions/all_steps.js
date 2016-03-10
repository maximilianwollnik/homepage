var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require('../support/helper.js');

module.exports = function() {
    //Given
    this.Given(/^I navigate to(?: the website)? "([^"]*)"$/, function(url, callback) {
        helper.setup(browser, url, 1280, 1024);
        //helper.findByCss(element, '.container', function(result){
        //    expect(result).to.have.lengthOf(3);    
        //    expect(result[2].getText()).to.eventually.contain(text).and.notify(callback);            
        //});
        browser.sleep(500);
        expect(browser.getLocationAbsUrl()).to.eventually.contain('/home').and.notify(callback);
    });
    
    this.Given(/^I select "([^"]*)"$/, function (link, callback) {
        element(by.css('a[href*="#/'+link+'#content"]')).click();
        callback();
    });
    
    //When
    this.When(/^I scroll to the top$/, function (callback) {
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            callback();
        });
    });
    
    this.When(/^I scroll to the bottom$/, function (callback) {
        browser.executeScript('window.scrollTo(0,10000);');
        browser.sleep(500);
        callback();
    });
       
    this.When(/^the (.*) flag is clicked$/, function (flag, callback) {
        element(by.css('img[src*="assets/img/'+flag+'.png"]')).click();
        browser.sleep(500);
        callback();
    });
    
    this.When(/^I click on the back button$/, function (callback) {
        browser.navigate().back();
        callback();
    });
    
    //Then
    this.Then(/the title should equal "([^"]*)"$/, function(text, callback) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^(.*) should be visible$/, function (text, callback) {
        var promises = [];
        promises.push(expect(element(by.css('#headerwrap')).isPresent()).to.eventually.equal(true));
        element.all(by.css('.container')).then(function(items) {
            promises.push(expect(items[2].getText()).to.eventually.contain(text));
            promises.push(expect(items).to.have.lengthOf(3));
            Promise.all(promises).should.notify(callback);
        });
    });
    
    this.Then(/^(.*) should NOT be visible$/, function (text, callback) {
        element.all(by.css('.container')).then(function(items) {
            var promises = [];
            items.forEach(function (ele) {
                promises.push(expect(ele.getText()).to.not.eventually.contain(text));
            });
            Promise.all(promises).should.notify(callback);
        });
    });
    
    this.Then(/^a link to (.*) should be available$/, function (link, callback) {
        browser.sleep(500);
        expect(element(by.css('.fa-'+link)).isPresent()).to.eventually.equal(true).and.notify(callback);
    });
    
    this.Then(/^a footer must be available$/, function (callback) {
        Promise.all([
            expect(element(by.css('#footerwrap')).getText()).to.eventually.contain('Version:'),
            expect(element(by.css('#footerwrap')).getText()).to.eventually.contain('Copyright')
        ]).should.notify(callback);
    });
    
    this.Then(/^the navigation should be changed into a toggle object$/, function (callback) {
        browser.driver.manage().window().setSize(600, 400);
        element(by.css('img[src*="assets/img/de.png"]')).click();
        element(by.css('button[class*="navbar-toggle"]')).click();
        expect(element(by.css('div[aria-expanded*="true"]')).isPresent()).to.eventually.equal(true).and.notify(callback);
    });
    
    this.Then(/^it should expose the correct global variables$/, function(callback) {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
        callback();
    });
    
    this.Then(/^"([^"]*)" must be in the display area$/, function (id, callback) {
        expect(element(by.css('#'+id)).isDisplayed()).to.eventually.equal(true).and.notify(callback);
    });
    
    this.Then(/^(.*) should be visible in the upper part$/, function (text, callback) {
        expect(element(by.css('.header')).getText()).to.eventually.contain(text).and.notify(callback);
    });
};
