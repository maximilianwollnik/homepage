'use strict';

angular.module('homepage.cv', [ 'angular-timeline' ])

.controller('CvCtrl', [ '$scope', function($scope) {
  $scope.events = [ {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.ABN.TITLE',
    content : 'CV.EVENTS.ABN.CONTENT'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-edit',
    title : 'CV.EVENTS.CBA.TITLE',
    content : 'CV.EVENTS.CBA.CONTENT'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.BANKDATA.TITLE',
    content : 'CV.EVENTS.BANKDATA.CONTENT'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-edit',
    title : 'CV.EVENTS.HSBC.TITLE',
    content : 'CV.EVENTS.HSBC.CONTENT'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.WELLS_FARGO.TITLE',
    content : 'CV.EVENTS.WELLS_FARGO.CONTENT'
  }, {
    badgeClass : 'primary',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.WINCOR_NIXDORF.TITLE',
    content : 'CV.EVENTS.WINCOR_NIXDORF.CONTENT'
  }, {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.THUNE.TITLE',
    content : 'CV.EVENTS.THUNE.CONTENT'
  }, {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.ZIKON.TITLE',
    content : 'CV.EVENTS.ZIKON.CONTENT'
  }, {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.PIGAL.TITLE',
    content : 'CV.EVENTS.PIGAL.CONTENT'
  } ];

  $scope.explanations = [ {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EXPLANATIONS.JOB_FINISHED.TITLE',
    content : 'CV.EXPLANATIONS.JOB_FINISHED.CONTENT'
  }, {
    badgeClass : 'primary',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EXPLANATIONS.JOB_CURRENT.TITLE',
    content : 'CV.EXPLANATIONS.JOB_CURRENT.CONTENT'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EXPLANATIONS.PROJECT_FINISHED.TITLE',
    content : 'CV.EXPLANATIONS.PROJECT_FINISHED.CONTENT'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-edit',
    title : 'CV.EXPLANATIONS.PROJECT_CURRENT.TITLE',
    content : 'CV.EXPLANATIONS.PROJECT_CURRENT.CONTENT'
  } ];
} ]);
