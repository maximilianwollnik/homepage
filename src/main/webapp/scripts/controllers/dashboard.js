'use strict';

angular.module('homepage')
    .controller('DashboardCtrl', function($scope, $state) {
        $scope.$state = $state;

        $scope.menuItems = [];
        angular.forEach($state.get(), function (item) {
            if (item.data && item.data.visible) {
                $scope.menuItems.push({name: item.name, text: item.data.text});
            }
        });
    })
    .controller('TranslateController', function($translate, $scope) {
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    });
