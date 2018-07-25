'use strict';

describe('itemDetail', function() {

  // Load the module that contains the `itemDetail` component before each test
  beforeEach(module('itemDetail'));

  // Test the controller
  describe('itemDetailController', function() {
    var $httpBackend, ctrl;
    var xyzPhoneData = {
      name: 'item xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('items/xyz.json').respond(xyzPhoneData);

      $routeParams.itemId = 'xyz';

      ctrl = $componentController('itemDetail');
    }));

    it('should fetch the item details', function() {
      expect(ctrl.item).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.item).toEqual(xyzPhoneData);
    });

  });

});
