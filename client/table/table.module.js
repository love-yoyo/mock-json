/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('app.table', [])
        .config([
            '$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('table', {
                        url: '/table',
                        template: '<ui-view></ui-view>',
                        abstract: true,
                        controller: 'TablePageCtrl',
                        title: 'Table'
                    }).state('table.smart', {
                        url: '/smart',
                        templateUrl: 'table/table.tpl.html',
                        title: 'Smart Tables'
                    });
            }
        ])
        .directive('includeWithScope', [function includeWithScope() {
            return {
                restrict: 'AE',
                templateUrl: function(ele, attrs) {
                    return attrs.includeWithScope;
                }
            };
        }]);

})();
