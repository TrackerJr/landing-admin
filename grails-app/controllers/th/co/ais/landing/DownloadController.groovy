package th.co.ais.landing


import grails.rest.*
import grails.converters.*

class DownloadController {

    def index() { 
		log.debug "Root: ${params.root}"
		
		def fileDir = new File("/upload/template", params.root)
		log.debug "Path: ${fileDir.exists()}"
		if(!fileDir.exists())  {
			response.status = 404
		} else {
			def file = new File()
			response.setContentType("application/octet-stream")
			response.setHeader("Content-disposition", "filename=${file.getName()}")
			response.setHeader("Content-Type","application/force-download");
			response.outputStream << file.newInputStream()
		}
	}
}
