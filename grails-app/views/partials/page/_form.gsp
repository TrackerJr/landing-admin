<style>
.content-body {
	background: red;
}
</style>

<form>
	<p>
		<div class="pull-right">
			<button type="submit" class="btn btn-primary" ng-disabled="!page.text" ng-click="doSubmit(page)"
				confirm="Are you sure to change this item?" confirm-settings="{size: 'sm'}">
				<i class="glyphicon glyphicon-saved"></i> Submit
			</button>
			<a class="btn btn-default" href="#" role="button" ui-sref="^.list">
				<i class="glyphicon glyphicon-remove"></i> 
				Back
			</a>
		</div>
		<div class="clearfix"></div>
	</p>
	<div ui-tinymce="tinymceOptions" ng-model="page.text"></div>
</form>