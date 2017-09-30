$(document).ready(function() {
	var socket = io.connect('http://172.24.20.92:8082');

	socket.on('connect', function () {
		socket.on('message', function (msg) {
			if(msg.message === 'stratPrint') {
				$('#test').hide();
				$('#reading').show();
			}

			setTimeout(function() {
				$('#test').show();
				$('#reading').hide();
			}, 25000);
		});
	});

	setInterval(function (argument) {
		$("#test").attr("src",  'giphy.gif?t=' + (new Date().getTime()) ); 
	}, 1500)
	
});