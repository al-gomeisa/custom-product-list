'use strict';

angular.
    module('itemsApp').
    config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/items', {
                  template: '<items-list></items-list>'
                }).
                when('/items/:itemId', {
                  template: '<item-detail></item-detail>'
                }).
                otherwise('/items');
        }
    ]);
