<form>
	<div>
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
		<div class="pull-left">
			<input type="text" name="view-width" id="view-width" value="650"/>
			 x 
			<input type="text" name="view-height" id="view-height" value="500"/>
		</div>
		<div class="clearfix"></div>
	</div>
	<div ui-tinymce="tinymceOptions" ng-model="page.text"></div>
</form>