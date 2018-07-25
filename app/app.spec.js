'use strict';

describe('ExpListController', function() {

  beforeEach(module('itemsApp'));

  it('should create a `items` model with 4 items', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('ExpListController', {$scope: scope});

    expect(scope.items.length).toBe(4);
  }));

  it('title should be Doing ExpListController', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('ExpListController', {$scope: scope});

    expect(scope.title).toBe('Doing ExpListController');
  }));

});
