//= wrapped
//= require /jquery/jquery
//= require /Chart.js/Chart
//= require /angular/angular
//= require module/common/landing.admin.common
//= require module/index/landing.admin.index
//= require module/login/landing.admin.login
//= require module/upload/landing.admin.upload

angular.module('landing.admin', 
		['landing.admin.common',
		 'landing.admin.index',
		 'landing.admin.login',
		 'landing.admin.upload']
);