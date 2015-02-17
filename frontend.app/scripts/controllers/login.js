'use strict';

/**
 * @ngdoc function
 * @name cursoAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cursoAngularApp
 */
angular.module('cursoAngularApp')
  .controller('LoginCtrl', ['$scope', '$location', 'LoginService', function ($scope, $location, LoginService) {

  	$scope.email = 'vedovelli@gmail.com';
  	$scope.password = '123456';

  	$scope.login = function()
  	{
  		LoginService.login($scope.email, $scope.password, function(result)
  		{
  			if(result)
  			{
  				$location.path('dashboard');
  			} else {
  				$scope.errorMessage = 'Falha no login';
  			}
  		});
  	};
  }]);