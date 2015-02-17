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
		this.setAuthHeader(token);

    $http.get('http://curso-angular-api.app/api/user')
      .success(function(data){
      	callback(data);
      })
      .error(function(){
      	callback(false);
      });
	};

  this.saveUser = function(token, user, callback)
  {
    this.setAuthHeader(token);

    if(user.id !== undefined)
    {
      $http.put('http://curso-angular-api.app/api/user/'+ user.id, user).success(function(data)
      {
        callback({result: true, user: data});
      }).error(function()
      {
        callback({result: false, user: null});
      });
    } else {
      $http.post('http://curso-angular-api.app/api/user', user).success(function(data)
      {
        callback({result: true, user: data});
      }).error(function()
      {
        callback({result: false, user: null});
      });
    }

  };

  this.removeUser = function(token, user, callback)
  {
    $http.delete('http://curso-angular-api.app/api/user/'+ user.id)
    .success(function()
    {
      callback({result: true});
    })
    .error(function()
    {
      callback({result: false});
    });
  };

  this.setAuthHeader = function(token)
  {
    $http.defaults.headers.common.Authorization = 'Basic ' + token;
  };

});