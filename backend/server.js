let express = require('express');
let path = require('path');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

// this is our db :)
let db = {
	appointment: {
		"e65f17ee-b21a-48f0-90fe-c66a192e0465": {
			id: "AP-00001",
			name: "John",
			surname: "Smith",
			email: "email@test.com"
		}
	}
};

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
        io.emit('message', {type:'new-message', text: message});
    });
});

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

/*app.all('/!*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');


    next();
});*/

app.get('/appointment/:token', function (req, res) {
	let token = req.params.token;
    res.send(200, db.appointment[token]);
});
app.get('/', function (req, res) {
    io.emit('message', {type:'new-message', text: 'patient Arrived'});
    res.send(200, 'Hi running');
});

http.listen(8081, function(){
    console.log('Express server listening on port 8081');
});

/*let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
        io.emit('message', {type:'new-message', text: message});
    });
});

http.listen(8081, () => {
    console.log('started on port 5000');
});*/
