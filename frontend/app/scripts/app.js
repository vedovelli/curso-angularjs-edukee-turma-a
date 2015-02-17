'use strict';

/**
 * @ngdoc overview
 * @name cursoAngularApp
 * @description
 * # cursoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('cursoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  })
  .controller('AppController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService)
  {
    $scope.logout = function(){
      AuthService.logout(function(result)
      {
        if(result)
        {
          $location.path('login');
        }
      });
    };
  }]);
