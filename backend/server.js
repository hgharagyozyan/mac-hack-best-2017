var express = require('express');
var path = require('path');
var app = express();

// this is our db :)
var db = {
	appointment: {
		"e65f17ee-b21a-48f0-90fe-c66a192e0465": {
			id: "AP-00001",
			name: "John",
			surname: "Smith",
			email: "email@test.com"
		}
	}
};

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.all('/*', function(req, res, next) {
  	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.get('/appointment/:token', function (req, res) {
	var token = req.params.token;
	console.log("aaaaa")
    res.send(200, db.appointment[token]);
});

app.listen(8081, function(){
    console.log('Express server listening on port 8081');
});