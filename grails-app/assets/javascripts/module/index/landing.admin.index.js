//= wrapped
//= require /angular/module/angular-ui-router
//= require /angular/module/ui-bootstrap-tpls
//= require /angular/module/angular-chart
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates

angular.module('landing.admin.index', ['ui.router', 'ui.bootstrap', 'chart.js'])
	.config(RouterConfig);

function RouterConfig($locationProvider, $urlRouterProvider, $stateProvider) {
	
	$locationProvider.html5Mode(true);

	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise('/');
	
	// Now set up the states
	$stateProvider.state('index', {
		url: '/',
		templateUrl: 'partials/dashboard',
		controller: 'DashboardController'
	});
		
}