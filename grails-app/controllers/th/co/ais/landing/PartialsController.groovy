package th.co.ais.landing


import grails.rest.*
import grails.converters.*

class PartialsController {

	def index(String path) {
		render(template: "/partials/$path")
	}
}
