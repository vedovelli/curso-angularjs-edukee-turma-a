'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.TemplateService
 * @description
 * # TemplateService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp')
  .service('TemplateService', function ($http) {
    this.fetch = function(templateUrl)
    {
			return $http.get(templateUrl);
		};
  });
