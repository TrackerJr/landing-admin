/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.height = 500;
	
	config.toolbarGroups = [
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'insert', groups: [ 'insert' ] },
	    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
	    { name: 'styles', groups: [ 'styles' ] },	    
	    { name: 'tools', groups: [ 'tools' ] }
	];
	
	var removeButtons = 'Templates,Save,NewPage,Preview,Print'; // document
	removeButtons += ',RemoveFormat,Subscript,Superscript'; // basictstyles
	removeButtons += ',Language,CreateDiv,BidiLtr,BidiRtl'; // paragraph
	removeButtons += ',Styles' // styles
	removeButtons += 'Underline,Subscript,Superscript,Image,Table,HorizontalRule,SpecialChar'; // insert
	config.removeButtons = removeButtons;
};
