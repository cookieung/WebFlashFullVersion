var model = {
	"powerPlant":	0,1,2
	"transLine":	4,5
	"endUser":		6,7
	"lamp0":			8,
	"lamp1":			9,
	"lamp2":			10,
};


function loadModelConfig() {
}

function createModelConfig() {
	$("body").append($("<div>").attr({"id":"model-config-dialog"}));
	$("#model-config-dialog").css({
		"position": "absolute",
		"top": 10,
		"left": 40,
		"width": 200,
		"height": 200
	});
}
