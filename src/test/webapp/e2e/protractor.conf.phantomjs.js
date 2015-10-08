exports.config = {
  allScriptsTimeout : 11000,

  specs : [ '*.spec.js' ],

  capabilities : {
    'browserName' : 'phantomjs'
  },

  baseUrl : 'http://maximilianwollnik.de:9001/',

  framework : 'jasmine',

  jasmineNodeOpts : {
    defaultTimeoutInterval : 30000
  }
};
