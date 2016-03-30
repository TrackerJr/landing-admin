//= wrapped
//= require /angular/angular
//= require /angular/module/angular-resource
//= require_self
//= require_tree services

angular.module("landing.admin.core", ['ngResource'])
    .constant("contextPath", window.contextPath)
    .config(config);

function config($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    $httpProvider.interceptors.push(httpRequestInterceptor);
}

function httpRequestInterceptor(contextPath) {
    return {
        request: function (config) {
            if (!config.url.indexOf("/") == 0 && contextPath) {
                config.url = contextPath + "/" + config.url;
            }
            return config;
        }
    };
}
