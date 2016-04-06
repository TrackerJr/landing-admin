package th.co.ais.landing


import grails.rest.*
import grails.converters.*

class DownloadController {

    def index() { 
		def file = new File("/upload/template/T1459913423979/index.html")
		response.setContentType("application/octet-stream")
		response.setHeader("Content-disposition", "filename=${file.getName()}")
		response.setHeader("Content-Type","application/force-download");
		response.outputStream << file.newInputStream()
//		return		
		
		//render(file: new File("/upload/template/T1459913423979/index.html"), fileName: "index.html")
	}
}
