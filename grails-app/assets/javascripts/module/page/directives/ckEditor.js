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
				//extraPlugins: 'docprops',
				language: 'en'
            });
            
            /*ck.on( 'instanceReady', function( evt ){
            	//this.document.appendStyleSheet( 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' );
            	var nodeList = this.document.getElementsByTag( 'link' )
            	for(var i = 0; i <= nodeList.count(); i++) {
            		console.log(nodeList.getItem(i));
            	}
            	console.log(nodeList);
            });*/
           
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