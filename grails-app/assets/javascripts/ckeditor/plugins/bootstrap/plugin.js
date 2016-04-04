CKEDITOR.plugins.add( 'bootstrap', {
	icons: 'bootstrap',
	init: function( editor ) {
		
		var cmd = new CKEDITOR.dialogCommand( 'bootstrapUI' );
		console.log(this.path);
		CKEDITOR.dialog.add( 'bootstrapDialog', this.path + 'dialogs/bootstrap.js' );
		
		editor.ui.addButton && editor.ui.addButton( 'Bootstrap', {
			label: 'Bootstrap',
			command: 'bootstrapUI',
			toolbar: 'insert,30'
		} );
	}
} );
