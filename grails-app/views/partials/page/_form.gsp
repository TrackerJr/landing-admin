<form ng-submit="doSubmit(page)">
	<div class="form-group">
		<ck-editor ng-model="page.text"></ck-editor>
	</div>
	<div class="text-center">
		<button type="submit" class="btn btn-primary" ng-disabled="!page.text">
			<i class="glyphicon glyphicon-saved"></i> Submit
		</button>
		<a class="btn btn-default" href="#" role="button" ui-sref="^.list">
			<i class="glyphicon glyphicon-remove"></i> 
			Back
		</a>
	</div>	
</form>