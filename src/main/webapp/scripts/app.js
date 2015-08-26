'use strict';

var states = [
        { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {text: "BUTTON.MENU_BASE", visible: false } } },
        { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {text: "BUTTON.MENU_LOGIN", visible: false } } },
        { name: 'dashboard', state: { url: '/dashboard', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: {text: "BUTTON.MENU_DASHBOARD", visible: false } } },
        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', data: {text: "BUTTON.MENU_OVERVIEW", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "BUTTON.MENU_REPORTS", visible: false } } },
        { name: 'resume', state: { url: '/resume', parent: 'dashboard', templateUrl: 'views/dashboard/resume.html', data: {text: "BUTTON.MENU_RESUME", visible: true } } },
        { name: 'samples', state: { url: '/samples', parent: 'dashboard', templateUrl: 'views/dashboard/samples.html', data: {text: "BUTTON.MENU_SAMPLES", visible: true } } },
        { name: 'contact', state: { url: '/contact', parent: 'dashboard', templateUrl: 'views/dashboard/contact.html', data: {text: "BUTTON.MENU_CONTACT", visible: true } } },
    ];
   
angular.module('homepage', [
                'ui.router',
                'snap',
                'ngAnimate',
                'pascalprecht.translate',
                'ngSanitize'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('/dashboard', '/dashboard/overview');
            $urlRouterProvider.otherwise('/dashboard');
            
            angular.forEach(states, function (state) {
                $stateProvider.state(state.name, state.state);
            });
        })
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'languages/',
                suffix: '.json'
            });
            $translateProvider.use('en');
            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy('sanitize');
            //$translateProvider.useSanitizeValueStrategy('escape');
        }]);

