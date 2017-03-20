
function startDragging(event) {
	//console.log(event);
	event.dataTransfer.setData("Color", event.target.style.background);
	event.target.style.opacity = 0.3;
}

function setBorderSize(event, size) {
	event.target.style.border = size + " solid black";
}

function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	var color = event.dataTransfer.getData("Color");
	event.currentTarget.style.background = color;
	setBorderSize(event, '2px');
}

function dragEnded(event) {
	event.target.style.opacity = 1.0;
}
