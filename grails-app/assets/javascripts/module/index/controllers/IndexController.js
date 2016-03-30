//= wrapped

angular.module('landing.admin.index')
	.controller('IndexController', IndexController);

function IndexController($scope, $uibModal) {
	
	var isLoginOpened = false;
	$scope.goToLogin = function() {
		if(isLoginOpened) {
			return;
		}
		isLoginOpened = true;

		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'partials/login',
		    controller: 'LoginController',
		    backdrop: 'static',
		    keyboard: false,
		    size: 'sm'
		});

		modalInstance.result.then(function() {
			isLoginOpened = false;
		}, function () {
			isLoginOpened = false;
		});
	};
	
	var isOpenedForbidden = false;
	$scope.goToForbidden = function() {
		
	};
	
	$scope.$broadcast('event:auth-loginRequired', $scope.goToLogin); // 401
    $scope.$broadcast('event:auth-forbidden', $scope.goToForbidden); // 403
	
}