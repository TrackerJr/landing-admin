//= wrapped

angular.module('landing.admin.user')
	.controller('UserListController', UserListController);

function UserListController($scope, users) {
	$scope.users = users;
}