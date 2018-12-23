var textfield;

function setup() {
	noCanvas();
	textfield = createInput();
	
	textfield.changed(newText);
}

function newTyping() {
	createP(textfield.value());
}

function newText() {
	createP(textfield.value());
}


//var button = select("#test");
//button.mousePressed(Knapptryck());


//function Knapptryck() {
//	createP(knapptryckt);
//}