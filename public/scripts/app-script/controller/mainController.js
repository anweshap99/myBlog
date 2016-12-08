(function(){
	var app = angular.module("mainModule");
	app.registerController("mainController",[mainController]);
	function mainController()
	{
		var homeController = this;
		homeController.information =[
			{
				"title" : "Hello, there!",
				"information" : "I go by the name of Anwesha. I am lazy, extremely so.",
				"image" : "/img/self.jpg"

			}
		];
		homeController.latestUpdates =[
			{
				"title" : "Gone with the wind",
				"information" : "Single page apps demand the front-end developers to become better software engineers. CSS and HTML are not the biggest concern anymore, in fact, there is no longer just a single concern. The front-end developer needs to handle XHRs, application logic (models, views, controllers), performance, animations, styles, structure, SEO, and integration with external services. The result which emerges from all those combined is the User Experience (UX) which should always be prioritized."
			},
			{
				"title" : "Gone with the wind",
				"information" : "Single page apps demand the front-end developers to become better software engineers. CSS and HTML are not the biggest concern anymore, in fact, there is no longer just a single concern. The front-end developer needs to handle XHRs, application logic (models, views, controllers), performance, animations, styles, structure, SEO, and integration with external services. The result which emerges from all those combined is the User Experience (UX) which should always be prioritized."
			},
			{
				"title" : "Gone with the wind",
				"information" : "Single page apps demand the front-end developers to become better software engineers. CSS and HTML are not the biggest concern anymore, in fact, there is no longer just a single concern. The front-end developer needs to handle XHRs, application logic (models, views, controllers), performance, animations, styles, structure, SEO, and integration with external services. The result which emerges from all those combined is the User Experience (UX) which should always be prioritized."
			}
		];
		homeController.carousel = [
			{
				"path" : "/img/books.jpg",
				"index" : 0,
				"title" : "Books",
				"information" : "The atmosphere in Chania has a touch of Florence and Venice."
			}

		];		
	}
})();