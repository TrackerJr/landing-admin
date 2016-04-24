//= wrapped

angular.module('landing.admin.page')
	.controller('PreviewController', PreviewController);

function PreviewController($scope, page) {
	$scope.page = page;
}