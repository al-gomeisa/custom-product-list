'use strict';

// Register `itemsList` component, along with its associated controller and template
angular.
    module('itemsList').
    component('itemsList', {
        templateUrl: 'items-list/items-list.template.html',
        controller: ['Item',
            function ExpListController(Item) {
                var self = this;
                var orirginalItemsLength;
                self.items = Item.query(function (result) {
                    orirginalItemsLength = result.length;
                    self.itemsLength = result.length;
                    console.log(result.length, result[0]);
                });
              //  var orirginalItemsLength = self.items.length;
                console.log(orirginalItemsLength, ', self.items: ', self.items[0]);
                self.title = 'Doing ExpListController on Component';
                self.orderProp = 'age';
                self.isDetailViewOpen = false;
                self.demoImages = [1, 2, 3, 4, 5, 6, 7, 8];

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

                self.loadMore = function loadMore() {
                    var last = self.demoImages[self.demoImages.length - 1];

                    for (var i = 1; i <= 8; i++) {
                      self.demoImages.push(last + i);
                    }
                };

                self.loadMoreItems = function loadMoreItems() {
                    console.log('orirginalItemsLength:', orirginalItemsLength, self.items[0]);
                    var last = self.items[self.items.length - 1];
                    var newItem = {
                        "age": orirginalItemsLength,
                        "id": "item-" + orirginalItemsLength, 
                        "imageUrl": "img/phones-" + orirginalItemsLength + ".0.jpg", 
                        "name": "Item " + (orirginalItemsLength + 1), 
                        "description": "Description " + (orirginalItemsLength + 1)
                    };

                  //  self.items.push(newItem);
                    
                    for (var i = 0; i < orirginalItemsLength; i++) {
                       // self.items.push(self.items[i]);
                        self.items.push(
                            {
                                "age": orirginalItemsLength + i,
                                "id": "item-" + orirginalItemsLength + i, 
                                "imageUrl": "img/phones-" + (orirginalItemsLength + i) + ".0.jpg", 
                                "name": "Item " + (orirginalItemsLength + i + 1), 
                                "description": "Description " + (orirginalItemsLength + i + 1)
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
