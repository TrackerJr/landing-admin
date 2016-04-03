//= wrapped

angular.module('landing.admin.page')
	.controller('PageFormController', PageFormController);

function PageFormController($scope, page, PageDomainService, Notification, $state) {
	$scope.page = page;
	
	var success = function(){
		Notification.success({
			message: '<i class="glyphicon glyphicon-ok"></i> บันทึกสำเร็จ',
			delay: 3000
		});
		$state.go('^.list');
	};
	
	var error = function() {
		Notification.error({
			message: '<i class="glyphicon glyphicon-remove"></i> บันทึกไม่สำเร็จ',
			delay: 3000
		});
	}
	
	$scope.doSubmit = function(page) {
		
		if(page.id) {
			PageDomainService.update(page).then(success, error);
		} else {
			PageDomainService.save(page).then(success, error)
		}
	};
}