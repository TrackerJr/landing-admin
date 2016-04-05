CKEDITOR.dialog.add( 'bootstrapDialog', function ( editor ) {
    
	return {
        title: 'Theme Properties',
        minWidth: 400,
        minHeight: 200,

        contents: [{
        	id: 'tab-basic',
        	label: 'Basic Settings',
        	elements: [{
        		type: 'text',
        		id: 'abbr',
        		label: 'Abbreviation',
        		validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty." )
        	}, {
        		type: 'text',
        		id: 'title',
        		label: 'Explanation',
        		validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." )
        	}]
        }],
        onShow: function() {
			var doc = editor.document;
			//console.log(doc);
        },
        onOk: function() {
        	//console.log(this);
        	
//            var dialog = this;
//            var abbr = editor.document.createElement( 'abbr' );
//
//            abbr.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );
//            abbr.setText( dialog.getValueOf( 'tab-basic', 'abbr' ) );
//
//            var id = dialog.getValueOf( 'tab-adv', 'id' );
//            if ( id )
//                abbr.setAttribute( 'id', id );
//
//            editor.insertElement( abbr );
        }
	};
});