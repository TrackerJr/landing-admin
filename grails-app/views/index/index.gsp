<!DOCTYPE html>
<html lang="en" ng-app="landing.admin">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>${grailsApplication.config.project.name}</title>

    <asset:stylesheet src="application.less" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript">
      window.contextPath = "${request.contextPath}";
    </script>
    <base href="${request.contextPath}/">    
  </head>
  <body ng-cloak="">
  	
  	<g:render template="/components/navbar" />
  	
  	<div ui-view="" class="container-fluid"></div>
  	
	<asset:javascript src="application.js" />	
  </body>
</html>
