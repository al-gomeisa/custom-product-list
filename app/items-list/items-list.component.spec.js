'use strict';

describe('itemsList', function() {

  // Load the module that contains the `itemsApp` component before each test
  beforeEach(module('itemsList'));

  // Test the controller
  describe('ExpListController', function() {

    /*
    it('should create a `items` model with 4 items', inject(function($componentController) {
      var ctrl = $componentController('itemsList');

      expect(ctrl.items.length).toBe(4);
    }));
    */

    var ctrl;

    beforeEach(inject(function($componentController) {
        ctrl = $componentController('itemsList');
    }));

    it('should create a `items` model with 4 phones', function() {
        expect(ctrl.items.length).toBe(4);
    });

    it('should set a default value for the `orderProp` model', function() {
        expect(ctrl.orderProp).toBe('age');
    });

  });

});
