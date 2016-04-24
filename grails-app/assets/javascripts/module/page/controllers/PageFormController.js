//= wrapped

angular.module('landing.admin.page')
	.controller('PageFormController', PageFormController);

function PageFormController($scope, page, templates, PageDomainService, Notification, $state, $timeout) {
	$scope.page = page;
	// refresh tinymce
	$scope.tinymces = [1];
	
	$scope.sizes = [
	     {text: '320 x 480', w: 320, h: 420},
	     {text: '480 x 480', w: 480, h: 480},
	     {text: '768 x 500', w: 768, h: 500},
	     {text: '970 x 500', w: 970, h: 500},
	     {text: '1170 x 500', w: 1170, h: 500}
	];
	$scope.size = $scope.sizes[0];
	
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
		    contextmenu: "link image inserttable | cell row column deletetable",
		    plugin_preview_width: $scope.sizes[0].w,
		    plugin_preview_height: $scope.sizes[0].h,
		    template_popup_width: $scope.sizes[0].w
	};
	
	
	$scope.doSubmit = function(page) {
		
		if(page.id) {
			PageDomainService.update(page).then(success, error);
		} else {
			PageDomainService.save(page).then(success, error)
		}
	};
		
	$scope.$watch('size', function(nv, ov) {
		
		$scope.tinymceOptions.plugin_preview_width = nv.w;
		$scope.tinymceOptions.plugin_preview_height = nv.h;
		$scope.tinymceOptions.template_popup_width = nv.w;
		
		$scope.tinymces = [];
		$timeout(function(){
			$scope.tinymces.push(1);
		}, 1000);
	});	
}