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
      /**
      * Get all users
      */
      UserService.getUsers(token, function(response)
      {
        if(response)
        {
          $scope.users = response;
        }
      });

      /**
      * Save user
      */
      $scope.save = function()
      {
        UserService.saveUser(token, $scope.user, function(response)
        {
          var isUpdating = $scope.user.id !== undefined;
          if(response.result)
          {
            if(!isUpdating)
            {
              $scope.users.push(response.user);
            }
            $scope.user = {};
          } else {
            window.alert('Falha na inclusão do usuário');
          }
        });
      };

      $scope.carregar = function(user)
      {
        $scope.user = user;
      };

      /* jshint ignore:start */
      $scope.remover = function(user)
      {
        var nome = user.first_name +' '+ user.last_name;
        var confirm = window.confirm('Tetm certeza que deseja remover o usuário '+ nome +'?');
        if(confirm)
        {
          UserService.removeUser(token, user, function(response)
          {
            if(response.result)
            {
              var index = $scope.users.indexOf(user);
              $scope.users.splice(index, 1);
            }
          });
        }
      };
      /* jshint ignore:end */
    });
  }]);