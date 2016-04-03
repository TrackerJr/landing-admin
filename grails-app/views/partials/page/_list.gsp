<div style="margin-bottom: 10px;">
	<div class="pull-right">
		<a class="btn btn-default" href="#" role="button" ui-sref="page.create">CREATE</a>
	</div>
	<div class="clearfix"></div>
</div>
<div class="row">
	<div class="col-sm-6 col-md-4" ng-repeat="page in pages">
		<div class="thumbnail">
			<img src="http://placehold.it/350x150">
			<div class="caption">
				<h3>
					<i class="glyphicon glyphicon-list-alt"></i> {{page.name}}
				</h3>
				<p>
					<button class="btn btn-default" type="button">
						<i class="glyphicon glyphicon-download-alt"></i> Download
					</button>
					<a class="btn btn-default" href="#" role="button" ui-sref="page.edit({id: page.id})">
						<i class="glyphicon glyphicon-edit"></i> Edit
					</a>
					<button class="btn btn-default" type="button" ng-click="doDelete({id: page.id})">
						<i class="glyphicon glyphicon-trash"></i> Delete
					</button>
				</p>
			</div>
		</div>
	</div>
</div>