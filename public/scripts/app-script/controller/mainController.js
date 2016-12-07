(function(){
	var app = angular.module("mainModule");
	app.controller("mainController",[mainController]);
	function mainController(){
		var ctrl = this;
		ctrl.hello ="Sulking";
	}
})();