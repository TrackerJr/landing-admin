//= wrapped

angular.module('landing.admin.page')
	.controller('PageFormController', PageFormController);

function PageFormController($scope, page, templates, PageDomainService, Notification, $state) {
	$scope.page = page;
	
	if(!$scope.page.id) {
		$scope.page.links = [		
		    {
		    	type: 'StyleSheet',
		    	link: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
		    }
		];	
	}
	
	
	var success = function(){
		Notification.success({
			message: '<i class="glyphicon glyphicon-ok"></i> บันทึกสำเร็จ',
			delay: 3000
		});
		$state.go('^.list');
	};
	
	var error = function() {
		Notification.error({
			message: '<i class="glyphicon glyphicon-remove"></i> บันทึกไม่สำเร็จ',
			delay: 3000
		});
	};
	
	var getStyleSheet = function(){
		var arr = [];
		$.each($scope.page.links, function(index, object) {
			if('StyleSheet' == object.type) {
				arr.push(object.link);
			}
		});
		return arr;
	};
	
	$scope.tinymceOptions = {
			inline: false,
			height: 500,
			skin: 'lightgray',
		    theme : 'modern',
		    image_advtab: true,
		    body_class: 'content-body',
		    fullpage_default_doctype: "<!DOCTYPE html>",
		    fullpage_default_encoding: "UTF-8",
			plugins: [
			    'fullpage',
			    'advlist autolink lists link image charmap print preview hr anchor',
			    'searchreplace wordcount visualblocks visualchars code fullscreen',
			    'media save table contextmenu directionality',
			    'emoticons template paste textcolor colorpicker textpattern imagetools'
			],
			toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',			
			templates: templates,		    
		    content_css: [
		        'assets/tinymce/content.css'
		    ].concat(getStyleSheet()),
		    contextmenu: "link image inserttable | cell row column deletetable"
	};
	
	
	$scope.doSubmit = function(page) {
		
		if(page.id) {
			PageDomainService.update(page).then(success, error);
		} else {
			PageDomainService.save(page).then(success, error)
		}
	};
		
}