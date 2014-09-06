

app.controller("myController",function  ($scope) {
	$scope.message = "";


/*	$scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {$scope.message = "";};
*/
	$scope.save = function() {
		// body...
		$scope.message = "";
	};
	$scope.clear = function() {
		// body...
		$scope.message = ""; 
	} ;
	
	$scope.left = function() {
		// body...
		return 100 - $scope.message.length; 
	}
});