'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.LoginService
 * @description
 * # LoginService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp')
  .service('LoginService', function ($http, $location) {

  	var self = this;
  	self.token = null;

  	self.login = function(email, password, callback)
  	{
			$http.post('http://curso-angular-api.app/login', {email: email, password: password})
				.success(function(data)
	  		{
	  			self.token = data.token;
	  			callback(true);
	  		})
	  		.error(function()
	  		{
	  			callback(false);
	  		});
  	};

  	self.logout = function(callback)
  	{
  		$http.get('http://curso-angular-api.app/logout').success(function()
  		{
  			self.token = null;
  			callback(true);
  		});
  	};

  	self.thisIsProtected = function(callback)
  	{
  		if(self.token === null)
  		{
  			$location.path('login');
  			return false;
  		}
  		callback(self.token);
  	};

  });
