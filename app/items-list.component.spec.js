'use strict';

describe('itemsList', function() {

  // Load the module that contains the `itemsApp` component before each test
  beforeEach(module('itemsApp'));

  // Test the controller
  describe('ExpListController', function() {

    it('should create a `items` model with 4 items', inject(function($componentController) {
      var ctrl = $componentController('itemsList');

      expect(ctrl.items.length).toBe(4);
    }));

  });

});
