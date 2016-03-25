(function(){
		angular.module(APP_NAME).
		controller('ActivityController', [ '$scope', 'ActivityService','utilityService','sessionFactory',
		function($scope, activityService,util,sessionFactory) {
		//	console.log('Activity ctrl called');
			
			$scope.statusList = ['Pending','Complete','NA'];  
			$scope.list = [];  	//model for selected status of the step
			$scope.path = [];	// array to display correct status image 
			$scope.msg = [];	//alt for image
			$scope.dateTime = [];	//array to store the date time stamp at which the status is updated
			
			$scope.activity = [
			  {
				  "stepName": "Step One",
				  "desc": "",
				  "status":"Pending"
			  },
			  {
				  "stepName": "Step Two",
				  "desc": "",
				  "status":"NA"
			  },
			  {
				  "stepName": "Step Three",
				  "desc": "",
				  "status":"Complete"
			  },
			  {
				  "stepName": "Step Four",
				  "desc": "",
				  "status":"Pending"
			  },
			  {
				  "stepName": "Step Five",
				  "desc": "",
				  "status":"Pending"
			  },
			  {
				  "stepName": "Step Six",
				  "desc": "",
				  "status":"Pending"
			  },
			  {
				  "stepName": "Step Seven",
				  "desc": "",
				  "status":"Pending"
			  },
			  
					
			];
			
			/**
			 * Builds the image souce to display according to the status selected. 
			 * Also captures the date time stamp at that point.
			 * 
			 * This function is called on change of the select option.
			 */
			$scope.getImgSrc = function(index){
				$scope.dateTime[index] = new Date();
			//	console.log($scope.date);
				var name = $scope.list[index];
				$scope.path[index] = '/MaintenenceClient/icons/';
				if(name=='Pending'){
					$scope.path[index] = $scope.path[index]+'Cross-32.png';
					$scope.msg[index]="Step still Pending.";
				}
				else if(name=='Complete'){
					$scope.path[index] = $scope.path[index]+'Check-32.png';
					$scope.msg[index]="Step Complete. :)";
				}
				else if(name=='NA'){
					$scope.path[index] = $scope.path[index]+'na.png';
					$scope.msg[index]="N/A";
				}
				else{
					$scope.path[index]=$scope.path[index]+'error.png';
					$scope.msg[index]="You haven't set a status yet for this step.";
				}
			//	console.log($scope.path);
				$scope.progress();
			};
			
			$scope.progress = function(){
				var total = $scope.activity.length;
				var count = 0;
				for(var i=0;i<total;i++) {
					if($scope.list[i]=='Complete'){
						count = count + 1;
					}
				}
				$scope.percentProgress = (count / total) * 100;
				$scope.percentProgress = Math.round($scope.percentProgress);
				console.log($scope.percentProgress);
			}
			
		}]);
})();