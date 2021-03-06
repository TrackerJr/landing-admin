//= wrapped

angular.module('landing.admin.upload')
	.controller('UploadController', UploadController);

function UploadController($scope, $uibModal, $state, FileUploader, TOKEN_HEADER_NAME, UserInfo) {
	//$scope.folders = folders;
	
	var uploader = $scope.uploader = new FileUploader({
        url: 'rest/api/upload'
    });

    // FILTERS
	uploader.filters.push({
        name: 'customFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });

    // CALLBACKS
	uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
        fileItem.headers[TOKEN_HEADER_NAME] = UserInfo.getToken();
    };
    
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems); 
        this.uploadAll();
    };
    
    uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    
    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };
	
    console.log(uploader);
	
	
	
	
	$scope.goToNewFolder = function(){
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'partials/upload/newFolder',
		    controller: 'NewFolderController',
		    size: 'sm',
		    resolve: {
		    	folder: function(){
		    		return '/';
		    	}
		    }
		});
		
		modalInstance.result.then(function() {
			$state.reload();
		}, function () {
			
		});
	};
}