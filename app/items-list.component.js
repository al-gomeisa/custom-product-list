'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemsApp').
  component('itemsList', {
    template:
        '<h3>{{$ctrl.title}}</h3>' +
        '<ul>' +
          '<li ng-repeat="item in $ctrl.items">' +
            '<span>{{item.name}}</span>' +
            '<p>{{item.description}}</p>' +
          '</li>' +
        '</ul>' +
        '<p>Total number of items: {{$ctrl.items.length}}</p>',
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
