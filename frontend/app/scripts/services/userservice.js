'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.UserService
 * @description
 * # UserService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp').service('UserService', function ($http) {

  var apiUrl = 'http://curso-angular-api.app/api/user';

  this.fetch = function(token, listState)
  {
    this.setAuthHeader(token);
    return $http.get(apiUrl+'?limit='+encodeURIComponent(listState.limit)+'&page='+encodeURIComponent(listState.page)+'&cities='+encodeURIComponent(listState.cities)+'&orderBy='+encodeURIComponent(listState.orderBy));
  };

  this.gravatar = function(email)
  {
    return $http.get('http://spa.app/api/gravatar/'+email);
  };

  this.address = function(cep)
  {
    return $http.get('http://viacep.com.br/ws/'+cep+'/json/');
  };

  this.save = function(input)
  {
    if(input.id > 0)
    {
      return $http.put(apiUrl+'/'+input.id, input);
    } else {
      return $http.post(apiUrl, input);
    }
  };

  this.remove = function(token, input)
  {
    this.setAuthHeader(token);
    return $http.delete(apiUrl+'/'+input.id);
  };

  this.setAuthHeader = function(token)
  {
    $http.defaults.headers.common.Authorization = 'Basic ' + token;
  };

});

	// this.getUsers = function(token, callback)
	// {
	// 	this.setAuthHeader(token);

 //    $http.get('http://curso-angular-api.app/api/user')
 //      .success(function(data){
 //      	callback(data);
 //      })
 //      .error(function(){
 //      	callback(false);
 //      });
	// };

 //  this.saveUser = function(token, user, callback)
 //  {
 //    this.setAuthHeader(token);

 //    if(user.id !== undefined)
 //    {
 //      $http.put('http://curso-angular-api.app/api/user/'+ user.id, user).success(function(data)
 //      {
 //        callback({result: true, user: data});
 //      }).error(function()
 //      {
 //        callback({result: false, user: null});
 //      });
 //    } else {
 //      $http.post('http://curso-angular-api.app/api/user', user).success(function(data)
 //      {
 //        callback({result: true, user: data});
 //      }).error(function()
 //      {
 //        callback({result: false, user: null});
 //      });
 //    }

 //  };

 //  this.removeUser = function(token, user, callback)
 //  {
 //    $http.delete('http://curso-angular-api.app/api/user/'+ user.id)
 //    .success(function()
 //    {
 //      callback({result: true});
 //    })
 //    .error(function()
 //    {
 //      callback({result: false});
 //    });
 //  };

 //  this.setAuthHeader = function(token)
 //  {
 //    $http.defaults.headers.common.Authorization = 'Basic ' + token;
 //  };

// });