var express = require('express');
var bodyParser = require('body-parser');

var app = express()
var multer=require('multer');

app.set('port', (process.env.PORT || 8123))

//Static file
app.use(express.static(__dirname);

// Spin up the server
var server=app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Process application/json
app.use(bodyParser.json());

app.get("/",function(req,res){
	console.log(req.method+" request received on "+req.url);
	res.sendFile(__dirname+"/snake.html");
});



