var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require('../support/helper.js');

module.exports = function() {
    //Then   
    this.Then(/^"([^"]*)" entries must be visible in the disclaimer$/, function (amount, callback) {
        expect(element.all(by.css('.col-lg-offset-2')).count()).to.eventually.equal(parseInt(amount)).and.notify(callback);
    });
};
