//= wrapped

angular
  .module('landing.admin.login')
    .factory('AuthenticationService', AuthenticationService);


function AuthenticationService($rootScope, $http, $q, UserInfo, authService) {
	return {
		validate: function(){
			var deffered = $q.defer();
			
			$http.get('rest/api/validate')
				.success(deffered.resolve)
				.error(deffered.reject);
			
			return deffered.promise;
		},		
		login: function(bean){
			var deffered = $q.defer();
			
			$http.post('rest/api/login', bean, { ignoreAuthModule: true })
			.success(function(response, status, headers, config){
				authService.loginConfirmed(response, function(config){					
					UserInfo.init(response.username, response.access_token, response.roles);
					return config;
				});
				
				deffered.resolve(response);
			}).error(function(response, status, headers, config){
				deffered.reject(response);
			});

			return deffered.promise;
		},
		logout: function(){
			UserInfo.setTokenExpired();
			$rootScope.$broadcast('event:auth-loginRequired');
		}
	}
}
