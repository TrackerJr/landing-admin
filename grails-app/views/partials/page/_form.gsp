<%--<form>
	<div class="form-group">
		<ck-editor ng-model="page.text"></ck-editor>
	</div>
	<div class="text-center">
		<button type="submit" class="btn btn-primary" ng-disabled="!page.text" ng-click="doSubmit(page)"
			confirm="Are you sure to change this item?" confirm-settings="{size: 'sm'}">
			<i class="glyphicon glyphicon-saved"></i> Submit
		</button>
		<a class="btn btn-default" href="#" role="button" ui-sref="^.list">
			<i class="glyphicon glyphicon-remove"></i> 
			Back
		</a>
	</div>	
</form>

--%>


<ckeditor:editor name="myeditor" height="400px" width="80%">
${initialValue}
</ckeditor:editor>

