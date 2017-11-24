(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape.setTransform(-1340.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_1.setTransform(-1172.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_2.setTransform(-1005.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_3.setTransform(-837.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_4.setTransform(-670.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(5).p("ECP/AIhIAAxBEhBcAIhIAAxBEAnRAIhIAAxBANFIhIAAxBAtFIhIAAxBEgnRAIhIAAxBEB1zAIhIAAxBEBboAIhIAAxBEBBcAIhIAAxBEhbnAIhIAAxBEh1yAIhIAAxBEiP+AIhIAAxB");
	this.shape_5.setTransform(418.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1342.8,-57,2685.7,114);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("AgaA5QAOgnAAgSQAAgRgOgnQgIgXAPAAQAUAAAOAXQAPAYAAAgQAAAhgPAYQgOAXgUAAQgPAAAIgXg");
	this.shape.setTransform(14,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("AgOA5QgPgYAAghQAAggAPgYQAOgXAUAAQAPAAgJAXQgNAnAAARQAAASANAnQAJAXgPAAQgUAAgOgXg");
	this.shape_1.setTransform(-14,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("AA5AbQgngOgSAAQgRAAgnAOQgXAIAAgPQAAgUAXgOQAYgPAgAAQAhAAAYAPQAXAOAAAUQAAAKgKAAQgFAAgIgDg");
	this.shape_2.setTransform(0,-14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676767").s().p("Ag4APQgXgOAAgUQAAgPAXAJQAnANARAAQASAAAngNQAXgJAAAPQAAAUgXAOQgYAPghAAQggAAgYgPg");
	this.shape_3.setTransform(0,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#969696","#797979","#202020","#231F20"],[0,0.263,0.827,1],-3,5.2,3,-5.2).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A9593").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B0B1B1","#676767"],[0,1],-22.9,0,23,0).s().p("AiiCjQhDhDAAhgQAAheBDhEQBEhDBeAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414142").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBoAACPQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape.setTransform(-1340.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_1.setTransform(-1172.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_2.setTransform(-1005.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_3.setTransform(-837.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_4.setTransform(-670.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(5).p("ECP/AIhIAAxBEhBcAIhIAAxBEAnRAIhIAAxBANFIhIAAxBAtFIhIAAxBEgnRAIhIAAxBEB1zAIhIAAxBEBboAIhIAAxBEBBcAIhIAAxBEhbnAIhIAAxBEh1yAIhIAAxBEiP+AIhIAAxB");
	this.shape_5.setTransform(418.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1342.8,-57,2685.7,114);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("EiV+AB5IAAjxMEr9AAAIAADxg");
	this.shape.setTransform(961.3,114.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EiV+ACOIAAkbMEr9AAAIAAEbg");
	this.shape_1.setTransform(961.3,115.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("EiVpAB6IAAjyMErTAAAIAADyg");
	this.shape_2.setTransform(961.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("EiVpACOIAAkbMErTAAAIAAEbg");
	this.shape_3.setTransform(961.3,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("EiV9AJMIAAyXMEr8AAAIAASXg");
	this.shape_4.setTransform(961.1,58.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("EiV9AGAIAAr/MEr8AAAIAAL/g");
	this.shape_5.setTransform(961.1,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-0.2,1920,129.7);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1846.7,67,0.971,0.971);

	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1552.3,67,0.971,0.971);

	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1258,67,0.971,0.971);

	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(963.7,67,0.971,0.971);

	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(669.4,67,0.971,0.971);

	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(375.1,67,0.971,0.971);

	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.8,67,0.971,0.971);

	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1366.2,113.7,0.971,0.272,180);

	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(553.9,17.4,0.971,0.272);

	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.parent = this;

	this.instance_10 = new lib.Symbol4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1039.6,114.6,0.971,0.271,180);

	this.instance_11 = new lib.Symbol4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1039.6,15.5,0.971,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.971,x:553.9,y:17.4,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.971,x:1366.2,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:375.1}},{t:this.instance_4,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:1552.3}},{t:this.instance,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:1846.7}}]}).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:562.1,y:17.4,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1360.6,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:570.3,y:17.4,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1355.1,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:578.5,y:17.3,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1349.6,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:586.8,y:17.3,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1344,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:80.9,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:595,y:17.3,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1338.5,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:603.2,y:17.2,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1333,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:611.5,y:17.2,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1327.4,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:619.7,y:17.2,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1321.9,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:80.9,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,y:66.9,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:627.9,y:17.1,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1316.4,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:636.2,y:17.1,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1310.8,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,y:67.1,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:644.4,y:17.1,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1305.3,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,y:67.1,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:652.6,y:17,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1299.8,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:669.5,y:66.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:660.9,y:17,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1294.2,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:669.5,y:66.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,y:66.9,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:669.1,y:17,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1288.7,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:677.3,y:16.9,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1283.2,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,y:66.9,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:685.5,y:16.9,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1277.6,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:669.4,y:66.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,y:67.1,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:693.8,y:16.9,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1272.1,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:702,y:16.8,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1266.6,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:80.7,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,y:66.9,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,y:67.1,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:710.3,y:16.8,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1261,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:80.8,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:718.5,y:16.8,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1255.5,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:80.7,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:726.7,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1250,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:735,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1244.4,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,y:67.1,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:743.2,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1238.9,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:751.4,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1233.4,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:759.6,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1227.8,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:767.9,y:16.6,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1222.3,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:776.1,y:16.6,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1216.8,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:784.4,y:16.5,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1211.2,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:171,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:171,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:792.6,y:16.5,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1205.7,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:177,y:66.9,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:1258.1,y:66.9}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:177,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:800.8,y:16.5,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1200.2,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-177,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-177,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:809,y:16.4,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1194.6,y:114.1,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-171,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-171,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:817.3,y:16.4,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1189.1,y:114.1,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:825.5,y:16.4,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1183.6,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:833.8,y:16.3,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1178,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:80.7,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:842,y:16.3,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1172.5,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:80.7,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:850.2,y:16.3,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1167,y:114.1,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:858.5,y:16.2,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1161.4,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:866.7,y:16.2,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1155.9,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:874.9,y:16.2,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1150.4,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,y:66.9,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:883.1,y:16.1,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1144.8,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:891.4,y:16.1,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1139.3,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:669.5,y:67.1}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:899.6,y:16.1,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1133.7,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:375.1}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,y:67.1,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,y:67,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:907.9,y:16,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1128.2,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,y:66.9,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:916.1,y:16,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1122.7,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,y:66.9,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:924.3,y:16,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1117.1,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,y:66.9,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:932.5,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1111.6,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,y:67,x:963.8}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,y:66.9,x:1846.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:940.8,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1106.1,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:949,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1100.5,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,y:66.9,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:957.2,y:15.8,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1095,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:1552.3}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:965.5,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1089.5,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:80.9,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,y:66.9,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:973.7,y:15.8,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1083.9,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:80.8,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:375.1}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:669.5,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:981.9,y:15.8,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1078.4,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:990.2,y:15.7,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1072.9,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:998.4,y:15.7,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1067.3,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:1006.6,y:15.7,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1061.8,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:375.2}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:1552.4}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:1014.9,y:15.6,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1056.3,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:1023.1,y:15.6,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1050.7,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:1552.4}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:1031.3,y:15.6,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1045.2,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:80.9,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:375.2}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-6,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:1258.1,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:1552.3}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-6,y:67,x:1846.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_11},{t:this.instance_10},{t:this.instance_6,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:80.8,y:67}},{t:this.instance_5,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:375.1}},{t:this.instance_4,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:669.4,y:67}},{t:this.instance_3,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:963.7}},{t:this.instance_2,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:1258,y:67}},{t:this.instance_1,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:1552.3}},{t:this.instance,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:1846.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.3,64.8,3417.4,130.5);
// library properties:
lib.properties = {
	width: 1920,
	height: 130,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;