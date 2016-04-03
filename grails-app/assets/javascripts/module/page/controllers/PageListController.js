//= wrapped

angular.module('landing.admin.page')
	.controller('PageListController', PageListController);

function PageListController($scope, pages, PageDomainService, Notification, $state) {
	$scope.pages = pages;
	
	$scope.doDelete = function(page){
		PageDomainService.delete(page).then(function(){
			Notification.success({
				message: '<i class="glyphicon glyphicon-ok"></i> ลบรายการสำเร็จ',
				delay: 3000
			});
			$state.reload();
		}, function(){
			Notification.error({
				message: '<i class="glyphicon glyphicon-remove"></i> ลบรายการไม่สำเร็จ',
				delay: 3000
			});
		});
	};
}