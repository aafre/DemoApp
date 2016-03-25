(function(){
	angular.module(APP_NAME)
	.constant("ACTIVITY_CONSTANT", {
		"CONFIG_URL" : "app/modules/activity/config/config.json",
		"MODULE_ENVIRONMENT" : "development",
		"MODULE_TITLE" : "Activity",
		"REGISTER_URL" : "user/activity"
	});
})();