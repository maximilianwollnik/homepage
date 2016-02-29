var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
var expect = chai.expect;
var helper = require('../support/helper.js');

module.exports = function() {
    //Then   
    this.Then(/^FHDW must be visible$/, function (callback) {
        expect(element.all(by.css('.featurette')).count()).to.eventually.equal(1).and.notify(callback);
    });
};
