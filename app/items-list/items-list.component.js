'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
    module('itemsList').
    component('itemsList', {
        templateUrl: 'items-list/items-list.template.html',
        controller: ['$http',
            function ExpListController($http) {
                var self = this;
                self.title = 'Doing ExpListController on Component';
                self.orderProp = 'age';

                $http.get('items/items.json').then(function(response) {
                    self.items = response.data.slice(0, 4);
                });
            }
        ]
    });
