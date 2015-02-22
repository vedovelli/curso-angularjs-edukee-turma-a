'use strict';

/**
 * @ngdoc directive
 * @name cursoAngularApp.directive:select2
 * @description
 * # select2
 */
angular.module('cursoAngularApp')
  .directive('select2', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        element.select2();
      }
    };
  });
