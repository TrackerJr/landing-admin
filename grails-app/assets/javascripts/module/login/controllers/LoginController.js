//= wrapped

angular.module('landing.admin.login')
	.controller('LoginController', LoginController);

function LoginController($scope, AuthenticationService, $uibModalInstance, blockUI) {
	blockUI.stop();
	
	$scope.doLogin = function(bean) {
		AuthenticationService.login(bean).then(
				function(){
					$uibModalInstance.close();
				}, 
				function(){
					console.log('login error');
				}
			);
	};
	
}