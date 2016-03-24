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