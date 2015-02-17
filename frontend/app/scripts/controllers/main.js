'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
