(function() {
    'use strict';

    angular.module('App', [
            'ngAnimate',
            'ui.router',
            'smart-table',
            'xeditable',
            'app.table'
        ])
        .config(['$urlRouterProvider', function($urlRouterProvider) {
            console.log('start dispatch route');
            $urlRouterProvider.otherwise('/table/smart');
        }])

})();
