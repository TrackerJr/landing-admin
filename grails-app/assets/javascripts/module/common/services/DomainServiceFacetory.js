//= wrapped

angular
    .module("landing.admin.common")
    .factory("DomainServiceFactory", DomainServiceFactory);

function DomainServiceFactory($resource) {
    return function(url, paramDefaults, actions, options) {
        var resourceActions = {"update": {method: "PUT"}, "list": {method: "GET", isArray: true}};
        angular.extend(resourceActions, actions);

        return $resource(
            url,
            paramDefaults || null,
            resourceActions,
            options || {}
        );
    }
}
