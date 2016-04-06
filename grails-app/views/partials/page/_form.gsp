<form>
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

<%--<div class="panel panel-default">
	<div class="panel-heading" style="padding: 7px;">
		<button class="btn btn-sm btn-default" type="submit">
			<i class="glyphicon glyphicon-cog"></i> Properties
		</button>
		<button class="btn btn-sm btn-default" type="submit">
			<i class="glyphicon glyphicon-list-alt"></i> Add Row
		</button>
		<button class="btn btn-sm btn-default" type="submit">
			<i class="glyphicon glyphicon-cog"></i> Prebuild
		</button>
	</div>
	<div class="panel-body">
		<iframe src="partials/index" style="border:0; height: 500px; width: 100%;"></iframe>
	</div>
</div>--%>