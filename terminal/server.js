var http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
   	request = require('request'),
    httpServer;

var serverUrl = "http://localhost:8081/"
var io = require('socket.io').listen(8082); 

var pdfConstants = {
	APPOINTMENT_ID: "{{APPOINTMENT_ID}}",
	NAME: "{{NAME}}",
	SURNAME: "{{SURNAME}}",
	EMAIL: "{{EMAIL}}"
};

io.sockets.on('connection', function (socket) {
	socket.on('message', function (msg) {
		console.log(msg);
	});
});

var cmd = require('node-cmd');
var fs = require('fs');
var pdf = require('html-pdf');

var html = fs.readFileSync('./appointment.html', 'utf8');
var options = { format: 'Letter' };

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root
app.use(express.bodyParser());

httpServer = http.createServer(app);
httpServer.listen(7000);

app.post('/print', function (req, res) {
	var token = req.body.token;
	io.sockets.emit("message", {message: "stratPrint"});

    request({url: serverUrl + "appointment/" + token}, function (error, response, body) {
    	// body = JSON.parse(body);
    	// var pdfStr = html.replace(pdfConstants.APPOINTMENT_ID, body.id);
    	// pdfStr = pdfStr.replace(pdfConstants.NAME, body.name);
    	// pdfStr = pdfStr.replace(pdfConstants.SURNAME, body.surname);
    	// pdfStr = pdfStr.replace(pdfConstants.EMAIL, body.email);
    	// pdf.create(pdfStr, options).toFile('./appointment.pdf', function(err, res) {
		  // if (err) return console.log(err);
		  cmd.run('lp -d HP_LaserJet_Professional_M1212nf_MFP "appointment.pdf"');
		// });
	   // console.log(body);
	})

    // cmd.run('lp -d HP_LaserJet_Professional_M1212nf_MFP "./rp.txt"');
    res.send(200);
});

console.log('Listening on port 7000');