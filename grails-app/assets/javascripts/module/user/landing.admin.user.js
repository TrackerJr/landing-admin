//= wrapped
//= require angular/module/angular-ui-router
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates

angular.module('landing.admin.user', ['ui.router'])
	.config(RouterConfig);

function RouterConfig($locationProvider, $urlRouterProvider, $stateProvider) {
	// Now set up the states
	$stateProvider.state('user', {
		url: '/user',
		templateUrl: 'partials/user/list',
		controller: 'UserListController',
		resolve:{
			users: function(UserDomainService) {
				return UserDomainService.list();
			}
		}
	});
		
}