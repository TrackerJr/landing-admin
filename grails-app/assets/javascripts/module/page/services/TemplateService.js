//= wrapped

angular.module('landing.admin.page')
	.service('TemplateService', TemplateService);

function TemplateService($http, $q) {
	var uri = 'rest/api/template'
	return {
		list: function(){
			var deffered = $q.defer();
			
			$http.get(uri)
				.success(deffered.resolve)
				.error(deffered.reject);
			
			return deffered.promise;
		}
	};
}