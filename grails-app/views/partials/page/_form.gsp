<form ng-submit="doSubmit(bean)">
	<div class="form-group">
		<ck-editor ng-model="bean.text"></ck-editor>
	</div>
	<div class="text-center">
		<button type="submit" class="btn btn-default">Submit</button>
	</div>	
</form>