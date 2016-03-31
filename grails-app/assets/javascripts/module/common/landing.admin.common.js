//= wrapped
//= require angular/module/angular-resource
//= require_self
//= require_tree services

angular.module('landing.admin.common', ['ngResource', 'landing.admin.login'])
	.config(Interceptor);

function Interceptor($httpProvider) {
	$httpProvider.interceptors.push('HttpInterceptor');
}