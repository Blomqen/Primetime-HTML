var x = setInterval(function() {
	
	var now = new Date().getTime();
	
	var distance = countDownDate - now + 60000 * 8;

	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	document.getElementById("demo").innerHTML = seconds;

if (distance < -1) {
	clearInterval(x);
	document.getElementById("demo").interHTML = "Tiden är slut";
	document.location.href = "/ute/";
	}
}, 1000);

function correct() {
	var now = new Date().getTime();
	
	var timeleft = countDownDate - now + 60000 * 8;
	
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	
	if (timeleft > 0) {
	window.setTimeout(function () {
	document.location.href = "../fragor/fraga9.html";
	}, timeleft);}
}

function fel() {
	var now = new Date().getTime();
	
	var timeleft = countDownDate - now + 60000 * 8;
	
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	
	if (timeleft > 0) {
	window.setTimeout(function () {
	document.location.href = "/ute/";
	}, timeleft);}
}