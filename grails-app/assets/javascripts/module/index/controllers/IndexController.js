//= wrapped

angular.module('landing.admin.index')
	.controller('IndexController', IndexController);

function IndexController($scope, $uibModal, AuthenticationService) {
	
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
	$scope.goToForbidden = function(event, rejection) {
		if(isOpenedForbidden) {
			return;
		}
		isOpenedForbidden = true;

		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'partials/forbidden',
		    controller: 'ForbiddenController',
		    backdrop: 'static',
		    keyboard: false,
		    size: 'sm',
		    resolve: {
		    	rejection: function() {
		    		return rejection;
		    	}
		    }
		});

		modalInstance.result.then(function() {
			isOpenedForbidden = false;
		}, function () {
			isOpenedForbidden = false;
		});
	};
	
	var isServerErrorOpened = false;
	$scope.goToServerError = function(event, rejection) {
		if(isServerErrorOpened) {
			return;
		}
		isServerErrorOpened = true;

		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'partials/serverError',
		    controller: 'ServerErrorController',
		    backdrop: 'static',
		    keyboard: false,
		    size: 'sm',
		    resolve: {
		    	rejection: function(){
		    		return rejection;
		    	}
		    }
		});
		
		modalInstance.result.then(function() {
			isServerErrorOpened = false;
		}, function () {
			isServerErrorOpened = false;
		});
	};
	
	$scope.goToLogout = function() {
		AuthenticationService.logout();
	};
	
	$scope.$on('event:auth-loginRequired', $scope.goToLogin); // 401
    $scope.$on('event:auth-forbidden', $scope.goToForbidden); // 403
    $scope.$on('event:server-internal-error', $scope.goToServerError); // 500
	
}