define(function(){
	var app = angular.module("mainModule");
	app.config(function($routeProvider, $stateProvider, $urlRouterProvider) {
		//-----------------------------------------------------------------------------------------------
		//Angular ui router configuration
		//-----------------------------------------------------------------------------------------------
	    $urlRouterProvider.otherwise('/home');
	    $stateProvider
	    	.state('home',{
	    		url: '/home',
	    		templateUrl : '/views/home.html',
	    		controller: 'mainController as main',
	    		resolve: {
	    			load: ['$q', function($q){
	    				var defered = $q.defer();
	    				require(['app-script/controller/mainController'], function(){
	    					defered.resolve();
	    				});
	    				return defered.promise;
	    			}]
	    		}
	    	})
	    	.state('work',{
	    		url: '/work',
	    		templateUrl : '/views/work.html'
	    		
	    	})
	});
});