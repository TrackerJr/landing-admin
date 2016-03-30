//= wrapped

angular.module('landing.admin.login')
  	.service('UserInfo', UserInfo);

function UserInfo(AUTH_TOKEN_KEY) {
	var info = {};
	
	this.init = function(username, access_token, roles) {
		info = {
			username: username,
			accessToken: access_token,
			roles: roles
		};
		localStorage[AUTH_TOKEN_KEY] = info['accessToken'];
	};
	
	this.setTokenExpired = function(){
		delete localStorage[AUTH_TOKEN_KEY];		
		info = {};
	};
	
	this.getToken = function(){
		return localStorage[AUTH_TOKEN_KEY]?localStorage[AUTH_TOKEN_KEY]:"''";
	};
	
	this.getUsername = function(){
		return info['username']?info['username']:'';
	};
	
	this.getRoles = function(){
		return info['roles']?info['roles']:[];
	};
	
}