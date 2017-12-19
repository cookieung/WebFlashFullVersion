var curr = location.href.split('/')[ location.href.split('/').length - 1 ];
var filename = curr;
var video_name;
var indicate =  filename.split("?");
var timer = 0;
if(indicate.length==1){
	video_name = indicate[0];
}else video_name = indicate[1];


$("#exhibition_show").append("<div id='leap-pointer' style='position: absolute; opacity: 0.5'>"+
"<svg width='100' height='100'>"+"<circle cx='50' cy='50' r='25' stroke='black' stroke-width='1' fill='grey' />"+
"</svg></div>");

document.getElementById("video").setAttribute("src", "webm/source_energy/"+video_name+".webm");
document.getElementById("video").load();

console.log("curr",curr);

function findNextPage(){

    var filename = curr;
    var video_name;
    var indicate =  filename.split("?");
    if(indicate.length==1){
        video_name = indicate[0];
    }else video_name = indicate[1];
	console.log(video_name);
	
	if(video_name.indexOf("05") >= 0 ){ 
		console.log("test")
		window.location = "../energy_literacy_chrome_no_leap/lightSelection.html";
	}

    let sp = video_name.split("-");
    let sr = (sp[0].charAt(sp[0].length-2)+""+sp[0].charAt(sp[0].length-1))
    let tmp = parseInt(sp[0].charAt(sp[0].length-1));
    console.log(tmp)
    if(tmp >= 3 && tmp <= 5){
        let ref = video_name;
        console.log(ref,tmp,sr);
        curr = ref.replace(sr,"0"+(tmp+1));
        if(curr.indexOf(".webm")<0) curr+= ".webm";
    }


    if(curr.indexOf("04") >= 0){
        curr = curr.replace("Factory","Transmission");
    }else if(curr.indexOf("05") >= 0){
        curr = curr.replace("Transmission","user");
    }


}

function playNextVideo(){

		findNextPage();
			
		document.getElementById("video").setAttribute("src", "webm/source_energy/"+curr);
		document.getElementById("video").load();

}

function findPreviousPage(){


	
		var filename = curr;
		var video_name;
		var indicate =  filename.split("?");
		if(indicate.length==1){
			video_name = indicate[0];
		}else video_name = indicate[1];
		console.log(video_name)

	
		if(video_name.indexOf("03") >= 0 ){ 
					console.log("test")
					window.location = "../energy_literacy_chrome_no_leap/selectsource.html";
		}

		let sp = video_name.split("-");
		let sr = (sp[0].charAt(sp[0].length-2)+""+sp[0].charAt(sp[0].length-1))
		let tmp = parseInt(sp[0].charAt(sp[0].length-1));
		console.log(tmp)
		if(tmp >= 3 && tmp <= 5){
			let ref = video_name;
			console.log(ref,tmp,sr);
			curr = ref.replace(sr,"0"+(tmp-1));
			if(curr.indexOf(".webm")<0) curr+= ".webm";
		}
	
	
		if(curr.indexOf("04") >= 0){
			curr = curr.replace("user","Transmission");
		}else if(curr.indexOf("03") >= 0){
			curr = curr.replace("Transmission","Factory");
		}
	
	

	
	
	}
	

function playPreviousVideo(){

	findPreviousPage();

    
    document.getElementById("video").setAttribute("src", "webm/source_energy/"+curr);
    document.getElementById("video").load();

    console.log("load")


}

//Leap controller
var leapEnable = false;
var leapCnt = 0;
//register the Leapmotion handler function


if (external.AddListenerForLeapMotion)
	external.AddListenerForLeapMotion(LeapHandler);

	if (external.LedBlink) {
		for(var i=0; i<16; i++){
				external.LedBlink(i, 0, false);
		}
		setTimeout(function() {
			if(curr_page === 3){
				external.LedBlink(0, 1, false); // โรงไฟฟ้า
				external.LedBlink(1, 1, false); // รั้วรอบโรงไฟฟ้า
			}else if(curr_page === 4){
				external.LedBlink(2, 1, true); // สายไฟจากโรงไฟฟ้ามาหม้อแปลง
				external.LedBlink(6, 1, true); // สายไฟจากหม้อแปลงมาเสาไฟฟ้าแรงสูง
				external.LedBlink(5, 1, true); // สายไฟบนเสาไฟฟ้าแรงสูง
			}else if(curr_page === 5){
				external.LedBlink(3, 1, false); // ไฟถนน
				external.LedBlink(4, 1, false); // ไฟในบ้าน
			}
		}, 1000);

	}

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
 						console.log('LEFT'+velX);


 					} else {
						console.log('Right'+timer);
						if(timer >= 10){
							playNextVideo();
							timer =0;
						}else timer++;

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


    document.getElementById("right-arrow").addEventListener("click", playNextVideo);

    document.getElementById("left-arrow").addEventListener("click", playPreviousVideo);