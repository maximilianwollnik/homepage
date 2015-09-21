'use strict';

// Declare app level module which depends on views, and components
var homepage = angular.module('homepage', ['ngRoute',
  'pascalprecht.translate',
  'ngSanitize',
  'homepage.home',
  'homepage.disclaimer',
  'homepage.work',
  'homepage.cv',
  'homepage.navigation',
  'homepage.social',
  'homepage.footer',
  'homepage.skill'
]);

homepage.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
      prefix: 'assets/i18n/',
      suffix: '.json'
  });
  $translateProvider.determinePreferredLanguage();
  $translateProvider.fallbackLanguage('de_DE');
  $translateProvider.useSanitizeValueStrategy('sanitize');
}]);
