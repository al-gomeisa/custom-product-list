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
                self.isDetailViewOpen = false;

                self.setListImage = function setListImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };

                self.showPopOver = function showPopOver(imageUrl) {
                    if (!self.isDetailViewOpen) {
                        self.mainImageUrl = imageUrl;
                        self.popOverIsVisible = true;
                    }
                }

                self.hidePopOver = function hidePopOver() {
                    if (!self.isDetailViewOpen) {
                        self.popOverIsVisible = false;
                    }
                }

                self.setDetailView = function setDetailView(imageUrl) {
                    self.isDetailViewOpen = true;
                    self.mainImageUrl = imageUrl;
                    self.popOverIsVisible = true;
                }

                self.closeDetailView = function closeDetailView() {
                    self.isDetailViewOpen = false;
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
