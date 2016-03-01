module.exports = function(config){
  config.set({

    basePath : '../../../../',

    files : [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/slick-carousel/slick/slick.min.js',
      'bower_components/angular-slick/dist/slick.js',
      'bower_components/angular-timeline/dist/angular-timeline.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/jasmine/lib/jasmine-core/jasmine.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'bower_components/promise-tracker/promise-tracker.js',
      // endbower
      'src/main/webapp/app/**/*.js',
      'src/main/webapp/app/**/*.html',
      'src/test/webapp/unit/app/**/*.js',

      // fixtures
      {pattern: 'src/main/webapp/assets/i18n/*.json', watched: true, served: true, included: false},
      {pattern: 'src/main/webapp/assets/img/*.png', watched: false, included: false, served: true}
    ],

    proxies: {
      '/assets/img/de.png': '/base/src/main/webapp/assets/img/de.png',
      '/assets/img/en.png': '/base/src/main/webapp/assets/img/en.png'
    },

    preprocessors: {
        'src/main/webapp/app/**/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
        // If your build process changes the path to your templates,
        // use stripPrefix and prependPrefix to adjust it.
        stripPrefix: 'src/main/webapp/',

        moduleName: 'templates'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor' 
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
