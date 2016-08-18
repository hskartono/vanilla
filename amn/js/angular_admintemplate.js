angular.module('adminTemplateApp', ['ngRoute'])

.config(function($routeProvider){

	$routeProvider
	.when("/home", {
		templateUrl: "home.html",
		controller: "atController"
	})
	.when("/list", {
		templateUrl: "list.html",
		controller: "atController"
	})
	.when("/listempty", {
		templateUrl: "listempty.html",
		controller: "atController"
	})
	.when("/input", {
		templateUrl: "input.html",
		controller: "atController"
	})
	.when("/detail", {
		templateUrl: "detail.html",
		controller: "atController"
	})
	.when("/popup", {
		templateUrl: "popup.html",
		controller: "atController"
	})
	.otherwise({
		redirectTo: "/"
	});

})

.controller('atController', ['$scope','$http','$timeout', function($scope, $http, $timeout){

	$scope.calender = function(input_calender) {
		calenderPicker(input_calender);
    };

	// jquery
	angular.element(document).ready(function() {

		// toogle filter
		$("#own_div_search").hide();
		$("#btn_toggle_div_search").click(function() {
			$("#own_div_search").toggle();
		});

		// currency input
		$('.currency_input').number(true, 0, ',', '.');
		$('.number').number(true, 2, ',', '.');

		// combo with search
    	$('.combo_search').select2({ placeholder : 'Show All' });

		// clock picker
    	$('.clockpicker').clockpicker({donetext: 'Done'});

		// clock picker am/pm
    	$('.clockpickerampm').clockpicker({donetext: 'Done', twelvehour: true});

		// scroll body to 0px on click
		$('.own_button_position button, .own_button_position a').click(function() {
			setTimeout(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 0);
			}, 0);
		});

		// placeholder
    	$('input, textarea').placeholder();

		// tooltip
    	$('[data-toggle="tooltip"]').tooltip();

    });

}])
