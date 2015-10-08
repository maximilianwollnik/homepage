'use strict';

angular.module('homepage.skill', [ 'slick' ])

.controller('SkillCtrl', [ '$scope', function($scope) {
  $scope.skills = [ {
    title : 'SKILL.JAVA'
  }, {
    title : 'SKILL.ANGULAR'
  }, {
    title : 'SKILL.SOA'
  }, {
    title : 'SKILL.REST'
  }, {
    title : 'SKILL.SPRING'
  }, {
    title : 'SKILL.DOCKER'
  }, {
    title : 'SKILL.VAGRANT'
  }, {
    title : 'SKILL.CI'
  }, {
    title : 'SKILL.AGILE'
  }, {
    title : 'SKILL.WATERFALL'
  } ];
} ]);
