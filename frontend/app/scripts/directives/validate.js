'use strict';

/**
 * @ngdoc directive
 * @name cursoAngularApp.directive:validate
 * @description
 * # validate
 */
angular.module('cursoAngularApp')
  .directive('validate', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.on('blur', function()
        {
        	if(element.val() !== '')
        	{
	        	var regex = '';

	        	if(attrs.validate === 'email')
	        	{
	        		regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        		element.attr('title', 'E-mail inválido');
	        	}

	    			if(regex !== '')
	    			{
		    			var test = regex.test(element.val());
		    			if(!test)
		    			{
		    				element.data('toggle', 'tooltip');
		    				element.data('placement', 'top');
		    				element.tooltip('show');
		    				element.closest('.form-group').addClass('has-error');
		    			} else {
		    				element.data('toggle', '');
		    				element.data('placement', '');
		    				element.attr('title', '');
		    				element.tooltip('destroy');
		    				element.closest('.form-group').removeClass('has-error');
		    			}
	    			}
        	}
        });
      }
    };
  });
