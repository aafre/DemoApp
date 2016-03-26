(function(){
	angular.module(APP_NAME)
	.constant("ADMIN_CONSTANT", {
		"CONFIG_URL" : "app/modules/admin/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Admin",
		"REGISTER_URL" : "admin"
	});
})();