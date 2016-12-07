//importing third party modules
var express = require('express');
//inititating express to use functionalities 
var app = express();
//configuartion
var port = process.env.PORT || 3000;
//use to host public files including the css and js
app.use(express.static('public'));
// starting the server
app.listen(port, function(){
	console.log("Server started successfully at port:3000");
});
