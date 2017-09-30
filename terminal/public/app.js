$(document).ready(function () {
	scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
	let qrText = $('#qrCodeTxt');
	scanner.addListener('scan', function (content) {
		request(content);
		qrText.append(content);
		console.log(content)
	});
	Instascan.Camera.getCameras().then(function (cameras) {
		if (cameras.length > 0) {
		  scanner.start(cameras[1]);
		} else {
		  console.error('No cameras found.');
		}
	}).catch(function (e) {
		console.error(e);
	});

	function request(data) {
		$.ajax({
			url: "/print",
			method: "POST",
			data: {
				token: data
			},
			success: function (data) {
				console.log(data);
			}
		})
	}
});