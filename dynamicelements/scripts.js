
setInterval(updateProgressBar, 200);

function updateProgressBar() {
	var progressBar = document.getElementById('progressBar');
	progressBar.value += 1;
}

