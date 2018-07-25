'use strict';

describe('itemDetail', function() {

  // Load the module that contains the `itemDetail` component before each test
  beforeEach(module('itemDetail'));

  // Test the controller
  describe('itemDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('items/xyz.json').respond({name: 'item xyz'});

      $routeParams.itemId = 'xyz';

      ctrl = $componentController('itemDetail');
    }));

    it('should fetch the item details', function() {
      expect(ctrl.item).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.item).toEqual({name: 'item xyz'});
    });

  });

});
