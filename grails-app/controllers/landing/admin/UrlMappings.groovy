package landing.admin

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/$path**"(controller: 'index', action: 'index')
		"/grails"(controller: 'index', action: 'grails')
		"/partials/$path**"(controller: 'partials', action: 'index')
		"/file/$root/$path**"(controller: "file")
		
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}