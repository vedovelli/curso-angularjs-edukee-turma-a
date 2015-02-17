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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('AppController', function($scope, $location)
  {
    $scope.isActive = function (viewLocation) { 
      window.console.log('viewLocation', viewLocation);
      return viewLocation === $location.path();
    };
  });
