'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.LoginService
 * @description
 * # LoginService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp')
  .service('LoginService', function () {
    return {
    	isLoggedIn: false
    };
  });
