(function() {
	angular.module(APP_NAME).service('ActivityService', 
			[ '$http', 'ACTIVITY_CONSTANT','serverURLFactory','sessionFactory', 
			  function($http,LOGIN_CONSTANT,serverURLFactory,sessionFactory) {
				console.log('Activity service called');
		var vm = this;
		
		
	}]);

})();