<div class="modal-header">
   	<h3 class="modal-title"><b>Server: {{rejection.data.error}}</b></h3>
</div>
<div class="modal-body">

	Message: <b>{{ rejection.data.message }}</b>

</div>
<div class="modal-footer">
   	<button type="submit" class="btn btn-danger btn-block" type="button" onclick="location.reload()"><i class="glyphicon glyphicon-refresh"></i> Refresh</button>
</div>