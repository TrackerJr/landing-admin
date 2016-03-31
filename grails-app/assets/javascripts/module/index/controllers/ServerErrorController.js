//= wrapped

angular.module('landing.admin.index')
	.controller('ServerErrorController', ServerErrorController);

function ServerErrorController($scope, rejection) {
	$scope.rejection = rejection;
}