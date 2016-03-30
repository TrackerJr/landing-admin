<nav class="navbar navbar-default" ng-controller="IndexController as idx">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span> 
				<span class="icon-bar"></span> 
				<span class="icon-bar"></span> 
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#" ui-sref="index">${ grailsApplication.config.project.name }</a>
		</div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
			<ul class="nav navbar-nav">
				<li>
					<a href="#" ui-sref="page.list">
						<i class="glyphicon glyphicon-upload"></i> 
						Upload
					</a>
				</li>
				<li>
					<a href="#" ui-sref="page.list">
						<i class="glyphicon glyphicon-file"></i> 
						Page
					</a>
				</li>
				<li>
					<a href="#" ui-sref="page.list">
						<i class="glyphicon glyphicon-list-alt"></i> 
						User
					</a>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown" uib-dropdown="">
					<a href="#" class="dropdown-toggle" id="profile-dropdown" uib-dropdown-toggle=""> 
						<i class="glyphicon glyphicon-user"></i>
						Profile <span class="caret"></span>
					</a>
					<ul class="dropdown-menu" uib-dropdown-menu aria-labelledby="profile-dropdown">
						<li>
							<a href="#">Action</a>
						</li>
						<li>
							<a href="#">Another action</a>
						</li>
						<li>
							<a href="#">Something else here</a>
						</li>
						<li role="separator" class="divider"></li>
						<li>
							<a href="#" ng-click="goToLogout()">
								<i class="glyphicon glyphicon-log-out"></i> 
								Log out
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>