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
  .config(['$routeProvider', 'LoginProvider', function ($routeProvider, lp) {
    window.console.log(lp);
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        // resolve: { loginRequired: loginRequired }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  }])
  .controller('AppController', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });

  // var userIsAuthenticated = function()
  // {
  //   return false;
  // }

  // var loginRequired = function($location, $q) {
  //   var deferred = $q.defer();

  //   if(!userIsAuthenticated()) {
  //     deferred.reject()
  //     $location.path('/login');
  //   } else {
  //     deferred.resolve()
  //   }

  //   return deferred.promise;
  // }
