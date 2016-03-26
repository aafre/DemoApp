(function(){
	angular.module(APP_NAME)
	.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider) {
//		$httpProvider.defaults.withCredentials = true;
		angular.module(APP_NAME).stateProvider = $stateProvider;
		  $stateProvider
		    
		  .state("home", {
		      url          : "/home",
		      templateUrl   : "app/core/views/home.html",
		      controller    : "HomeCtrl"
		  	})
		  	.state("register", {
		      url          : "/register",
		      templateUrl   : "app/modules/register/views/register.html",
		      controller    : "RegisterController"
		  	})
		  	.state("login", {
		      url          : "/login",
		      templateUrl   : "app/modules/login/views/login.html",
		      controller    : "LoginController"
		  	})
		  	.state("dashboard", {
			      url          : "/dashboard",
			      templateUrl   : "app/modules/dashboard/views/dashboard.html",
			      controller    : "DashboardController"
			  	})
			.state("activity", {
			      url          : "/activity",
			      templateUrl   : "app/modules/activity/views/activity.html",
			      controller    : "ActivityController"
			  	}) 	
		  	.state("viewActivity", {
		      url          : "/view-activity",
		      templateUrl   : "app/modules/activity/views/view-activity.html",
		      controller    : "ViewActivityController"
		  	})
		  	.state("admin", {
			      url          : "/admin",
			      templateUrl   : "app/modules/admin/views/admin.html",
			      controller    : "AdminController"
			  	})
		   .state('modules', {
		      url: '/modules',
		      "abstract" : true,
		      templateUrl:"app/core/views/module.html"
		    });
		    
		// if none of the above states are matched, use this as the fall-back
		  
		  $urlRouterProvider.otherwise('home');
	  }
	]);
})();