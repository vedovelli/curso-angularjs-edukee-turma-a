'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('LoginCtrl', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {

  	$scope.email = 'vedovelli@gmail.com';
  	$scope.password = '123456';

  	$scope.login = function()
  	{
  		AuthService.login($scope.email, $scope.password, function(response)
  		{
        if(!response.result)
  			{
  				$scope.errorMessage = 'Falha no login';
  			} else {
  				$location.path(response.redirect);
  			}
  		});
  	};
  }]);