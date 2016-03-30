import org.mitre.dsmiley.httpproxy.URITemplateProxyServlet
import org.springframework.boot.context.embedded.ServletRegistrationBean

// Place your Spring DSL code here
beans = {
	URITemplateProxyServlet(URITemplateProxyServlet)
	
	proxyServlet(ServletRegistrationBean, ref("URITemplateProxyServlet"), grailsApplication.config.proxyServlet.urlPattern) {
		initParameters = [
			targetUri: grailsApplication.config.proxyServlet.targetUri,
			log: (boolean)grailsApplication.config.proxyServlet.logEnabled
		]
	}
}