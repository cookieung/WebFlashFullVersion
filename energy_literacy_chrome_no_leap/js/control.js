//GUI controller
//var ctrl = document.getElementById("control");
//ctrl.style.left = (window.innerWidth-100)+'px';
//ctrl.style.top = (window.innerHeight-100)+'px';

function ChangeControl(a) {
	$("#control").css({
		"left": (window.innerWidth-100)+'px',
		"top":  (window.innerHeight-100)+'px'
	});
}

ChangeControl();

resizeTask.push([ChangeControl, null]);

$("#control").children()[0].addEventListener("click", function(e) {
	var curPage = $(".pt-page-current")[0];
	if (typeof curPage.linkPages.up !== "undefined") {
		PageTransitions.nextPage({"animation": 4, "showPage": curPage.linkPages.up});
	}
});
$("#control").children()[1].addEventListener("click", function(e) {
	var curPage = $(".pt-page-current")[0];
	if (typeof curPage.linkPages.down !== "undefined") {
		PageTransitions.nextPage({"animation": 3, "showPage": curPage.linkPages.down});
	}
});
$("#control").children()[2].addEventListener("click", function(e) {
	var curPage = $(".pt-page-current")[0];
	if (typeof curPage.linkPages.left !== "undefined") {
		PageTransitions.nextPage({"animation": 2, "showPage": curPage.linkPages.left});
	}
});
$("#control").children()[3].addEventListener("click", function(e) {
	var curPage = $(".pt-page-current")[0];
	if (typeof curPage.linkPages.right !== "undefined") {
		PageTransitions.nextPage({"animation": 1, "showPage": curPage.linkPages.right});
	}
});

//Touch device
$("#pt-main").swipe({
	swipeDown: function(e, dir, dist, dur, fcnt, fdat) {
		var curPage = $(".pt-page-current")[0];
		if (typeof curPage.linkPages.up !== "undefined") {
			PageTransitions.nextPage({"animation": 4, "showPage": curPage.linkPages.up});
		}
	},
	swipeUp: function(e, dir, dist, dur, fcnt, fdat) {
		var curPage = $(".pt-page-current")[0];
		if (typeof curPage.linkPages.down !== "undefined") {
			PageTransitions.nextPage({"animation": 3, "showPage": curPage.linkPages.down});
		}
	},
	swipeRight: function(e, dir, dist, dur, fcnt, fdat) {
		var curPage = $(".pt-page-current")[0];
		if (typeof curPage.linkPages.left !== "undefined") {
			PageTransitions.nextPage({"animation": 2, "showPage": curPage.linkPages.left});
		}
	},
	swipeLeft: function(e, dir, dist, dur, fcnt, fdat) {
		var curPage = $(".pt-page-current")[0];
		if (typeof curPage.linkPages.right !== "undefined") {
			PageTransitions.nextPage({"animation": 1, "showPage": curPage.linkPages.right});
		}
	},

	threshold: 0

});




//Leap controller
var leapEnable = false;
var leapCnt = 0;
//register the Leapmotion handler function
if (external.AddListenerForLeapMotion)
	external.AddListenerForLeapMotion(LeapHandler);

function LeapHandler(fh) {
	//$("#leap-info pre").text("fingers: " + JSON.stringify(fh.fingers, null, " "));
	//$("#leap-info pre").text("gesture: " + JSON.stringify(fh.gesture, null, " "));
	$("#leap-info pre").text("hands: " + JSON.stringify(fh.hands, null, " "));

	LeapPointerDraw(fh.hands);

	if (leapEnable) {
		var curPage = $(".pt-page-current")[0];

		//check fingers appear
		if (fh.fingers.length>0) {
			if (typeof curPage.noTimeout !== "undefined") {
				//PageTransitions.nextPage({"animation": 58, "showPage": curPage.linkPages.right});
				PageTransitions.nextPage({"animation": 1, "showPage": curPage.linkPages.right});
				return;
			}
		}

		LeapHandChangePage(fh.hands, curPage);
		//LeapGestureChangePage(fh.gesture, curPage);

	}
}


$("#leap-monitor").on("click", function(e) {
	if ($("#leap-info").attr("class")=="leap-hide") {
		$("#leap-info").attr({"class": "leap-show"});
	} else {
		$("#leap-info").attr({"class": "leap-hide"});
	}
});



function LeapPointerDraw(hands) {
	if (!leapEnable) {
		$("#suggestion").hide();
		$("#leap-pointer").hide();
		return;
	}
	$("#leap-pointer").show();
	var leapPointer = $("#leap-pointer");
	//var leapPointerCircle = $("#leap-pointer svg circle")
	if (hands.length>0) {
		var x = hands[0][0],
				y = hands[0][1],
				z = hands[0][2];
		$("#leap-pointer").css({"left": x*window.innerWidth-100, "top": (1-y)*window.innerHeight-100});
		if (z<=0.6) {
			$("#leap-pointer svg circle").attr({
					"r": (80*(1-z)).toString(),
					"fill": "green"
			});
		} else {
			$("#leap-pointer svg circle").attr({
					"r": (80*(1-z)).toString(),
					"fill": "grey"
			});
		}
		$("#suggestion").show();
	} else {
		$("#leap-pointer svg circle").attr({
				"r": "0",
				"fill": "grey"
		});
		$("#suggestion").hide();
	}
}


function LeapGestureChangePage(gesture, curPage) {
	//check leapmotion gesture
	if (gesture.length>0) {
		//var tmpStr = "gesture.legth: "+gesture.length+"<br>";
		for (var g=0; g<gesture.length; g++) {
			//tmpStr += "gesture["+g+"].velocity: "+gesture[g].velocity+"<br>";
			//tmpStr += "gesture["+g+"].direction: "+gesture[g].direction+"<br>";
			if (gesture[g].velocity>100) {
				if (gesture[g].direction[0]>0.2) {
					if (typeof curPage.linkPages.left !== "undefined") {
						//PageTransitions.nextPage({"animation": 59, "showPage": curPage.linkPages.left});
						PageTransitions.nextPage({"animation": 2, "showPage": curPage.linkPages.left});
						return;
					}
				} else if (gesture[g].direction[0]<-0.2) {
					if (typeof curPage.linkPages.right !== "undefined") {
						//PageTransitions.nextPage({"animation": 58, "showPage": curPage.linkPages.right});
						PageTransitions.nextPage({"animation": 1, "showPage": curPage.linkPages.right});
						return;
					}
				}
				if (gesture[g].direction[1]>0.2) {
					if (typeof curPage.linkPages.down !== "undefined") {
						//PageTransitions.nextPage({"animation": 60, "showPage": curPage.linkPages.down});
						PageTransitions.nextPage({"animation": 3, "showPage": curPage.linkPages.down});
						return;
					}
				} else if (gesture[g].direction[1]<-0.2) {
					if (typeof curPage.linkPages.up !== "undefined") {
						//PageTransitions.nextPage({"animation": 61, "showPage": curPage.linkPages.up});
						PageTransitions.nextPage({"animation": 4, "showPage": curPage.linkPages.up});
						return;
					}
				}
			}
		}
		//$("#leap-info").html(tmpStr);

	}
}


function LeapHandChangePage(hands, curPage) {
	if (hands.length>0) {
		var z = hands[0][2],
				velX = hands[0][3],
				velY = hands[0][4];
		if (z<0.6) {
			if (Math.abs(velX)>=Math.abs(velY)) {
				if (Math.abs(velX)>800) {
					if (velX>0) {
						if (typeof curPage.linkPages.left !== "undefined") {
							PageTransitions.nextPage({"animation": 2, "showPage": curPage.linkPages.left});
						}
					} else {
						if (typeof curPage.linkPages.right !== "undefined") {
							PageTransitions.nextPage({"animation": 1, "showPage": curPage.linkPages.right});
						}
					}
				}
			} else {
				if (Math.abs(velY)>500) {
					if (velY>0) {
						if (typeof curPage.linkPages.down !== "undefined") {
							PageTransitions.nextPage({"animation": 3, "showPage": curPage.linkPages.down});
						}
					} else {
						if (typeof curPage.linkPages.up !== "undefined") {
							PageTransitions.nextPage({"animation": 4, "showPage": curPage.linkPages.up});
						}
					}
				}
			}
		}
	}
}

//Cursor controller
//$("#pt-main").addClass("nocursor");


function resizeSuggestHand(vid) {
	$("#suggestion img").width(window.innerWidth);
	$("#suggestion img").height(window.innerHeight);
}
$("#suggestion").hide();
resizeSuggestHand();
resizeTask.push([resizeSuggestHand, null]);
