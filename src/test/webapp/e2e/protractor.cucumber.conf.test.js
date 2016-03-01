exports.config = {
  specs : [ '*.feature' 
  ],

  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
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
  }],

  baseUrl : 'http://maximilianwollnik.de:9001/',
  directConnect : true,

  framework : 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: './step_definitions/**/*.js',
    tags: '@ALL',
    format: 'json:target/json-files/result.json',
    profile: false,
    'no-source': true
  }
};