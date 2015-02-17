'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
