<div class="row" ng-cloak="">
	<div class="col-sm-6" ng-repeat="data in datas">
		<div class="panel panel-default">
			<div class="panel-heading">{{ data.title }}</div>
			<div class="panel-body">
				<canvas class="chart-base" chart-type="data.chartType" chart-data="data.data" chart-labels="data.labels"></canvas> 
			</div>
		</div>
	</div>
</div>
