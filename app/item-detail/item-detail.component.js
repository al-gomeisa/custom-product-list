'use strict';

// Register `itemDetail` component, along with its associated controller and template
angular.
    module('itemDetail').
        component('itemDetail', {
        templateUrl: 'item-detail/item-detail.template.html',
        controller: ['$routeParams', 'Item',
            function itemDetailController($routeParams, Item) {
                var self = this;

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };

                self.onDblclick = function onDblclick(imageUrl) {
                  console.log('You double-clicked image per STEP12": ' + imageUrl);
                };

                self.item = Item.get({itemId: $routeParams.itemId}, function(item) {
                  self.setImage(item.images[0]);
                });

                self.setImage = function setImage(imageUrl) {
                  self.mainImageUrl = imageUrl;
                };

                /*
                $http.get('items/' + $routeParams.itemId + '.json').then(function(response) {
                    self.item = response.data;
                    self.setImage(self.item.images[0]);
                });
                */

            }
        ]
    });
