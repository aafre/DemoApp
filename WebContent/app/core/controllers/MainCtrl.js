(function(){
	angular.module(APP_NAME)
	    .controller("HomeCtrl", ["$scope", 'sessionFactory', '$timeout', 'APP_CONSTANT',
	                             'utilityService','$state',
	     function($scope, sessionFactory, $timeout, APP_CONSTANT, util,$state) {
	    	$scope.route = function(key){
	    		util.route(key);
	    	}
	    }]);
})();
