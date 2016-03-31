<form ng-submit="doNewFolder(bean)" block-ui block-ui-pattern="/^api\/folder/">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="cancel()">
			<span aria-hidden="true">&times;</span>
		</button>
    	<h3 class="modal-title">
    		<i class="glyphicon glyphicon-folder-open"></i> 
    		New Folder
    	</h3>
  	</div>
  	<div class="modal-body">
  	
  		<div class="form-group">
    		<input type="text" class="form-control" id="name" placeholder="โฟลเดอร์ไม่มีชื่อ" ng-model="bean.name">
  		</div>

  	</div>
  	<div class="modal-footer">
    	<button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button>
        <button type="submit" class="btn btn-primary">Create</button>
  	</div>
</form>