//= wrapped
//= require /angular/angular
//= require /angular/module/angular-ui-notification
//= require /angular/module/angular-confirm.min
//= require /angular/module/ui-bootstrap-tpls
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates

angular.module('landing.admin.page', ['ui.router', 'ui-notification', 'angular-confirm', 'ui.bootstrap', 'landing.admin.common'])
	.config(RouterConfig);

function RouterConfig($locationProvider, $urlRouterProvider, $stateProvider) {
	// Now set up the states
	$stateProvider.state('page', {
		abstract: true,
		template: '<div ui-view></div>'
	}).state('page.list', {
		url: '/page',
		templateUrl: 'partials/page/list',
		controller: 'PageListController',
		resolve:{
			pages: function(PageDomainService) {
				return PageDomainService.list();
			}
		}
	}).state('page.create', {
		url: '/page/create',
		templateUrl: 'partials/page/form',
		controller: 'PageFormController',
		resolve: {
			page: function(){
				return {};
			},
			templates: function(TemplateService){
				return TemplateService.list();
			}
		}
	}).state('page.edit', {
		url: '/page/edit/:id',
		templateUrl: 'partials/page/form',
		controller: 'PageFormController',
		resolve: {
			page: function(PageDomainService, $stateParams) {
				return PageDomainService.get($stateParams);
			},
			templates: function(TemplateService){
				return TemplateService.list();
			}
		}
	});
		
}