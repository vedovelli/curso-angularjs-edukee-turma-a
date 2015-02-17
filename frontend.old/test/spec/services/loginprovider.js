'use strict';

describe('Service: LoginProvider', function () {

  // load the service's module
  beforeEach(module('cursoAngularApp'));

  // instantiate service
  var LoginProvider;
  beforeEach(inject(function (_LoginProvider_) {
    LoginProvider = _LoginProvider_;
  }));

  it('should do something', function () {
    expect(!!LoginProvider).toBe(true);
  });

});
