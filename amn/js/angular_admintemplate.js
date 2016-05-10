angular.module('adminTemplateApp', ['ngRoute','ngAnimate','chieffancypants.loadingBar','angular-loading-bar'])

.config(function($routeProvider,cfpLoadingBarProvider){
	
	$routeProvider			
	.when("/list", {
		templateUrl: "list.html",
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
	
	cfpLoadingBarProvider.includeSpinner = false;
	
})

.controller('atController', ['$scope','$http','$timeout','cfpLoadingBar', 
					 function($scope,$http,$timeout,cfpLoadingBar){					
	
	$scope.counters = [{index:'1'}, {index:'2'}, {index:'3'}];
	
	/*$scope.$on('$viewContentLoaded', function(){
    	$scope.calender('datepicker_td30');
		$scope.calender('datepicker_td31');
		$scope.calender('datepicker_td32');
  	});*/
						 
	$scope.calender = function(input_calender) {   
		//console.log(input_calender);
		calenderPicker(input_calender);		
    };	
	
	// fake the initial load so first time users can see the bar right away:	
	$scope.start = function() {
      cfpLoadingBar.start();
    };
    $scope.complete = function () {
      cfpLoadingBar.complete();
    };    
    $scope.start();
    $scope.fakeIntro = true;
    $timeout(function() {
      $scope.complete();
      $scope.fakeIntro = false;
    }, 1250);
	
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

.directive('ownPaging', function() {
	return {
		restrict: 'E',
		templateUrl: 'd_paging.html'
	};
});