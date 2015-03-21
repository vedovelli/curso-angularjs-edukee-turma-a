'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.UserService
 * @description
 * # UserService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp').service('UserService', function ($http) {

  var apiUrl = 'http://curso-angular-api.app/api';

  this.fetch = function(listState)
  {
    return $http.get(apiUrl+'/user/?limit='+encodeURIComponent(listState.limit)+'&page='+encodeURIComponent(listState.page)+'&cities='+encodeURIComponent(listState.cities)+'&orderBy='+encodeURIComponent(listState.orderBy));
  };

  this.gravatar = function(email)
  {
    return $http.get(apiUrl + '/gravatar/'+email);
  };

  this.address = function(cep)
  {
    return $http.get('http://viacep.com.br/ws/'+cep+'/json/');
  };

  this.save = function(input)
  {
    if(input.id > 0)
    {
      return $http.put(apiUrl+'/user/'+input.id, input);
    } else {
      return $http.post(apiUrl+'/user', input);
    }
  };

  this.remove = function(input)
  {
    return $http.delete(apiUrl+'/user/'+input.id);
  };

});