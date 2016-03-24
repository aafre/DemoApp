(function() {
	angular.module(APP_NAME).service('DashboardService', 
			[ '$http', 'LOGIN_CONSTANT','serverURLFactory','sessionFactory', 
			  function($http,DASHBOARD_CONSTANT,serverURLFactory,sessionFactory) {
				alert('dash service called');
		var vm = this;
		// function to authenticate user
		vm.addUser = function(registerBO,successcall,errorCallBack) {
//			console.log(JSON.stringify(registerBO));
			var URL = serverURLFactory.getCompleteURL(REGISTER_CONSTANT.REGISTER_URL);
			console.log(URL);
			$http({
				method:'POST',
				url: URL,
				data:registerBO
			}).then(
				function(successResponse){
					var parsedData = angular.fromJson(successResponse);
					console.log(JSON.stringify(parsedData.data));
					successcall(parsedData.data);
			},
				function(errorResponse){
					var parsedData = angular.fromJson(errorResponse);
					console.log(JSON.stringify(parsedData));
					errorCallBack(parsedData);
			}
			);
			
		};
	}]);

})();