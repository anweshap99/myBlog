define(function(){
	var mainModule = angular.module("mainModule", ["ngRoute","ui.router"]);
	//Lazy loading of controllers
	mainModule.config(['$controllerProvider', function($controllerProvider){
		mainModule.registerController = $controllerProvider.register;
	}]);
	//Loading all angular components defined in appReferences file
	require(['app-script/appReference'], function(references) {
		require(references, function(){
			//Bootstraping angular to the document
			angular.bootstrap(document, ["mainModule"]);
		});
	});

});


