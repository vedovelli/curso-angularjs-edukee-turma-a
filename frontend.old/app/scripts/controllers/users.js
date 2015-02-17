'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
