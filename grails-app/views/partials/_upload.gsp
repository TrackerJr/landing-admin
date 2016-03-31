<div class="row">	
	<div class="col-sm-3">
		<button class="btn btn-default" type="submit" ng-click="goToNewFolder()" style="display:block;margin: 0 auto 10px;width: 100%">
			<i class="glyphicon glyphicon-folder-open"></i> 
			New Folder
		</button>
		
		<div class="list-group">
		  <a href="#" class="list-group-item" ng-repeat="folder in folders">
		  	{{ folder.name }}
		  </a>
		</div>
	</div>
	<div class="col-sm-9" ng-if="uploader.isHTML5">
		<element nv-file-drop uploader="uploader" style="display: block; border: 5px dashed #A4A7AC; height: 150px; background: #E6E7E8; border-radius: 7px;"></element>
		</div>
	</div>
</div>