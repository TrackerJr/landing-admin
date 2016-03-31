//= wrapped

angular.module('landing.admin.login')
  	.provider('AuthenInterceptor', AuthenInterceptor);

function AuthenInterceptor() {
	/* https://github.com/auth0/angular-jwt */
	
	this.urlParam = null;
    this.authHeader = 'Authorization';
    this.tokenGetter = function() {
    	return null;
    }
    
	var config = this;
	
	this.$get = ["$q", "$injector", function ($q, $injector) {
		return {
			request: function (request) {
				if (request.skipAuthorization) {
					return request;
				}
								
				var tokenPromise = $q.when($injector.invoke(config.tokenGetter, this, {
					config: request
				}));
				
				return tokenPromise.then(function(token) {				
					if (config.urlParam) {
						request.params[config.urlParam] = token;
					} else {
						request.headers[config.authHeader] = token;
					}
					
		            return request;
				});
			}
		};
	}];
}