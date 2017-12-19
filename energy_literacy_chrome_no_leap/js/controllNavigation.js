var curr = location.href.split('/')[ location.href.split('/').length - 1 ];
var filename = curr;
var video_name;
var indicate =  filename.split("?");
if(indicate.length==1){
	video_name = indicate[0];
}else video_name = indicate[1];


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

function goNextPage(){

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
	

function goPreviousPage(){

	findPreviousPage();

    
    document.getElementById("video").setAttribute("src", "webm/source_energy/"+curr);
    document.getElementById("video").load();

    console.log("load")


}

    document.getElementById("right-arrow").addEventListener("click", goNextPage);

    document.getElementById("left-arrow").addEventListener("click", goPreviousPage);