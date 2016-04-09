//= wrapped
//= require /jquery/jquery
//= require /Chart.js/Chart
//= require /angular/angular
//= require /tinymce/tinymce
//= require module/common/landing.admin.common
//= require module/index/landing.admin.index
//= require module/login/landing.admin.login
//= require module/upload/landing.admin.upload
//= require module/page/landing.admin.page
//= require module/user/landing.admin.user

angular.module('landing.admin', 
		['landing.admin.common',
		 'landing.admin.index',
		 'landing.admin.login',
		 'landing.admin.upload',
		 'landing.admin.page',
		 'landing.admin.user']
);