'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.LoginProvider
 * @description
 * # LoginProvider
 * Provider in the cursoAngularApp.
 */
angular.module('cursoAngularApp').provider('Login', function (){
  return {
    $get: function(){
      return {
        who: 'Ved'
      }
    }
  }
});