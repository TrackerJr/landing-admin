//= wrapped

angular.module('landing.admin.index')
	.controller('ForbiddenController', ForbiddenController);

function ForbiddenController($scope, rejection) {
	$scope.rejection = rejection;
}