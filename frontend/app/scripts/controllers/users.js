'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')

  .controller('UsersCtrl', ['$scope', 'AuthService', 'UserService', function ($scope, AuthService, UserService) {

    var redirectBack = location.hash;

    AuthService.thisIsProtected(redirectBack, function(token)
    {
      UserService.getUsers(token, function(response)
      {
        if(response)
        {
          $scope.users = response;
        }
      });
    });
  }]);