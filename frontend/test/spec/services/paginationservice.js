'use strict';

describe('Service: PaginationService', function () {

  // load the service's module
  beforeEach(module('cursoAngularApp'));

  // instantiate service
  var PaginationService;
  beforeEach(inject(function (_PaginationService_) {
    PaginationService = _PaginationService_;
  }));

  it('should do something', function () {
    expect(!!PaginationService).toBe(true);
  });

});
