'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
    module('itemsList').
    component('itemsList', {
        templateUrl: 'items-list/items-list.template.html',
        controller: ['Item',
            function ExpListController(Item) {
               // var self = this;
                this.items = Item.query();
                this.title = 'Doing ExpListController on Component';
                this.orderProp = 'age';

                /*
                $http.get('items/items.json').then(function(response) {
                    self.items = response.data.slice(0, 4);
                });
                */
            }
        ]
    });
