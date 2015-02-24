'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.CityService
 * @description
 * # CityService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp')
  .service('CityService', function ($http) {
    this.fetch = function(apiUrl)
    {
			return $http.get(apiUrl);
		};
  });
