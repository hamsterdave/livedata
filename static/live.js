function get_data() {
	var request = new XMLHttpRequest();
	request.open('GET', "/sensor_data");
	request.onload = function() {
		if (this.status == 200) {
			var data = JSON.parse(request.responseText);
			document.getElementById("sensor_a").innerHTML = data.sensor_a;
			document.getElementById("sensor_b").innerHTML = data.sensor_b;
		}
	};
	request.send();

	setTimeout(get_data, 1000);
}
