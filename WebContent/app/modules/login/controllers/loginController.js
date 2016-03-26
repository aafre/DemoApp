(function(){
		angular.module(APP_NAME).
		controller('LoginController', [ '$scope', 'LoginService','utilityService','sessionFactory',
		function($scope, loginService,util,sessionFactory) {
			
			$scope.login = function(){
				/**
				 * Admin login authentication done locally.
				 */
				if($scope.user.username=='admin' && $scope.user.password=='admin'){
					sessionFactory.doLogin('admin')
					util.route("admin");
				}
			}
			
			
			
			console.log('login ctrl called');
		}]);
})();