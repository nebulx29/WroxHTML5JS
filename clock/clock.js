var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;

ctx.translate(radius, radius);
radius = radius * 0.9;

//drawClock();
setInterval(drawClock, 1000);

function drawClock() {
	
	drawFace(ctx,radius);
	drawNumbers(ctx,radius);
	drawTime(ctx,radius);
}

function drawFace(ctx, radius) {
	// draw background circle
	ctx.beginPath();	
	ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();
	
	//add outline with gradient
	var grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
	grad.addColorStop(0, '#333');
	grad.addColorStop(0.5, 'white');
	grad.addColorStop(1, '#333');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius*0.1;
	ctx.stroke();
	
	// draw mid point
	ctx.beginPath();
	ctx.arc(0,0,radius*0.06, 0,2*Math.PI);
	ctx.fillStyle = '#333';
	ctx.fill();
}

function drawNumbers(ctx,radius) {
	var i;
	var ang;
	ctx.font = radius*0.15 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	
	for (i=1; i<13; i++) {
		ang = i * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius*0.85);
		ctx.rotate(-ang);
		ctx.fillText(i.toString(), 0,0);
		ctx.rotate(ang);
		ctx.translate(0, radius*0.85);
		ctx.rotate(-ang);
	}
	
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//console.log("" + hour + ":" + minute + ":" + second);

	hour = hour%12;
	hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
	minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
	second = (second*Math.PI/30);

	drawHand(ctx, hour, radius*0.5, radius*0.07);
	drawHand(ctx, minute, radius*0.8, radius*0.07);
	drawHand(ctx, second, radius*0.9, radius*0.02);

}