//= wrapped
//= require /agular/angular
//= require /angular/module/http-auth-interceptor
//= require /angular/module/angular-block-ui
//= require /angular/module/angular-ui-notification
//= require /angular/module/tinymce.min
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates

angular.module('landing.admin.login', ['http-auth-interceptor', 'blockUI', 'ui-notification', 'ui.tinymce'])
	.constant('TOKEN_HEADER_NAME', 'X-Auth-Token')
	.config(Interceptor)
	.run(ServiceValidate);

function Interceptor($httpProvider, AuthenInterceptorProvider, TOKEN_HEADER_NAME) {
	
	AuthenInterceptorProvider.authHeader = TOKEN_HEADER_NAME;
	AuthenInterceptorProvider.tokenGetter = ['UserInfo', function(UserInfo) {
		return UserInfo.getToken();
	}];
	
	$httpProvider.interceptors.push('AuthenInterceptor');
}
	
function ServiceValidate(AuthenticationService) {
	AuthenticationService.validate();
}