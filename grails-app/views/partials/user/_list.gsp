<div class="row">
	<div class="col-sm-6 col-md-4" ng-repeat="user in users">
		<div class="thumbnail">
			<img src="http://placehold.it/350x150">
			<div class="caption">
				<h3>
					<i class="glyphicon glyphicon-user"></i> {{user.username}}
				</h3>
			</div>
		</div>
	</div>
</div>