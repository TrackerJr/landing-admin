//= wrapped

angular.module('landing.admin.login')
  	.service('UserInfo', UserInfo);

function UserInfo(TOKEN_HEADER_NAME) {
	var info = {};
	
	this.init = function(username, access_token, roles) {
		info = {
			username: username,
			accessToken: access_token,
			roles: roles
		};
		localStorage[TOKEN_HEADER_NAME] = info['accessToken'];
	};
	
	this.setTokenExpired = function(){
		delete localStorage[TOKEN_HEADER_NAME];		
		info = {};
	};
	
	this.getToken = function(){
		return localStorage[TOKEN_HEADER_NAME]?localStorage[TOKEN_HEADER_NAME]:"''";
	};
	
	this.getUsername = function(){
		return info['username']?info['username']:'';
	};
	
	this.getRoles = function(){
		return info['roles']?info['roles']:[];
	};
	
}