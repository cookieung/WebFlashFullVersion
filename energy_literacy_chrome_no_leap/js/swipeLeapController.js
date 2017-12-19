var timer;
var nextPage;
var previousPage;


function findNearPage(){
	var filename = location.href.split('/')[ location.href.split('/').length - 1 ];
	if(filename=='index.html'){
    nextPage = 'energy_literacy_chrome_no_leap/selectsource.html';
    previousPage = 'none';
  }else if(filename=='lightSelection.html'){
    previousPage = 'energy_literacy_chrome_no_leap/selectsource.html';
    nextPage = '../index.html';
  }
}

//Leap controller
var leapEnable = false;
var leapCnt = 0;
findNearPage();
//register the Leapmotion handler function


if (external.AddListenerForLeapMotion)
	external.AddListenerForLeapMotion(LeapHandler);

	function LeapPointerDraw(hands) {

	$("#leap-pointer").show();

	var leapPointer = $("#leap-pointer");
	//var leapPointerCircle = $("#leap-pointer svg circle")
	if (hands.length>0) {
		var x = hands[0][0],
				y = hands[0][1],
				z = hands[0][2];
		$("#leap-pointer").css({"left": x*window.innerWidth-100, "top": (1-y)*window.innerHeight-100});
		$("#leap-pointer svg circle").attr({
					"r": (80*(1-z)).toString(),
					"fill": "green"
			});
		$("#suggestion").show();
	} else {
		$("#leap-pointer svg circle").attr({
				"r": "0",
				"fill": "grey"
		});
		$("#suggestion").hide();
	}
}

function LeapHandler(fh) {
	LeapPointerDraw(fh.hands);

		LeapHandChangePage(fh.hands);
}

 function LeapHandChangePage(hands) {
 	if (hands.length>0) {
 		var z = hands[0][2],
 				velX = hands[0][3],
 				velY = hands[0][4];
 			if (Math.abs(velX)>=Math.abs(velY)) {
 				if (Math.abs(velX)>800) {
 					if (velX>0) {
 					// 	console.log('LEFT'+velX);


 					} else {
						goNextPage();

 					}
 				}
 			} else {
 				if (Math.abs(velY)>500) {
 					if (velY>0) {

 					} else {

 					}
 				}
 			}
 	}
 }

 function goNextPage(){
	window.location.href = nextPage;
}

 document.getElementById("animation_container").addEventListener("click", goNextPage);