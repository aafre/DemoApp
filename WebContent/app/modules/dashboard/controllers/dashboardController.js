(function(){
		angular.module(APP_NAME).
		controller('DashboardController', [ '$scope', 'DashboardService','utilityService','sessionFactory',
		function($scope, dashboardService,util,sessionFactory) {
 			alert('dash ctrl called');
		}]);
})();