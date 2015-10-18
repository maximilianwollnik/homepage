exports.config = {
  allScriptsTimeout : 11000,

  specs : [ '*.spec.js' ],

  capabilities : {
    'browserName' : 'chrome',
    chromeOptions : {
      // How to set browser language (menus & so on)
      args : [ 'lang=en-EN' ],
      // How to set Accept-Language header
      prefs : {
        intl : {
          accept_languages : "en-EN"
        }
      }
    }
  },

  baseUrl : 'http://localhost:8000/',

  framework : 'jasmine',

  jasmineNodeOpts : {
    defaultTimeoutInterval : 30000
  }
};
