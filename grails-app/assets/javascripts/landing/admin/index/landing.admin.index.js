//= wrapped
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates
//= require /angular/module/ui-bootstrap-tpls

angular.module("landing.admin.index", [
  "landing.admin.core",
  "ui.bootstrap.dropdown",
  "ui.bootstrap.collapse",
]);
