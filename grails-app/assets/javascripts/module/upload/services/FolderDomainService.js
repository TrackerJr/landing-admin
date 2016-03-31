//= wrapped

angular
    .module("landing.admin.upload")
    .factory("FolderDomainService", FolderDomainService);

function FolderDomainService(DomainServiceFactory) {
	var uri = 'rest/api/folder';
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