//= wrapped

angular.module('landing.admin.index')
	.controller('DashboardController', DashboardController);

function DashboardController($scope) {
	$scope.chart = {
	     labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
	     data: [300, 500, 100, 40, 120]
	};
}
