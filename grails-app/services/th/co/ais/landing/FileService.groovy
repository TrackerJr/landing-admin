package th.co.ais.landing

import grails.transaction.Transactional

import java.nio.file.Paths

@Transactional
class FileService {

	static transactional = false

	File loadFile(String basePath, String filePath) {
		
		def pathToBase = Paths.get(basePath).normalize()
		def pathToFile = Paths.get(basePath, filePath).normalize()
		println "pathToBase: $pathToBase"
		println "pathToFile: $pathToFile"
		if (pathToFile.startsWith(pathToBase)) {
			def file = pathToFile.toFile()
			if (file.exists() && file.isFile()) {
				return file
			}
		}
		return null
	}
}
