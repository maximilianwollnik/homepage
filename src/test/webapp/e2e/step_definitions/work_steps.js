var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require('../support/helper.js');

module.exports = function() {    
    this.Then(/^2 samples must be available$/, function (callback) {
        expect(element.all(by.css('.embed-responsive-16by9')).count()).to.eventually.equal(2).and.notify(callback);
    });
};
