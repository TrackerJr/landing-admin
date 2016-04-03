//= wrapped

angular.module('landing.admin.index')
	.controller('DashboardController', DashboardController);

function DashboardController($scope, datas) {
	$scope.datas = datas;
}
