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

app.get('/appointment/:token', function (req, res) {
	var token = req.params.token;
    res.send(200, db.appointment[token]);
});

app.listen(8081, function(){
    console.log('Express server listening on port 8081');
});