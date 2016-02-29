var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require('../support/helper.js');

module.exports = function() {
    //Then
    this.Then(/^(.*) should be visible in the timeline$/, function (text, callback) {
        expect(element(by.css('.header')).getText()).to.eventually.contain(text).and.notify(callback);
    });
    
    this.Then(/^"([^"]*)" entries must be visible in the timeline$/, function (amount, callback) {
        expect(element.all(by.css('timeline-event')).count()).to.eventually.equal(parseInt(amount)).and.notify(callback);
    });
};
