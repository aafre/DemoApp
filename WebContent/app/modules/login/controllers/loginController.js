(function(){
		angular.module(APP_NAME).
		controller('LoginController', [ '$scope', 'LoginService','utilityService','sessionFactory',
		function($scope, loginService,util,sessionFactory) {
			console.log('login ctrl called');
		}]);
})();