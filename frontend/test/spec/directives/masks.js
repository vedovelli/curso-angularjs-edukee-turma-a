'use strict';

describe('Directive: masks', function () {

  // load the directive's module
  beforeEach(module('cursoAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<masks></masks>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the masks directive');
  }));
});
