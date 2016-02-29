var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require('../support/helper.js');

module.exports = function() {    
    this.Then(/^10 skills must be available$/, function (callback) {
        expect(element.all(by.repeater('skill in skills')).count()).to.eventually.above(10).and.notify(callback);
    });
    
    this.Then(/^(.*) should be visible in the carousel$/, function (text, callback) {
        expect(element(by.css('slick')).getText()).to.eventually.contain(text).and.notify(callback);
    });
};
