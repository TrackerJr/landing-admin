//= wrapped
//= require angular/module/angular-ui-router
//= require angular/module/angular-file-upload.min
//= require angular/module/ui-bootstrap-tpls
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates

angular.module('landing.admin.upload', ['ui.router', 'angularFileUpload', 'ui.bootstrap', 'landing.admin.common', 'landing.admin.login'])
	.config(RouterConfig);

function RouterConfig($locationProvider, $urlRouterProvider, $stateProvider) {
	// Now set up the states
	$stateProvider.state('upload', {
		url: '/upload',
		templateUrl: 'partials/upload',
		controller: 'UploadController',
		resolve:{
			/*folders: function(FolderDomainService) {
				return FolderDomainService.list();
			}*/
		}
	});
		
}