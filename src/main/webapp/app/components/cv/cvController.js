'use strict';

angular.module('homepage.cv', [ 'angular-timeline' ])

.controller('CvCtrl', [ '$scope', function($scope) {
  $scope.events = [ {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-edit',
    title : 'CV.EVENTS.OCBC.TITLE',
    role : 'CV.EVENTS.OCBC.CONTENT.ROLE',
    activity : 'CV.EVENTS.OCBC.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.OCBC.CONTENT.TASK',
    dev_env : 'CV.EVENTS.OCBC.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.OCBC.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.OCBC.CONTENT.TECHNOLOGY'
  },{
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.HSBC_2.TITLE',
    role : 'CV.EVENTS.HSBC_2.CONTENT.ROLE',
    activity : 'CV.EVENTS.HSBC_2.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.HSBC_2.CONTENT.TASK',
    dev_env : 'CV.EVENTS.HSBC_2.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.HSBC_2.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.HSBC_2.CONTENT.TECHNOLOGY'
  },{
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.CBA_2.TITLE',
    role : 'CV.EVENTS.CBA_2.CONTENT.ROLE',
    activity : 'CV.EVENTS.CBA_2.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.CBA_2.CONTENT.TASK',
    dev_env : 'CV.EVENTS.CBA_2.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.CBA_2.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.CBA_2.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.ABN.TITLE',
    role : 'CV.EVENTS.ABN.CONTENT.ROLE',
    activity : 'CV.EVENTS.ABN.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.ABN.CONTENT.TASK',
    dev_env : 'CV.EVENTS.ABN.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.ABN.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.ABN.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.CBA_1.TITLE',
    role : 'CV.EVENTS.CBA_1.CONTENT.ROLE',
    activity : 'CV.EVENTS.CBA_1.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.CBA_1.CONTENT.TASK',
    dev_env : 'CV.EVENTS.CBA_1.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.CBA_1.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.CBA_1.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.BANKDATA.TITLE',
    role : 'CV.EVENTS.BANKDATA.CONTENT.ROLE',
    activity : 'CV.EVENTS.BANKDATA.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.BANKDATA.CONTENT.TASK',
    dev_env : 'CV.EVENTS.BANKDATA.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.BANKDATA.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.BANKDATA.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.HSBC_1.TITLE',
    role : 'CV.EVENTS.HSBC_1.CONTENT.ROLE',
    activity : 'CV.EVENTS.HSBC_1.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.HSBC_1.CONTENT.TASK',
    dev_env : 'CV.EVENTS.HSBC_1.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.HSBC_1.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.HSBC_1.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'info',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.WELLS_FARGO.TITLE',
    role : 'CV.EVENTS.WELLS_FARGO.CONTENT.ROLE',
    activity : 'CV.EVENTS.WELLS_FARGO.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.WELLS_FARGO.CONTENT.TASK',
    dev_env : 'CV.EVENTS.WELLS_FARGO.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.WELLS_FARGO.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.WELLS_FARGO.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'primary',
    badgeIconClass : 'glyphicon-edit',
    title : 'CV.EVENTS.DIEBOLD_NIXDORF.TITLE',
    role : 'CV.EVENTS.DIEBOLD_NIXDORF.CONTENT.ROLE',
    activity : 'CV.EVENTS.DIEBOLD_NIXDORF.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.DIEBOLD_NIXDORF.CONTENT.TASK',
    dev_env : 'CV.EVENTS.DIEBOLD_NIXDORF.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.DIEBOLD_NIXDORF.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.DIEBOLD_NIXDORF.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.WINCOR_NIXDORF.TITLE',
    role : 'CV.EVENTS.WINCOR_NIXDORF.CONTENT.ROLE',
    activity : 'CV.EVENTS.WINCOR_NIXDORF.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.WINCOR_NIXDORF.CONTENT.TASK',
    dev_env : 'CV.EVENTS.WINCOR_NIXDORF.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.WINCOR_NIXDORF.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.WINCOR_NIXDORF.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.THUNE.TITLE',
    role : 'CV.EVENTS.THUNE.CONTENT.ROLE',
    activity : 'CV.EVENTS.THUNE.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.THUNE.CONTENT.TASK',
    dev_env : 'CV.EVENTS.THUNE.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.THUNE.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.THUNE.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.ZIKON.TITLE',
    role : 'CV.EVENTS.ZIKON.CONTENT.ROLE',
    activity : 'CV.EVENTS.ZIKON.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.ZIKON.CONTENT.TASK',
    dev_env : 'CV.EVENTS.ZIKON.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.ZIKON.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.ZIKON.CONTENT.TECHNOLOGY'
  }, {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EVENTS.PIGAL.TITLE',
    role : 'CV.EVENTS.PIGAL.CONTENT.ROLE',
    activity : 'CV.EVENTS.PIGAL.CONTENT.ACTIVITY',
    task : 'CV.EVENTS.PIGAL.CONTENT.TASK',
    dev_env : 'CV.EVENTS.PIGAL.CONTENT.DEV_ENV',
    component : 'CV.EVENTS.PIGAL.CONTENT.COMPONENT',
    technology : 'CV.EVENTS.PIGAL.CONTENT.TECHNOLOGY'
  } ];

  $scope.explanations = [ {
    badgeClass : 'success',
    badgeIconClass : 'glyphicon-check',
    title : 'CV.EXPLANATIONS.JOB_FINISHED.TITLE',
    content : 'CV.EXPLANATIONS.JOB_FINISHED.CONTENT'
  }, {
    badgeClass : 'primary',
    badgeIconClass : 'glyphicon-edit',
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
