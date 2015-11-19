var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = 'John';
    $scope.age = 'Doe';
});
app.controller('parent', function($scope) {
	$scope.person = 'zhong';
});
app.controller('children', function($scope) {
	$scope.sayHello = function() {
		$scope.person = 'kevin.zhong';
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
app.controller('req', function($scope, $http) {
	$scope.demo = 'empty';
	$scope.req = function(){
		$http({
			method: 'jsonp',
			url: '',
		}).success(function(data, status, headers, config){
			$scope.demo = 'success';
		}).error(function(data, status, headers, config){
			$scope.demo = 'error';
		});
	};
});