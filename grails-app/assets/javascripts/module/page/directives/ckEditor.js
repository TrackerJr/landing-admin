//= wrapped

angular.module('landing.admin.page')
	.directive('ckEditor', ckEditor);

function ckEditor($compile) {
	return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
        	        	
            var ck = CKEDITOR.replace(element[0], {
            	enterMode: CKEDITOR.ENTER_DIV,
            	fullPage: true,
				allowedContent: true,
				extraPlugins: 'docprops',
				language: 'en'
            });
            
            ck.on( 'loaded', function( evt ) {
                console.log('ck editor loaded');
            });
            
            ck.on('pasteState', function () {
                scope.$apply(function () {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function (value) {
                ck.setData(ngModel.$modelValue);
            };
        }
    };
}