//= wrapped

angular.module('landing.admin.upload')
	.controller('NewFolderController', NewFolderController);

function NewFolderController($scope, folder, $uibModalInstance, FolderDomainService) {
	$scope.bean = {
		parent: folder
	};
	
	$scope.cancel = function () {
		 $uibModalInstance.dismiss('cancel');
	};
	
	$scope.doNewFolder = function(bean) {
		console.log(bean);
		FolderDomainService.save(bean).then(
			function(){
				 $uibModalInstance.close();
			},
			function(){
				console.log('new folder error');
			}
		);
	}
}