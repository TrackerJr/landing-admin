//= wrapped

angular
    .module("landing.admin.page")
    .factory("PageDomainService", PageDomainService);

function PageDomainService(DomainServiceFactory) {
	var uri = 'rest/api/page';
	return {
		list: function(){
			return DomainServiceFactory(uri).list().$promise;
		},
		save: function(bean){
			return DomainServiceFactory(uri).save(bean).$promise;
		},
		update: function(bean){
			return DomainServiceFactory(uri+'/:id', {id: '@id'}).update(bean).$promise;
		},
		get: function(bean) {
			return DomainServiceFactory(uri+'/:id').get(bean).$promise;
		},
		delete: function(bean) {
			return DomainServiceFactory(uri+'/:id').delete(bean).$promise;
		}
	}
}