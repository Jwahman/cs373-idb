var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
	//Go to splash page
	.when('/', {
		templateUrl: '/htmls/splash.html',
		controller: 'mainController'
	})
	//Go to players page
	.when('/players', {
		templateUrl: '/htmls/players.html',
	})
	//Go to tournaments page
	.when('/tournaments', {
		templateUrl: '/htmls/tournaments.html',
	})
	//Go to highlights page
	.when('/characters', {
		templateUrl: '/htmls/characters.html',
	})
	//Go to about page
	.when('/about', {
		templateUrl: '/htmls/about.html',
	})
	.otherwise({redirectTo: '/'});

	//Get rid of # in URL
	if(window.history && window.history.pushState){
		$locationProvider.
		html5Mode({
			enabled: true,
			requireBase: false
		});
	}
}]);		

mainApp.controller('mainController', ['$scope', '$route', function($scope, $route) {
}]);

mainApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

mainApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});