'use strict';

// Define the `itemsApp` module
var itemsApp = angular.module('itemsApp', []);

// Define the `ExpListController` controller on the `itemsApp` module
itemsApp.controller('ExpListController', function ExpListController($scope) {
    $scope.title = 'Doing ExpListController';
    $scope.items = [
        {
            name: 'Item1',
            description: 'Item1 being the first one.'
        },
        {
            name: 'Nexus S',
            description: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            description: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            description: 'The Next, Next Generation tablet.'
        }
    ];
});
