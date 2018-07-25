'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
    module('itemsList').
    component('itemsList', {
        templateUrl: 'items-list/items-list.template.html',
        controller: function ExpListController() {
            this.title = 'Doing ExpListController on Component';

            this.items = [
                {
                    name: 'Item1',
                    description: 'Item1 being the first one ON COMPONENT.',
                    age: 1
                },
                {
                    name: 'Nexus S',
                    description: 'Fast just got faster with Nexus S.',
                    age: 2
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    description: 'The Next, Next Generation tablet.',
                    age: 3
                }, {
                    name: 'MOTOROLA XOOM™',
                    description: 'The Next, Next Generation tablet.',
                    age: 4
                }
            ];

            this.orderProp = 'age';
        }
    });
