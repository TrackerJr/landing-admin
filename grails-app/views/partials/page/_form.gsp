<form>
	<div style="margin-bottom: 10px;">
		<div class="pull-right">
			<button type="submit" class="btn btn-primary"
				ng-disabled="!page.text" ng-click="doSubmit(page)"
				confirm="Are you sure to change this item?"
				confirm-settings="{size: 'sm'}">
				<i class="glyphicon glyphicon-saved"></i> Submit
			</button>
			<a class="btn btn-default" href="#" role="button" ui-sref="^.list">
				<i class="glyphicon glyphicon-remove"></i> Back
			</a>
		</div>
		<div class="row">
			<div class="col-xs-6 col-sm-3">
				<select class="form-control"
					ng-options="size as size.text for size in sizes" ng-model="size">
				</select>
			</div>
		</div>

		<div class="clearfix"></div>
	</div>
	<div ng-repeat="tinymce in tinymces track by $index">
		<div ui-tinymce="tinymceOptions" ng-model="page.text"></div>
	</div>
</form>