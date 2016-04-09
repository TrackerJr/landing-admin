//= wrapped

angular.module('landing.admin.page')
	.controller('PageFormController', PageFormController);

function PageFormController($scope, page, PageDomainService, Notification, $state) {
	$scope.page = page;
	
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
			templates: [
			    { title: 'Test template 1', content: '<div class="container"><div class="row"><p class="col-xs-6">col-xs-6</p><p class="col-xs-6">col-xs-6</p></div><div>' },
			    { title: 'Test template 2', content: '<div class="container-fluid"><div class="row"><div class="col-xs-6">col-xs-6</div><div class="col-xs-6">col-xs-6</div></div></div>' }
			],		    
		    content_css: [
		        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
		        'assets/tinymce/content.css'
		        //'fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
		        //'www.tinymce.com/css/codepen.min.css'
		    ],
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