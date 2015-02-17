'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
