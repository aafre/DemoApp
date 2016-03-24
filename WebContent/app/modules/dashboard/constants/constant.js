(function(){
	angular.module(APP_NAME)
	.constant("DASHBOARD_CONSTANT", {
		"CONFIG_URL" : "app/modules/dashboard/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Dashboard",
		"REGISTER_URL" : "user/dashboard"
	});
})();