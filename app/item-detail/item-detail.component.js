'use strict';

// Register `itemDetail` component, along with its associated controller and template
angular.
    module('itemDetail').
        component('itemDetail', {
        template: 'TBD: Detail view for <span>{{$ctrl.itemId}}</span>',
        controller: ['$routeParams',
            function itemDetailController($routeParams) {
                this.itemId = $routeParams.itemId;
            }
        ]
    });
