//= wrapped

angular
    .module("landing.admin.index")
    .factory("DashboardService", DashboardService);

function DashboardService($q, $http) {
	var uri = 'rest/api/dashboard';
	return {
		list: function(){
			var deferred = $q.defer();
			$http({method: "GET", url: uri})
				.success(deferred.resolve)
				.error(deferred.reject);
			return deferred.promise;
		}
	}
}