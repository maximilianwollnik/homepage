'use strict';

angular.module('homepage')
    .controller('DashboardCtrl', function($scope, $state, $timeout) {
        $scope.$state = $state;

        $scope.menuItems = [];
        angular.forEach($state.get(), function (item) {
            if (item.data && item.data.visible) {
                $scope.menuItems.push({name: item.name, text: item.data.text});
            }
        });
        $timeout(function() {
            angular.element(document.querySelector('#firstMenu')).triggerHandler('click');
        }, 0);
    })
    .controller('TranslateController', function($translate, $scope) {
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    });
