//= wrapped

angular.module('landing.admin.page')
	.directive('ckEditor', ckEditor);

function ckEditor() {
	return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
        	
            var ck = CKEDITOR.replace(element[0], {
            	enterMode: CKEDITOR.ENTER_DIV,
            	fullPage: true,
				allowedContent: true,
				extraPlugins: 'docprops',
				on: {
					instanceReady: function() {
						this.document.appendStyleSheet( 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' );
					}
				}
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