var rtime;
var timeout = false;
var delta = 200;
var resizeTask = [];


$(window).resize(function() {
	rtime = new Date();
	if (timeout===false) {
		timeout = true;
		setTimeout(resizeend, delta);
	}
});

function resizeend() {
	if (new Date() - rtime < delta) {
		setTimeout(resizeend, delta);
	} else {
		timeout = false;
		for (var i=0; i<resizeTask.length; i++) {
			resizeTask[i][0](resizeTask[i][1]);
		}
		
		//$("#control").css({
		//	"left": (window.innerWidth-100)+'px',
		//	"top":  (window.innerHeight-100)+'px'
		//});
	}
}