//= wrapped

angular.module('landing.admin.login')
	.controller('LoginController', LoginController);

function LoginController($scope, AuthenticationService, $uibModalInstance, blockUI, Notification) {
	blockUI.stop();
	
	$scope.doLogin = function(bean) {
		AuthenticationService.login(bean).then(
				function(){
					$uibModalInstance.close();
				}, 
				function(){
					 Notification.error({
						 message: '<i class="glyphicon glyphicon-info-sign"></i> ไม่มีบัญชีนี้ โปรดป้อนบัญชีอื่น',
						 delay: 3000
					 });
				}
			);
	};
	
}