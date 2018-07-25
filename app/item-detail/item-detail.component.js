'use strict';

// Register `itemDetail` component, along with its associated controller and template
angular.
    module('itemDetail').
        component('itemDetail', {
        templateUrl: 'item-detail/item-detail.template.html',
        controller: ['$http', '$routeParams',
            function itemDetailController($http, $routeParams) {
                var self = this;

                $http.get('items/' + $routeParams.itemId + '.json').then(function(response) {
                    self.item = response.data;
                });

            }
        ]
    });
