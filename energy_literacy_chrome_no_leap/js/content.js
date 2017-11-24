pageConfig = [
	{//Lamp1 [5]
		"id": "energy-lamp1",
		"video": "webm/Lamp1.webm",
		"rightPage": 0,
		"timeout": 10000,
		"upPage": 7,
		"downPage": 6,
		"nextPage": 6,
		"model": function() {
			$("#hand-next").hide();
			$("#hand-up").show();

			if (external.LedIntensity) {
				external.LedBlink(7, 1); // หลอดไส้
				external.LedBlink(8, 0); // หลอดฟลูออเรสเซนต์
				external.LedBlink(9, 0); // หลอดแอลอีดี
			}
		}
	},
	{//Lamp2 [6]
		"id": "energy-lamp2",
		"video": "webm/Lamp2.webm",
		"rightPage": 0,
		"timeout": 1,
		"upPage": 5,
		"downPage": 7,
		"nextPage": 7,
		"model": function() {
			$("#hand-next").hide();
			$("#hand-up").show();

			if (external.LedIntensity) {
				external.LedBlink(7, 0); // หลอดไส้
				external.LedBlink(8, 1); // หลอดฟลูออเรสเซนต์
				external.LedBlink(9, 0); // หลอดแอลอีดี
			}
		}
	},
	{//Lamp3 [7]
		"id": "energy-lamp3",
		"video": "webm/Lamp3.webm",
		"rightPage": 0,
		"timeout": 1,
		"upPage": 6,
		"downPage": 5,
		"nextPage": 0,
		"model": function() {
			$("#hand-next").hide();
			$("#hand-up").show();
			if (external.LedIntensity) {
				external.LedBlink(7, 0); // หลอดไส้
				external.LedBlink(8, 0); // หลอดฟลูออเรสเซนต์
				external.LedBlink(9, 1); // หลอดแอลอีดี
			}
		}
	},
];

var ptTimeout = undefined;

function MakePages() {
	// generate the Pages
	var ptMain = document.getElementById("video_layer");

	for (var i=0; i<pageConfig.length; i++) {
		var ptPage = document.createElement("div");
		ptPage.id = pageConfig[i].id;
		ptPage.className = "pt-page";
		//ptPage.style.backgroundColor = "#00AA00"
		ptPage.style.backgroundColor = "#FF9900"
		ptMain.appendChild(ptPage);
		ptPage.linkPages = {
			"up": pageConfig[i].upPage,
			"down": pageConfig[i].downPage,
			"left": pageConfig[i].leftPage,
			"right": pageConfig[i].rightPage,
			"next": pageConfig[i].nextPage,
		};
		if (pageConfig[i].model) {
			ptPage.model = pageConfig[i].model;
		}
		var vid = document.createElement("video");
		//vid.id = "vid000";
		vid.innerHTML = "<source src='"+pageConfig[i].video+"' type='video/webm'>";
		ptPage.appendChild(vid);

		function resizeVid(vid) {
			vid.style.width = window.innerWidth+"px";
			vid.style.height = window.innerHeight+"px";
			vid.width = window.innerWidth;
			vid.height = window.innerHeight;
		}

		resizeVid(vid);
		resizeTask.push([resizeVid, vid]);

		//generate callback function when video's played finish
		function aa(replayAt, noTimeout, timeout) {
			//replay time is set
			if (typeof replayAt !== "undefined") {
				if (typeof noTimeout !== "undefined") {
					return function() {
						this.play();
						this.currentTime = replayAt;
					}
				} else {
					if (typeof timeout == "undefined") {
						timeout = 5000;
					}
					return function() {
						this.play();
						this.currentTime = replayAt;
						if (typeof ptTimeout == "undefined") {
							ptTimeout = setTimeout(function() {
								var curPage = document.getElementsByClassName("pt-page-current")[0];
								var nPage = curPage.linkPages.right;
								if (nPage>=0) {
									//PageTransitions.nextPage({"animation": 58, "showPage": nPage});
									PageTransitions.nextPage({"animation": 1, "showPage": nPage});
								}
							}, timeout);
						}
					}
				}
			} else {
				//replay time is not set.
				if (typeof timeout == "undefined") {
					timeout = 5000;
				}
				return function() {
					ptTimeout = setTimeout(function() {
						var curPage = document.getElementsByClassName("pt-page-current")[0];
						var nPage = 0;
						if (typeof curPage.linkPages.next == "undefined")
							nPage = curPage.linkPages.right;
						else
							nPage = curPage.linkPages.next;
						if (nPage>=0) {
							//PageTransitions.nextPage({"animation": 58, "showPage": nPage});
							PageTransitions.nextPage({"animation": 1, "showPage": nPage});
						}
					}, timeout);
				}
			}
		}
		vid.addEventListener("ended", aa(pageConfig[i].replayAt, pageConfig[i].noTimeout, pageConfig[i].timeout));
		ptPage.noTimeout = pageConfig[i].noTimeout;


	}
}

MakePages();
