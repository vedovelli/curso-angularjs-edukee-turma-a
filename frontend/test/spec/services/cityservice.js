'use strict';

describe('Service: CityService', function () {

  // load the service's module
  beforeEach(module('cursoAngularApp'));

  // instantiate service
  var CityService;
  beforeEach(inject(function (_CityService_) {
    CityService = _CityService_;
  }));

  it('should do something', function () {
    expect(!!CityService).toBe(true);
  });

});
