//= wrapped

angular.module('landing.admin.page')
	.service('DownloadService', DownloadService);

function DownloadService($http, $q) {
	return {
		getFile: function(){
			var deffered = $q.defer();
			
			$http.get('download')
				.success(deffered.resolve)
				.error(deffered.reject);
			
			return deffered.promise;
		}
	};
}