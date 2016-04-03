<form ng-submit="doLogin(bean)" name="userForm" novalidate block-ui block-ui-pattern="/^rest\/api\/login$/">
	<div class="modal-header">
    	<h3 class="modal-title text-center"><b>LOGIN</b></h3>
  	</div>
  	<div class="modal-body">

		<div class="form-group">
			<div class="input-group">
			  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
			  <input type="text" class="form-control" id="username" name="username" maxlength="255" placeholder="Username" ng-model="bean.username" autofocus required>
			</div>
		</div>
	
		<div class="form-group">
			<div class="input-group">
			  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
			  <input type="password" class="form-control" id="password" name="password" maxlength="255" placeholder="Password" ng-model="bean.password" required>
			</div>
		</div>

  	</div>
  	<div class="modal-footer">
    	<button type="submit" class="btn btn-primary btn-block" type="button" ng-disabled="userForm.$invalid">
    		<i class="glyphicon glyphicon-log-in"></i> Login
    	</button>
  	</div>
</form>