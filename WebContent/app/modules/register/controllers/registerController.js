(function(){
		angular.module(APP_NAME).
		controller('RegisterController', [ '$scope', 'RegisterService','utilityService','sessionFactory',
		function($scope, registerService,util,sessionFactory) {
 			console.log('reg ctrl called');
		}]);
})();