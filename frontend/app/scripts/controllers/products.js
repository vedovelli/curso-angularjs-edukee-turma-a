'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('ProductsCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
  	var redirectBack = location.hash;
    AuthService.thisIsProtected(redirectBack, function()
    {

    });
  }]);
