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
                });
                self.title = 'Doing ExpListController on Component';
                self.orderProp = 'age';
                self.isDetailViewOpen = false;
                self.brands = ['Brand A', 'Brand B', 'Brand C'];
/*
                self.searchFilter = function searchFilter() {
                    var re = new RegExp(self.query, 'i');

                    return !self.query || re.test(obj.name) || re.test(obj.age.toString());
                }
                */

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

                self.loadMoreItems = function loadMoreItems() {
                    //console.log('orirginalItemsLength:', orirginalItemsLength, self.items[0]);
                    var actualItemsLength = self.items.length;
                    var last = self.items[self.items.length - 1];
                    
                    for (var i = 0; i < orirginalItemsLength; i++) {
                        var idNumber = (actualItemsLength + i);
                        var productNumbuer = (idNumber + 1);
                        self.items.push(
                            {
                                "age": idNumber,
                                "id": 'item-' + idNumber, 
                                "imageUrl": 'http://placehold.it/225x250&text=Product ' + productNumbuer,
                                "name": 'Product ' + productNumbuer,
                                "brand": self.items[i].brand,
                                "shortDescription": 'description ' + productNumbuer,
                                "detailDescription": 'detailDescription ' + productNumbuer,
                                "added": "date " + productNumbuer,
                                "price": "price " + productNumbuer
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
