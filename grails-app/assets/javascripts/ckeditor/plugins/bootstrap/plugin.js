(function() {
	CKEDITOR.plugins.add("bootstrap", {
		requires: "dialog",
		icons: "templates",
		init: function(a) {
			CKEDITOR.dialog.add("bootstrap", CKEDITOR.getUrl(this.path + "dialogs/templates.js"));
			a.addCommand("bootstrap", new CKEDITOR.dialogCommand("bootstrap"));
			a.ui.addButton && a.ui.addButton("Templates", {
				label: "Templates",
				command: "bootstrap",
				toolbar: "doctools,10"
			})
		}
	});
	
	var c = {}, f = {};
	CKEDITOR.addTemplates = function(a, d) {
		c[a] = d
	};
	CKEDITOR.getTemplates = function(a) {
		return c[a]
	};
	CKEDITOR.loadTemplates = function(a, d) {
		for (var e = [], b = 0, c = a.length; b < c; b++) 
			f[a[b]] || (e.push(a[b]), f[a[b]] = 1);
		e.length ? CKEDITOR.scriptLoader.load(e, d) : setTimeout(d, 0)
	};
})();
CKEDITOR.config.templates_files = [CKEDITOR.getUrl("plugins/bootstrap/templates/default.js")];
//CKEDITOR.config.templates_replaceContent = !0;