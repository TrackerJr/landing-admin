//= wrapped

angular.module('landing.admin.page')
	.controller('PageFormController', PageFormController);

function PageFormController($scope, page) {
	$scope.page = page;
}