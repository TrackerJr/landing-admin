//= wrapped

angular.module('landing.admin.common')
	.factory('HttpInterceptor', HttpInterceptor);

function HttpInterceptor($rootScope, $q) {
	return {
		// optional method
	    'request': function(config) {
	    	// do something on success
	    	return config;
	    },
	    // optional method
	    'requestError': function(rejection) {
	    	// do something on error
	    	return $q.reject(rejection);
	     },   
	     // optional method
	     'response': function(response) {
	    	 // do something on success
	    	 return response;
	     },
	     // optional method
	     'responseError': function(rejection) {
	    	 // do something on error
	    	 if(rejection.status == 500) {
	    		 $rootScope.$broadcast('event:server-internal-error', rejection);
	    	 }
	    	 return $q.reject(rejection);
	     }
	};
}