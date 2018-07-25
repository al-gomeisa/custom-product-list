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
                    description: 'Item1 being the first one ON COMPONENT.'
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
        }
    });
