(function() {
	CKEDITOR.dialog.add("bootstrap", function(c) {
		
		var h = CKEDITOR.plugins.get("bootstrap");
		console.log(h);
		
		return {
			title: "Content Templates",
			minWidth: 400,
			minHeight: 340,
			contents: [{
				id: 'tab-tpl',
				elements: [{
					type: 'vbox',
				    children: [
				        {
				        	type: 'html',
		                    html: 'Please select the template to open in the editor'
				        },
				        {
				        	id: "tplList",
							type: "html",
							focus: !0,
							html: '\x3cdiv class\x3d"cke_tpl_list" tabIndex\x3d"-1" role\x3d"listbox" aria-labelledby\x3d"' + 'xx' + '"\x3e\x3cdiv class\x3d"cke_tpl_loading"\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d"cke_voice_label" id\x3d"' + 'yy' + '"\x3e' + 'xx' + "\x3c/span\x3e"
				        }
				    ]
				}]
			}]
		}
	});
})();