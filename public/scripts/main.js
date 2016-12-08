require.config({

	paths : {
		'jquery' : [
			'lib/jquery'
		],
		'bootstrap' : 'lib/bootstrap.min',
		'angular' : 'lib/angular',
		'angular-route' : 'lib/angular-route.min',
		'angular-ui-route' : 'lib/angular-ui-route.min',
		'mainModule' : 'app-script/mainModule'
	},

	shim : {
		'bootstrap' : {
			deps : ['jquery']
		},
		'angular' : {
			deps : ['jquery']
		},
		'angular-route' : {
			deps : ['angular']
		},
		'angular-ui-route' : {
			deps : ['angular']
		},
		'mainModule' : {
			deps : ['angular-route' , 'angular-ui-route']
		}
	}
});

require(['mainModule'], function(){
	
})