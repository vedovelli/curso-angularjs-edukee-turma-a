'use strict';

/**
 * @ngdoc directive
 * @name cursoAngularApp.directive:masks
 * @description
 * # masks
 */
angular.module('cursoAngularApp')
  .directive('mask', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.mask(attrs.mask);
      }
    };
  });
