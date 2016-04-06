//= wrapped

angular.module('landing.admin.page')
	.directive('pageEditor', pageEditor);

function pageEditor($uibModal) {
	return {
		restrict: 'E',
		templateUrl: 'partials/page/pageEditor',
		link: function(scope, element, attrs){
			
		}
	}
}