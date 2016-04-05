CKEDITOR.plugins.add( 'bootstrap', {
	icons: 'bootstrap',
	init: function( editor ) {
		
		//console.log(editor);
		
		editor.addCommand( 'bootstrap', new CKEDITOR.dialogCommand( 'bootstrapDialog' ) );
//		var cmd = new CKEDITOR.dialogCommand( 'bootstrapUI' );
//		CKEDITOR.dialog.add( 'bootstrapDialog', this.path + 'dialogs/bootstrap.js' );
//		
		editor.ui.addButton && editor.ui.addButton( 'Bootstrap', {
			label: 'Bootstrap',
			command: 'bootstrap',
			toolbar: 'insert,30'
		} );
		
		editor.on('instanceReady', function(event) {
           var nodeLinks = this.document.getElementsByTag( 'link' );
           if(nodeLinks.count() == 0) {
        	   this.document.appendStyleSheet( 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' );
           }
           
           console.log( this.document);
           //console.log(nodeLinks.getItem(0));
           for(var i = 0; i < nodeLinks.count(); i++) {
        	   console.log(nodeLinks.getItem(i));
           }
        }, editor, null, 100);
	}
} );
