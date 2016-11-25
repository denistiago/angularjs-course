(function () {
	'use strict';

	angular.module('lunchCheckerApp', [])
	.controller('LunchCheckerController', function ($scope) {

		$scope.menu = '';
		$scope.message = '';
		$scope.messageClass = '';

		$scope.checkMenuItens = function () {

			$scope.messageClass = 'valid-menu'
			var menuItens = $scope.menu.split(',')
								.map(trim)
								.filter(isNotEmpty)
		
			if (menuItens.length == 0) {
				$scope.message = "Please enter data";
				$scope.messageClass = 'invalid-menu';
			} else if (menuItens.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}	
	

		};

	});

	function isNotEmpty(elem) { return elem }
	function trim(elem) { return elem.trim() }

})();
