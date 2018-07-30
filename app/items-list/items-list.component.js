'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
    module('itemsList').
    component('itemsList', {
        templateUrl: 'items-list/items-list.template.html',
        controller: ['Item',
            function ExpListController(Item) {
               // $('.item-list-item').tooltip();
                var self = this;
                var orirginalItemsLength;
                self.items = Item.query(function (result) {
                    orirginalItemsLength = result.length;
                    self.itemsLength = result.length;
                });
                //console.log(orirginalItemsLength, ', self.items: ', self.items[0]);
                self.title = 'Doing ExpListController on Component';
                self.orderProp = 'age';
                self.isDetailViewOpen = false;
                self.demoImages = [1, 2, 3, 4, 5, 6, 7, 8];

                self.setListImage = function setListImage(activeItem) {
                    self.mainImageUrl = activeItem.imageUrl;
                    self.activeItemId = activeItem.id;
                };

                self.showPopOver = function showPopOver(activeItem) {
                    if (!self.isDetailViewOpen) {
                        self.mainImageUrl = activeItem.imageUrl;
                        self.activeItemId = activeItem.id;
                        self.popOverIsVisible = true;
                    }
                }

                self.hidePopOver = function hidePopOver() {
                    if (!self.isDetailViewOpen) {
                        self.popOverIsVisible = false;
                    }
                }

                self.setDetailView = function setDetailView(activeItem) {
                    self.mainImageUrl = activeItem.imageUrl;
                    self.activeItemId = activeItem.id;
                    self.isDetailViewOpen = true;
                    self.popOverIsVisible = true;
                }

                self.closeDetailView = function closeDetailView() {
                    self.isDetailViewOpen = false;
                    self.popOverIsVisible = false;
                }

                self.loadMore = function loadMore() {
                    console.log('LoadmoreDEFA');
                    var last = self.demoImages[self.demoImages.length - 1];

                    for (var i = 1; i <= 8; i++) {
                      self.demoImages.push(last + i);
                    }
                };

                self.loadMoreItems = function loadMoreItems() {
                    //console.log('orirginalItemsLength:', orirginalItemsLength, self.items[0]);
                    var actualItemsLength = self.items.length;
                    var last = self.items[self.items.length - 1];
                    
                    for (var i = 0; i < orirginalItemsLength; i++) {
                       // self.items.push(self.items[i]);
                        self.items.push(
                            {
                                "age": actualItemsLength + i,
                                "id": "item-" + actualItemsLength + i, 
                                "imageUrl": self.items[i].imageUrl,
                                "name": self.items[i].name,
                                "description": self.items[i].description
                            }
                        );
                    }
                    
                };

                /*
                $http.get('items/items.json').then(function(response) {
                    self.items = response.data.slice(0, 4);
                });
                */
            }
        ]
    });
