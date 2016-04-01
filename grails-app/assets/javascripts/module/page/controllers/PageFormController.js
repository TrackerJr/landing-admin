//= wrapped

angular.module('landing.admin.page')
	.controller('PageFormController', PageFormController);

function PageFormController($scope, page, PageDomainService) {
	$scope.page = page;
	
	$scope.doSubmit = function(bean) {
		console.log(bean);
		if(bean.id) {
			
		} else {
			PageDomainService
				.save(bean)
					.then(
						function(){
							console.log('save page success');
						},
						function(){
							console.log('save page fail');
						}
					);
		}
	};
}