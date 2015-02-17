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
    self.redirect = null;

  	self.login = function(email, password, callback)
  	{
			var response = {};
      $http.post('http://curso-angular-api.app/login', {email: email, password: password})
				.success(function(data)
	  		{
	  			self.token = data.token;
          response.result = true;
          response.redirect = self.redirect !== null ? self.redirect.substring(1) : '/';
          callback(response);
	  		})
	  		.error(function()
	  		{
	  			response.result = false;
          response.redirect = '/';
          callback(response);
	  		});
  	};

  	self.logout = function(callback)
  	{
  		$http.get('http://curso-angular-api.app/logout').success(function()
  		{
  			self.token = null;
        self.redirect = null;
  			callback(true);
  		});
  	};

  	self.thisIsProtected = function(redirect, callback)
  	{
      self.redirect = redirect;
      if(self.token === null)
  		{
  			$location.path('login');
  			return false;
  		}
  		callback(self.token);
  	};

  });
