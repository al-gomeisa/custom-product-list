'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
    module('itemsList').
    component('itemsList', {
        templateUrl: 'items-list/items-list.template.html',
        controller: ['Item',
            function ExpListController(Item) {
                var self = this;
                self.items = Item.query();
                self.title = 'Doing ExpListController on Component';
                self.orderProp = 'age';

                self.setListImage = function setListImage(imageUrl) {
                    console.log('hover doing, imageUrl:', imageUrl);
                    self.mainImageUrl = imageUrl;
                };

                self.showPopOver = function showPopOver(imageUrl) {
                    self.mainImageUrl = imageUrl;
                    self.popOverIsVisible = true;
                }

                self.hidePopOver = function hidePopOver() {
                    self.popOverIsVisible = false;
                }

                /*
                $http.get('items/items.json').then(function(response) {
                    self.items = response.data.slice(0, 4);
                });
                */
            }
        ]
    });
