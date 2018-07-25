'use strict';

// Register `itemDetail` component, along with its associated controller and template
angular.
    module('itemDetail').
        component('itemDetail', {
        templateUrl: 'item-detail/item-detail.template.html',
        controller: ['$http', '$routeParams',
            function itemDetailController($http, $routeParams) {
                var self = this;

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };

                self.onDblclick = function onDblclick(imageUrl) {
                  console.log('You double-clicked image per STEP12": ' + imageUrl);
                };

                $http.get('items/' + $routeParams.itemId + '.json').then(function(response) {
                    self.item = response.data;
                    self.setImage(self.item.images[0]);
                });

            }
        ]
    });
