var timer;
var curr_page;


$("#exhibition_show").append("<div id='leap-pointer' style='position: absolute; opacity: 0.5'>"+
"<svg width='100' height='100'>"+"<circle cx='50' cy='50' r='25' stroke='black' stroke-width='1' fill='grey' />"+
"</svg></div>");

function initLedEmu() {
	if (external) {
	} else {
		external = {};
	}

if (external) {
  external.LedDiv = [];
  for (var i=0; i<16; i++) {
    div = document.createElement('div');
    div.style.cssText = 'width:40px;height:40px;position:absolute;left:0px;top:0px;background-color:grey;border-radius:20px;';
    div.style.left = 40*i + 'px'
    external.LedDiv.push(div);
    document.getElementsByTagName('body')[0].appendChild(div);

  }

  external.LedIntensity = function(addr, val) {
    if (addr>=0 && addr<16) {
      if (val>0) {
        external.LedDiv[addr].style.backgroundColor = '#00FF00';
      } else {
        external.LedDiv[addr].style.backgroundColor = 'grey';
      }
    }
  }
}
}


function findNextPage(){
	var filename = location.href.split('/')[ location.href.split('/').length - 1 ];
	var temp_arr = filename.split('_');
	var prefix_arr = temp_arr[0].split('-');
	var subfix_arr = temp_arr[1].split('.');
	var timer_arr = subfix_arr[1].split('?');
	var curr_index = parseInt(subfix_arr[0]);
	var curr_source = parseInt(prefix_arr[0]);
	console.log(subfix_arr[1]);
	console.log(curr_index);
	console.log(curr_source);
	if(curr_index==3){
		timer = timer_arr[curr_index]*1000;
		return '../../lightSelection.html';
	}
	timer = timer_arr[curr_index]*1000;
	curr_page = curr_source;
	curr_source++;
	curr_index++;
	let p = '0'+curr_source;
	return (p+'-'+prefix_arr[1]+'_'+curr_index+'.'+subfix_arr[1]);
}

function findPreviousPage(){
	var filename = location.href.split('/')[ location.href.split('/').length - 1 ];
	var temp_arr = filename.split('_');
	var prefix_arr = temp_arr[0].split('-');
	var subfix_arr = temp_arr[1].split('.');
	var timer_arr = subfix_arr[1].split('?');
	var curr_index = parseInt(subfix_arr[0]);
	var curr_source = parseInt(prefix_arr[0]);
	console.log(subfix_arr[1]);
	console.log(curr_index);
	console.log(curr_source);
	if(curr_index==1){
		timer = timer_arr[curr_index]*1000;
		return '../../lightSelection.html';
	}
	timer = timer_arr[curr_index]*1000;
	curr_page = curr_source;
	curr_source--;
	curr_index--;
	let p = '0'+curr_source;
	return (p+'-'+prefix_arr[1]+'_'+curr_index+'.'+subfix_arr[1]);
}



//Leap controller
var leapEnable = false;
var leapCnt = 0;
var nextPage = findNextPage();
var previousPage = findPreviousPage();
console.log('n'+nextPage);
console.log('p'+previousPage);
console.log("curr_page :"+curr_page);

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

				console.log("Draw");
			
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
				if (z<0.6) {
		 			if (Math.abs(velX)>=Math.abs(velY)) {
		 				if (Math.abs(velX)>800) {
		 					if (velX>0) {
		 						console.log('LEFT'+velX);

		 					} else {
		 					console.log('RIGHT');
							 setTimeout(goNextPage, 2000);
							
		 					}
		 				}
		 			}  else {
 				if (Math.abs(velY)>500) {
 					if (velY>0) {
 					// 	do nothing
 					} else {
 					// 	do nothing
 					}
 				}
 			}
 		}
 	}
 }

function goNextPage(){
	window.location.href = nextPage;
}

function goPreviousPage(){
	window.location.href = previousPage;
}

setTimeout(goNextPage, timer);

console.log(document.getElementById("right-arrow"));

document.getElementById("right-arrow").addEventListener("click", goNextPage);
document.getElementById("left-arrow").addEventListener("click", goPreviousPage);