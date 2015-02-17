'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')

  .controller('UsersCtrl', ['$scope', '$http', 'LoginService', function ($scope, $http, LoginService) {

    var redirectBack = location.hash;

    LoginService.thisIsProtected(redirectBack, function(token)
    {
      $http.defaults.headers.common.Authorization = 'Basic ' + token;
      $http.get('http://curso-angular-api.app/api/user')
      .success(function(data){
      	$scope.users = data;
      })
      .error(function(data){
      	window.console.log('error', data);
      });
    });
  }]);