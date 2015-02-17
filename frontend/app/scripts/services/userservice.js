'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.UserService
 * @description
 * # UserService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp').service('UserService', function ($http) {

	this.getUsers = function(token, callback)
	{
		$http.defaults.headers.common.Authorization = 'Basic ' + token;

    $http.get('http://curso-angular-api.app/api/user')
      .success(function(data){
      	callback(data);
      })
      .error(function(){
      	callback(false);
      });
	};
});