'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('ProductsCtrl', ['$scope', 'LoginService', function ($scope, LoginService) {
    LoginService.thisIsProtected(function(token)
    {
    	window.console.log('token', token);
    });
  }]);
