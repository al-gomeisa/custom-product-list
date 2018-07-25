'use strict';

describe('itemsList', function() {

  // Load the module that contains the `itemsApp` component before each test
    beforeEach(module('itemsList'));

    describe('controller', function() {
        var $httpBackend, ctrl;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('items/items.json')
                        .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            ctrl = $componentController('itemsList');
        }));

        it('should create a `items` property with 2 items fetched with `$http`', function() {
            expect(ctrl.items).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.items).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });

        it('should set a default value for the `orderProp` property', function() {
            expect(ctrl.orderProp).toBe('age');
        });

  // Test the controller
  describe('ExpListController', function() {
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
