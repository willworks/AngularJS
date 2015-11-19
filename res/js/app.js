var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = 'John';
    $scope.age = 'Doe';
});
app.controller('parent', function($scope) {
	$scope.person = 'zhong';
});
app.controller('children', function($scope) {
	$scope.sayHello = function($scope) {
		$scope.person = 'hanjin';
	};
});
app.controller('cal', function($scope) {
	$scope.num = 0;
	$scope.add = function(){
		$scope.num++;
	};
	$scope.sub = function(){
		$scope.num--;
	};
});