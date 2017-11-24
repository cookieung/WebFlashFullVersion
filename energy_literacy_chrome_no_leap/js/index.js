(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D2D4").s().p("AkhDKQDGgQCTh7QB3hiBzjEQgjEiilBwQhaA9hyAAQhRAAhegeg");
	this.shape.setTransform(27.6,56.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(2).p("AhInMIAAk2QAAg1AdgfQAdgfAvAAQAvAAAgAhQAhAhABAyQABBOABB1IAFHRQABAYABAEQAFAPAUABQAVACAIgOQADgHAEgXIBRplQALhNAsgcQAsgcBAAdQBDAegKBQIhOJmQgDAWACAJQAFAOAVAEQAUADAKgLQAIgIAFgVQA5jfA2jNQANgxAYgPQAYgOAvALQAxAMASAdQARAcgLAwQgYBpgyDQQgrC3gbCBQgNA+gRB7QgRB8gMA8QgcCIhJBVQhQBdiAAcQiZAhh+gjQiHglhih0Qhfhyh/hMQh3hHinhEQgvgTgOgdQgPgdANgwQAJghAOgbQAyhlBiAzQBWAtCpBbQAiASALgHQAMgGgBgmQgEkdg6kSQgThZghi0QgIgqAXgkQAWgkAngIQAvgKApAZQApAZAJAsIBcHfQABACAFAXQAEAQACAFQAGALANgBQAQgBAEgMQACgGAAgTIAAlZg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAINkQiHglhih0Qhfhyh/hMQh3hHinhEQgvgTgOgdQgPgdANgwQAJghAOgbQAyhlBiAzQBWAtCpBbQAiASALgHQAMgGgBgmQgEkdg6kSQgThZghi0QgIgqAXgkQAWgkAngIQAvgKApAZQApAZAJAsIBcHfIAGAZQAEAQACAFQAGALANgBQAQgBAEgMQACgGAAgTIAAlZIgDAAIAAk2QAAg1AdgfQAdgfAvAAQAvAAAgAhQAhAhABAyIACDDIAFHRQABAYABAEQAFAPAUABQAVACAIgOQADgHAEgXIBRplQALhNAsgcQAsgcBAAdQBDAegKBQIhOJmQgDAWACAJQAFAOAVAEQAUADAKgLQAIgIAFgVIBvmsQANgxAYgPQAYgOAvALQAxAMASAdQARAcgLAwIhKE5QgrC3gbCBQgNA+gRB7QgRB8gMA8QgcCIhJBVQhQBdiAAcQhLAQhEAAQhIAAhAgSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-89.5,165.6,179.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D2D4").s().p("AkhDKQDGgQCTh7QB3hiBzjEQgjEiilBwQhaA9hyAAQhRAAhegeg");
	this.shape.setTransform(27.6,56.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(2).p("AhInMIAAk2QAAg1AdgfQAdgfAvAAQAvAAAgAhQAhAhABAyQABBOABB1IAFHRQABAYABAEQAFAPAUABQAVACAIgOQADgHAEgXIBRplQALhNAsgcQAsgcBAAdQBDAegKBQIhOJmQgDAWACAJQAFAOAVAEQAUADAKgLQAIgIAFgVQA5jfA2jNQANgxAYgPQAYgOAvALQAxAMASAdQARAcgLAwQgYBpgyDQQgrC3gbCBQgNA+gRB7QgRB8gMA8QgcCIhJBVQhQBdiAAcQiZAhh+gjQiHglhih0Qhfhyh/hMQh3hHinhEQgvgTgOgdQgPgdANgwQAJghAOgbQAyhlBiAzQBWAtCpBbQAiASALgHQAMgGgBgmQgEkdg6kSQgThZghi0QgIgqAXgkQAWgkAngIQAvgKApAZQApAZAJAsIBcHfQABACAFAXQAEAQACAFQAGALANgBQAQgBAEgMQACgGAAgTIAAlZg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAINkQiHglhih0Qhfhyh/hMQh3hHinhEQgvgTgOgdQgPgdANgwQAJghAOgbQAyhlBiAzQBWAtCpBbQAiASALgHQAMgGgBgmQgEkdg6kSQgThZghi0QgIgqAXgkQAWgkAngIQAvgKApAZQApAZAJAsIBcHfIAGAZQAEAQACAFQAGALANgBQAQgBAEgMQACgGAAgTIAAlZIgDAAIAAk2QAAg1AdgfQAdgfAvAAQAvAAAgAhQAhAhABAyIACDDIAFHRQABAYABAEQAFAPAUABQAVACAIgOQADgHAEgXIBRplQALhNAsgcQAsgcBAAdQBDAegKBQIhOJmQgDAWACAJQAFAOAVAEQAUADAKgLQAIgIAFgVIBvmsQANgxAYgPQAYgOAvALQAxAMASAdQARAcgLAwIhKE5QgrC3gbCBQgNA+gRB7QgRB8gMA8QgcCIhJBVQhQBdiAAcQhLAQhEAAQhIAAhAgSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-89.5,165.6,179.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858585").s().p("ABgCMIjpjsQgFgGAAgHQAAgGAFgGIASgSQAFgEAHgBQAHABAFAEIDpDsQAFAFAAAHQAAAHgFAFIgSATQgFAEgHABQgHgBgFgEg");
	this.shape.setTransform(26.8,80.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABuAVQgKgDgKgEIgMgGIgFACQgLADgSgBIAAAAIgJgEIgIgFIgKgEQgGgCgBgDIgFAGIgEgEIAHgFQgEgBgDgFIgFgIIgEgJIgDgKIAAgBIAAAAQgBgQADgOIACgEIgGgNQgEgKgCgKIhqDRQBFiSAkhIIADgHIABAIQAEAPAEALIAEAIIACgCQADgGAIgEQAOgFAPAIQAHAEAFAFQAHAJgDAIQgCAGgKAEIgHACIgHABQgQABgLgNIgDgEQgDAJABARIADAGIAEAHIAEAIQADAEADACIgDADIAFAGIAEgEQABADAEAEIAGAFIAHADIAIACIAAAAQAQABAKgCIgFgEQgMgLAAgQQAAgFADgJQADgKAIgDQAIgDAIAHQAFAFAEAHQAIAPgFAPQgDAIgGAEIgDABIAIAEQAMAFAOADIAIABIgHAEQhSApiFBAgABGgwQgEACgDAGQgCAHAAAGQgBANAKAKIAIAFQAJgDADgJQAEgKgHgNQgDgHgEgDQgEgEgEAAIgCAAgAALhZQgIADgDAJIAFAIQAKAJANAAIAGgBIAGgCQAHgCABgEQACgFgFgFQgDgEgHgEQgIgEgHAAQgEAAgFACg");
	this.shape_1.setTransform(55.5,53.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("Ah1CNQgLgCgHgHQgHgHgCgLQgCgMAGgGICZibQAEgEAKAAQAJAAABgBIA9g+QgFgGAFgGQAGgFAFAGIAhAhQAGAGgGAFQgCADgDgBQgEAAgCgCIgXgYIg+A+QANARABAIQAAAGgGAGIiaCaQgEAFgIAAIgFAAg");
	this.shape_2.setTransform(41.2,67.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858585").s().p("AhAgKQgTgfgMgjIgIgdIDPDTQhrgUg9hgg");
	this.shape_3.setTransform(10.5,97.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF03A").s().p("AjJHEQgzgBgjgkIh8h9QgjgjgBgzQgBgzAigjIAEgDQAqgqAYg1QAZg0ADg7QAFhLAhhEQAihFA7g1QBrhfCQAAQCRAABrBfQB8BvAFCnQAFCmh0B1QgzA0g+AdQg+AdhDAFQg6ADg0AaQg1AYgqArIgEAEQggAggwAAIgGAAg");
	this.shape_4.setTransform(63.7,45.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737477").s().p("AAoAzIgPgHIhfhgICBBAQAIAEADAIQADAJgEAIQgEAIgIADIgIABQgFAAgEgCg");
	this.shape_5.setTransform(19.2,102);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737477").s().p("ABzBYIi0hZIhRhQIABgIIAEABIETCJQAIAEADAJQADAIgEAIQgEAJgIACIgIABQgFAAgEgCg");
	this.shape_6.setTransform(15.9,94);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737477").s().p("ACFBbIkdiOQgGgDgCgGQgCgHADgGIAFgJQADgHAGgCQAGgCAHADIEcCOQAGADADAGQACAHgDAGIgFAJQgDAHgGACIgGABQgEAAgDgCg");
	this.shape_7.setTransform(18.8,89.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737477").s().p("ACGBZIkWiGQgIgEgCgJQgDgJAEgIQAEgJAJgDQAKgEAIAEIDIBeIBOBPIgJACIgIACIgFgBg");
	this.shape_8.setTransform(22.6,85.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737477").s().p("AhGgQQgIgEgEgHQgEgIAEgIQAEgIAJgEQAKgDAIADIApAQIBfBgg");
	this.shape_9.setTransform(19.5,77.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ACADAD").s().p("AgXCuIiUiWQgPgPAAgSQAAgUAPgPICAiBQAPgOATgBQATABANAOICVCWQAPAOAAATQAAAUgPAOIiACCQgOAPgUgBQgTABgOgPg");
	this.shape_10.setTransform(19.1,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,108.4,107.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3786C6").s().p("AgZAAIgWAhIgLgkQAAgDgKAOIgLARIAHg9ICJgFIAPBNIgagtIgDAjIgWgeIgFAlQAAAFgWgrIgDAVQgFAXAAADIAAAAQgBAAgSgqg");
	this.shape.setTransform(8,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,16,8.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56A3E").s().p("AgKAhQgNgEgHgNQgGgNAEgMQAEgOANgHQANgGAMAEQAOAEAHANQAGANgEAMQgEAOgNAHQgIAEgHAAQgFAAgGgCg");
	this.shape.setTransform(142.3,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56A3E").s().p("AgJAhQgOgEgHgNQgGgNAEgMQAEgOANgHQANgGAMAEQAOAEAHANQAGANgEANQgEANgNAHQgIAEgIAAIgJgCg");
	this.shape_1.setTransform(144.7,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56A3E").s().p("AgKAhQgNgEgHgNQgGgNAEgMQAEgOANgHQANgGAMAEQAOAEAHANQAGANgEAMQgEAOgNAHQgIAEgHAAQgFAAgGgCg");
	this.shape_2.setTransform(131.7,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F35C2B").s().p("AgKAhQgNgFgHgMQgGgNAEgMQAFgOANgGQAMgHANAEQANAEAHANQAGAMgEANQgFAOgMAHQgIAEgIAAIgKgCg");
	this.shape_3.setTransform(139.5,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F35C2B").s().p("AgJAhQgOgEgHgNQgGgMAEgNQAEgOANgHQANgGAMAEQAOAEAGANQAHANgEAMQgEAOgNAGQgIAFgIAAIgJgCg");
	this.shape_4.setTransform(124.3,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F35C2B").s().p("AgmgDIA/hZIAOC5g");
	this.shape_5.setTransform(150.6,150.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F35C2B").s().p("AgwgfIAfhjIBCCCIgpCDg");
	this.shape_6.setTransform(145.7,125.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F35C2B").s().p("AhHgwIBWgtIBCAWIihCkg");
	this.shape_7.setTransform(66.9,109);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F35C2B").s().p("Ag6BdIApjwIBMBiIg9DEg");
	this.shape_8.setTransform(120.7,126.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#808284","#7B7D7F","#67696B","#57585A","#4A4A4C","#434244","#414042","#464547","#535456","#58595B"],[0,0.016,0.075,0.141,0.216,0.31,0.478,0.682,0.937,1],-27.3,-41,18.7,47.8).s().p("AArGDIgZkFIiNgJIh2ogIAsgWIBSCfIAWDIICZBVIC1HHg");
	this.shape_9.setTransform(166.9,147.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(243,91,42,0.949)","#231609"],[0.125,1],-9.5,-10.9,3.9,15.1).s().p("AgpiIIBuBrIAYCYIhYhAIhhBOg");
	this.shape_10.setTransform(133.4,92.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(243,91,42,0.949)","#231609"],[0.125,1],-10.7,-16.5,14,31.2).s().p("ACJBCIlaC0IgMhNIFsnPIANC6IBCAVIgxF+g");
	this.shape_11.setTransform(98,70.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#808284","rgba(112,113,114,0.945)","rgba(74,72,73,0.812)","rgba(19,12,14,0.651)","rgba(27,23,24,0.71)","rgba(47,45,46,0.839)","rgba(60,59,60,0.922)","rgba(65,64,66,0.949)"],[0,0.075,0.22,0.369,0.439,0.643,0.831,1],-16,26.9,19.9,-5.9).s().p("AmKANIENkUIBvBsICDApIAkDkIDxAoIABBug");
	this.shape_12.setTransform(121.8,157.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#808284","rgba(112,113,114,0.945)","rgba(74,72,73,0.812)","rgba(19,12,14,0.651)","rgba(27,23,24,0.71)","rgba(47,45,46,0.839)","rgba(60,59,60,0.922)","rgba(65,64,66,0.949)"],[0,0.075,0.22,0.369,0.439,0.643,0.831,1],-39.4,40.7,48.9,-40).s().p("ApADQIISmbIDjgkIANBMIFai0IAlDlIk6C+IiEgqIkXE2g");
	this.shape_13.setTransform(57.7,111.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#808284","#7B7D7F","#67696B","#57585A","#4A4A4C","#434244","#414042","#464547","#535456","#58595B"],[0,0.016,0.075,0.141,0.216,0.31,0.478,0.682,0.937,1],-36,-47.3,34.8,89.3).s().p("Au6gaIIRmcIDlgkIAMBMIFai0IAkDlIBYBBIBshvIBOBhIAsgXIA4CjIAvDDICaBVIC2HJg");
	this.shape_14.setTransform(95.5,135);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F35B2F").s().p("Au6CaIIRmbIDlglIFsnQIFJBpIgHD7IBBAUIBAJYICaBUIC2HJg");
	this.shape_15.setTransform(95.5,117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,191,192.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.4).p("AltAAQAACYBrBrQBrBrCXAAQCYAABrhrQBrhrAAiYQAAiXhrhrQhrhriYAAQiXAAhrBrQhrBrAACXg");
	this.shape.setTransform(67.3,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89431").s().p("AkCEDQhrhrAAiYQAAiXBrhrQBrhrCXAAQCYAABrBrQBrBrAACXQAACYhrBrQhrBriYAAQiXAAhrhrg");
	this.shape_1.setTransform(67.3,67.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCC534").s().p("Ah9HkIjOBlIgTjlIjmgQIBjjPIi/iAIC9iCIhljPIDlgSIAQjmIDPBjICAi/ICCC9IDPhlIATDlIDlAPIhjDQIC/CAIi9CCIBlDOIjlATIgPDmIjQhjIiAC/g");
	this.shape_2.setTransform(67.3,67.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCC534").s().p("AAAGQIiKB4Ig9iuIi0AiIAii0Iiug9IB4iLIh4iKICug9Igii1IC0AiIA9itICKB4ICLh4IA9CtIC0giIghC1ICtA9Ih4CKIB4CLIitA9IAhC0Ii0giIg9Cug");
	this.shape_3.setTransform(67.4,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,134.7,134.7), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoSGFQhvAAhOhOQhOhNAAhvQAAhuBOhNQBOhNBvAAQBEAAA8AhQASh4BbhPQBchRB7AAQBuAABXBDQBWBCAeBoQArgUAvAAQBZAAA/A+QBAA9ADBXQAjgOAkAAQBMAAA1A1QA2A1AABMQAABMg2A1Qg1A1hMAAg");
	this.shape.setTransform(79.8,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,159.6,77.8), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnnFpQhmAAhIhJQhIhJAAhmQAAhmBIhIQBIhJBmAAQA/AAA3AfQAQhuBUhJQBVhKBwAAQBlAABRA+QBPA8AcBfQAngRArAAQBSAAA6A4QA7A4ADBQQAegNAjAAQBFAAAyAzQAxAyAABGQAABGgxAyQgyAzhFAAg");
	this.shape.setTransform(73.4,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,146.8,72.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnnFpQhmAAhIhJQhIhJAAhmQAAhmBIhIQBIhJBmAAQA/AAA3AfQAQhuBUhJQBVhKBwAAQBlAABRA+QBPA8AcBfQAngRArAAQBSAAA6A4QA7A4ADBQQAegNAjAAQBFAAAyAzQAxAyAABGQAABGgxAyQgyAzhFAAg");
	this.shape.setTransform(73.4,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,146.8,72.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArxIpQidAAhvhvQhvhvAAidQAAicBvhuQBvhuCdAAQBhAABVAuQAZipCChxQCDhyCuAAQCcAAB8BfQB6BdAsCUQA9gcBCAAQB+AABaBXQBaBXAFB8QAxgUAzAAQBsAABMBMQBMBMAABrQAABshMBMQhMBMhsAAg");
	this.shape.setTransform(113.3,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,226.6,110.6), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C653C").s().p("ApbAQIARgZISYgGIAOAfg");
	this.shape.setTransform(60.4,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,120.9,3.2), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgHA0IAAhnIAPAAIAABng");
	this.shape.setTransform(0.8,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,1.5,10.4), null);


(lib.Path_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12_0, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgEAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgHA0IAAhnIAPAAIAABng");
	this.shape.setTransform(0.8,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,1.5,10.4), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgEAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969696").s().p("AgzAXIAAgtIBnAAIAAAtg");
	this.shape.setTransform(5.2,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,10.5,4.5), null);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgHA0IAAhnIAPAAIAABng");
	this.shape.setTransform(0.8,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,1.5,10.4), null);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgHA0IAAhnIAPAAIAABng");
	this.shape.setTransform(0.8,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,1.5,10.4), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgEAGg");
	this.shape.setTransform(0.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0.1,0,1.7,1.1), null);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgEAGg");
	this.shape.setTransform(0.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0.1,0,1.7,1.1), null);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgFIAJADIgEAGg");
	this.shape.setTransform(0.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0.1,0,1.7,1.1), null);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgFIAJADIgEAGg");
	this.shape.setTransform(0.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0.1,0,1.7,1.1), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969696").s().p("AhCAeIAAg7ICFAAIAAA7g");
	this.shape.setTransform(6.7,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,13.5,6), null);


(lib.Path_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgHA0IAAhnIAPAAIAABng");
	this.shape.setTransform(0.8,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,1.5,10.4), null);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_3, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD63").s().p("AiRAaQg8gJgBgPQABgOA8gLQA9gLBUgBQBVAAA9AKQA8AJAAAPQABAOg9ALQg8AMhWAAIgHAAQhQAAg6gKg");
	this.shape.setTransform(20.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,41.3,7.2), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape.setTransform(0.7,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,1.5,10.4), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C39A6F").s().p("AgOA0IAAhnIAdAAIAABng");
	this.shape.setTransform(1.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,3,10.4), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgFIAJADIgDAGg");
	this.shape.setTransform(0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgFIAJADIgDAGg");
	this.shape.setTransform(0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969696").s().p("AhRAlIAAhJICjAAIAABJg");
	this.shape.setTransform(8.2,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,16.5,7.5), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C653C").s().p("AhKCOIB+kbIAXAAIg1Ebg");
	this.shape.setTransform(7.5,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,14.9,28.4), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764F2C").s().p("AgHABIAHgGIAJAEIgDAGg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,1.7,1.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhNELICDoWIAYAFIAAACIh3H3QgGAPgBAKg");
	this.shape.setTransform(7.8,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,15.6,53.6), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AC1DNIlrlvQgJgNgJgGIARgYIGAGJIgSASg");
	this.shape.setTransform(20.1,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,40.1,41.2), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AkKBFIACgBIHsiYQAQgDAJgFIAOAaIoNCfg");
	this.shape.setTransform(26.7,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,53.4,18.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AglF7IAAr1QAVAEAHgDIAvL0g");
	this.shape.setTransform(3.8,37.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,7.7,75.9), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AgjHPIAAuXIAIgBIAQgGIAvOeg");
	this.shape.setTransform(3.6,46.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,7.2,92.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969696").s().p("AhAALQAAgfAWgWQAXgWAfAAQAfAAAWAVIhsBsQgVgWAAggg");
	this.shape.setTransform(6.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0.1,13,13), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AguIjIAAxBQAWAAALgEIA8RFg");
	this.shape.setTransform(4.7,54.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,9.4,109.4), null);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(8,4.2,1,1,0,0,0,8,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:0.96},0).wait(1).to({scaleY:0.95},0).wait(1).to({scaleY:0.94},0).wait(1).to({scaleY:0.93},0).wait(1).to({scaleY:0.91},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.89},0).wait(1).to({scaleY:0.88},0).wait(1).to({scaleY:0.86},0).wait(1).to({scaleY:0.85},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.83},0).wait(1).to({scaleY:0.81},0).wait(1).to({scaleY:0.8},0).wait(1).to({scaleY:0.79},0).wait(1).to({scaleY:0.78},0).wait(1).to({scaleY:0.76},0).wait(1).to({scaleY:0.75},0).wait(1).to({scaleY:0.74},0).wait(1).to({scaleY:0.73},0).wait(1).to({scaleY:0.71},0).wait(1).to({y:4.3},0).wait(1).to({scaleY:0.73,y:4.2},0).wait(1).to({scaleY:0.74},0).wait(1).to({scaleY:0.75},0).wait(1).to({scaleY:0.76},0).wait(1).to({scaleY:0.78},0).wait(1).to({scaleY:0.79},0).wait(1).to({scaleY:0.8},0).wait(1).to({scaleY:0.81},0).wait(1).to({scaleY:0.83},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.85},0).wait(1).to({scaleY:0.86,y:4.3},0).wait(1).to({scaleY:0.88},0).wait(1).to({scaleY:0.89},0).wait(1).to({scaleY:0.9},0).wait(1).to({scaleY:0.91},0).wait(1).to({scaleY:0.93},0).wait(1).to({scaleY:0.94},0).wait(1).to({scaleY:0.95},0).wait(1).to({scaleY:0.96},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,8.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80291B").s().p("AAMANQgDAAgBgDQgEgLgEgBQgDgBgEAHQgDADgEgCQgDgCACgDQAIgMAIABQAKABAGARQABAEgEACg");
	this.shape.setTransform(4.8,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80291B").s().p("AANAKQgGgMgHgBQgDAAgFADIgEADQgDAEgEgDQgDgDADgCQAAgCAGgEQAIgGAGABQAMACAIAQQACAFgEABIgCABQgDAAgBgDg");
	this.shape_1.setTransform(10.4,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9B07C").s().p("Ag7CUIgCgFQgEAKgGgDQgGgCAGguIgJgBQgRgDgQgFQgqgMgWgWQgYgZgEgnQgEg0AZgjQAPgWAZgOQAzgcBRAIQBIAIAwAmQAuAmAMA7QAUAHAJANQAFgCAHAAIgKAGQAFALgFAMQgMAZgLgTQgKgSAUgLQgEgHgMgDQADArgcAaQgFA1gBABQgCACgEgEIgDgDQgBAKgHgCQgEAAgGgkIgOAFQgNAEgQACQggAEglgDIgjgEQgPArgCABIgBAAQgCAAgCgDgAC2AoQAAAHAEgGQAEgGgCgIQgGAHAAAGgAi2gQQgMAWAjAKQAkAJADgbQAEgbgcgDIgHgBQgWAAgJARgAhug+QAHAAAGAOQABACADAAIACAAQAEgCgCgEQgIgSgMgBQgHgBgIAFQgGAFAAABQgDAEADACQAEAEADgEIAEgEQAEgEAEAAIABABgAgghqQghACgGAQQgDAJAKAMQALANAKACQALACAVgWQAVgVgGgGQgGgHgWAAIgIAAgAimhIQAEABAEAMQABADADAAIACAAQAEgCgBgEQgGgSgKgBQgJgBgIAMQgCAEADACQAEACADgDQAEgHAEAAIAAAAg");
	this.shape_2.setTransform(21.5,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F35234").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(7.5,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F35234").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(5,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8925C").s().p("AgaABQgJgLAEgEQAFgFAXgBQAXgBAOAIQgZANgPAWQgMgKgIgLg");
	this.shape_5.setTransform(3.7,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8925C").s().p("AgIAXQgEgBgDgsQAPAEAQADQgFAjgDACQgBABgEgEIgDgEQgBAIgEAAIgDAAg");
	this.shape_6.setTransform(11.8,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8925C").s().p("AgFAPQgEgBgEgWQAPgBAMgFQgCAZgCAAQgCACgDgEIgEgDQgBAJgEAAIgBAAg");
	this.shape_7.setTransform(29.7,26.9);

	this.instance = new lib.Path_5_1();
	this.instance.parent = this;
	this.instance.setTransform(20.7,28.1,1,1,0,0,0,20.7,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56F4C").s().p("AgGAYQgjgKAMgXQALgSAaACQAcAEgEAaQgCAVgVAAQgHAAgIgCgAAFgDQgDADAAADQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgDgDgDQgDgDgEAAQgEAAgDADgAgSgHQgDAEAAADQAAADADAEQADACAEAAQAEAAADgCQADgEAAgDQAAgDgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_8.setTransform(6.2,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8925C").s().p("AgJAbQgKgCgLgNQgKgMADgIQAGgQAggCQAdgBAIAIQAGAGgWAUQgTAUgKAAIgCAAg");
	this.shape_9.setTransform(18.1,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,42.2,31.7), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(57.1,58.3,1,1,0,0,0,6.5,6.5);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969696").s().p("Ag1A3QgXgXAAggQAAgfAXgXQAWgWAfAAQAgAAAXAWQAWAXAAAfQAAAggWAXQgXAWggAAQgfAAgWgWg");
	this.shape.setTransform(58.3,59.6);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.3,26.8,1,1,0,0,0,7.8,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AhNELICDoWIAYAGIgiGpQg0ARgaAtQgMAXgCATg");
	this.shape_1.setTransform(65.3,26.8);

	this.instance_2 = new lib.Path_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(83.4,81.6,1,1,0,0,0,20.1,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AiggvQANg2gZguIgcgiIARgYIGAGJIgSASg");
	this.shape_2.setTransform(83.4,81.6);

	this.instance_3 = new lib.Path();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.7,71.2,1,1,0,0,0,26.7,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AkKBTIF+i8QAqAlA0gBQAagBARgIIAOAZIoNCfg");
	this.shape_3.setTransform(26.7,69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance_3},{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,103.4,102.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(58.7,60.1,1,1,-0.5,0,0,58.7,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.7,regY:51.1,rotation:-15.7,x:49.6,y:53.5},0).wait(1).to({rotation:-30.9,x:48.3,y:56.1},0).wait(1).to({rotation:-46.1,x:47.6,y:59},0).wait(1).to({rotation:-61.2,x:47.8,y:62},0).wait(1).to({rotation:-76.4,x:48.6,y:64.8},0).wait(1).to({rotation:-91.6,x:50.2,y:67.2},0).wait(1).to({rotation:-106.8,x:52.3,y:69.3},0).wait(1).to({rotation:-122,x:55,y:70.6},0).wait(1).to({rotation:-137.2,x:57.9,y:71.2},0).wait(1).to({rotation:-152.3,x:60.8,y:71},0).wait(1).to({rotation:-167.5,x:63.7,y:70.1},0).wait(1).to({rotation:-182.7,x:66.1,y:68.4},0).wait(1).to({rotation:-197.9,x:68.1,y:66.2},0).wait(1).to({rotation:-213.1,x:69.4,y:63.5},0).wait(1).to({rotation:-228.3,x:69.9,y:60.7},0).wait(1).to({rotation:-243.5,x:69.7,y:57.7},0).wait(1).to({rotation:-258.6,x:68.7,y:54.9},0).wait(1).to({rotation:-273.8,x:67,y:52.5},0).wait(1).to({rotation:-289,x:64.7,y:50.6},0).wait(1).to({rotation:-304.2,x:62,y:49.3},0).wait(1).to({rotation:-319.4,x:59.1,y:48.9},0).wait(1).to({rotation:-334.6,x:56.2,y:49.2},0).wait(1).to({rotation:-349.7,x:53.4,y:50.2},0).wait(1).to({rotation:-364.9,x:51,y:51.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.8,102.3);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(67.3,67.3,1,1,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:1.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:2.6,y:67.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:4},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:5.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:6.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:7.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:9.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:10.6,y:67.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:11.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:13.2,y:67.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:14.6,y:67.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:15.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:17.2,y:67.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:18.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:19.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:21.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:22.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:23.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:25.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:26.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:27.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:29.1,y:67.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:30.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:31.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:33.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:34.4,y:67.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:35.7,y:67.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:37.1,y:67.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:38.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:39.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:41},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:42.4,y:67.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:43.7,y:67.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:45},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:46.3,y:67.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:47.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:49},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:50.3,y:67.4},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:51.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:52.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:54.3,y:67.3},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:55.6,y:67.4},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:56.9},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:58.2,y:67.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:59.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:60.9},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:62.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:63.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:64.9,y:67.4},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:66.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:67.5},0).wait(1).to({scaleX:1.28,scaleY:1.28,rotation:68.8},0).wait(1).to({scaleX:1.28,scaleY:1.28,rotation:70.1},0).wait(1).to({scaleX:1.29,scaleY:1.29,rotation:71.5},0).wait(1).to({scaleX:1.29,scaleY:1.29,rotation:72.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:74.1,y:67.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:75.4,y:67.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:76.8,y:67.3},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:78.1},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:79.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:80.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:82.1,y:67.4},0).wait(1).to({scaleX:1.34,scaleY:1.34,rotation:83.4},0).wait(1).to({scaleX:1.34,scaleY:1.34,rotation:84.7,y:67.3},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:86},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:87.4},0).wait(1).to({scaleX:1.36,scaleY:1.36,rotation:88.7},0).wait(1).to({scaleX:1.36,scaleY:1.36,rotation:90,y:67.4},0).wait(1).to({regX:67.2,x:67.2},0).wait(1).to({regX:67.3,scaleX:1.36,scaleY:1.36,rotation:88.7,y:67.6},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:87.4},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:86},0).wait(1).to({scaleX:1.34,scaleY:1.34,rotation:84.7,y:67.5},0).wait(1).to({scaleX:1.34,scaleY:1.34,rotation:83.4,y:67.6},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:82.1},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:80.7},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:79.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:78.1},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:76.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:75.4},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:74.1},0).wait(1).to({scaleX:1.29,scaleY:1.29,rotation:72.8},0).wait(1).to({scaleX:1.29,scaleY:1.29,rotation:71.5},0).wait(1).to({scaleX:1.28,scaleY:1.28,rotation:70.1},0).wait(1).to({scaleX:1.28,scaleY:1.28,rotation:68.8,x:67.3},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:67.5},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:66.2,x:67.2},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:64.9,x:67.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:63.5,y:67.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:62.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:60.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:59.6,y:67.6},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:58.2,y:67.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:56.9,y:67.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:55.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:54.3,y:67.5},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:52.9,y:67.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:51.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:50.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:49,y:67.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:47.6},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:46.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:45,y:67.6},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:43.7,y:67.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:42.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:41,x:67.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:39.7},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:38.4,x:67.3,y:67.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:37.1,y:67.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:35.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:34.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:33.1,x:67.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:31.8,x:67.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:30.4,x:67.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:29.1,x:67.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:27.8,x:67.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:26.5,x:67.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:25.1,x:67.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:23.8,x:67.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:22.5,x:67.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:21.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:19.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:18.5,x:67.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:17.2,x:67.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:15.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:14.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:13.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:11.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:10.6,y:67.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:9.3,y:67.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:7.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:6.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:5.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:4,y:67.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:2.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.7,134.7);


(lib.pig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(21.1,15.8,1,1,0,0,0,21.1,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.99,skewX:0.1,y:15.9},0).wait(1).to({scaleY:0.99,skewX:0.3,y:16},0).wait(1).to({scaleY:0.98,skewX:0.4,y:16.1},0).wait(1).to({scaleY:0.98,skewX:0.6,y:16.2},0).wait(1).to({scaleY:0.97,skewX:0.7,x:21,y:16.3},0).wait(1).to({scaleY:0.96,skewX:0.9,y:16.4},0).wait(1).to({scaleY:0.96,skewX:1,y:16.5},0).wait(1).to({scaleY:0.95,skewX:1.2,y:16.6},0).wait(1).to({scaleY:0.94,skewX:1.3,y:16.7},0).wait(1).to({scaleY:0.94,skewX:1.5,y:16.8},0).wait(1).to({scaleY:0.93,skewX:1.6,y:16.9},0).wait(1).to({scaleY:0.93,skewX:1.8,y:17},0).wait(1).to({scaleY:0.92,skewX:1.9,x:20.9,y:17.1},0).wait(1).to({scaleY:0.91,skewX:2.1,x:21,y:17.2},0).wait(1).to({scaleY:0.91,skewX:2.2,x:20.9,y:17.3},0).wait(1).to({scaleY:0.9,skewX:2.4,y:17.4},0).wait(1).to({scaleY:0.89,skewX:2.5,y:17.5},0).wait(1).to({scaleY:0.89,skewX:2.7,y:17.6},0).wait(1).to({scaleY:0.88,skewX:2.8,y:17.7},0).wait(1).to({scaleY:0.88,skewX:2.9,y:17.8},0).wait(1).to({scaleY:0.87,skewX:3.1,x:20.8,y:17.9},0).wait(1).to({scaleY:0.86,skewX:3.2,x:20.9,y:18},0).wait(1).to({scaleY:0.86,skewX:3.4,x:20.8,y:18.1},0).wait(1).to({scaleY:0.85,skewX:3.5,y:18.2},0).wait(1).to({scaleY:0.84,skewX:3.7,y:18.3},0).wait(1).to({scaleY:0.84,skewX:3.8,y:18.4},0).wait(1).to({scaleY:0.83,skewX:4,y:18.5},0).wait(1).to({scaleY:0.83,skewX:4.1,y:18.6},0).wait(1).to({scaleY:0.82,skewX:4.3,y:18.7},0).wait(1).to({scaleY:0.81,skewX:4.4,x:20.7,y:18.8},0).wait(1).to({scaleY:0.81,skewX:4.6,y:18.9},0).wait(1).to({scaleY:0.8,skewX:4.7,y:19},0).wait(1).to({scaleY:0.79,skewX:4.9,y:19.1},0).wait(1).to({scaleY:0.79,skewX:5,y:19.2},0).wait(1).to({scaleY:0.78,skewX:5.2,y:19.3},0).wait(1).to({scaleY:0.78,skewX:5.3,y:19.4},0).wait(1).to({scaleY:0.77,skewX:5.5,y:19.5},0).wait(1).to({scaleY:0.76,skewX:5.6,x:20.6,y:19.7},0).wait(1).to({scaleY:0.76,skewX:5.7,y:19.8},0).wait(1).to({scaleY:0.75,skewX:5.9,y:19.9},0).wait(1).to({scaleY:0.74,skewX:6,y:20},0).wait(1).to({scaleY:0.74,skewX:6.2,y:20.1},0).wait(1).to({scaleY:0.73,skewX:6.3,y:20.2},0).wait(1).to({scaleY:0.73,skewX:6.5,y:20.3},0).wait(1).to({scaleY:0.72,skewX:6.6,y:20.4},0).wait(1).to({scaleY:0.71,skewX:6.8,x:20.5,y:20.5},0).wait(1).to({regX:20.9,scaleY:0.71,x:20.6},0).wait(1).to({regX:21.1,scaleY:0.75,skewX:5.9,x:20.8,y:19.9},0).wait(1).to({scaleY:0.78,skewX:5.1,x:20.9,y:19.3},0).wait(1).to({scaleY:0.82,skewX:4.2,y:18.8},0).wait(1).to({scaleY:0.86,skewX:3.4,x:21,y:18.2},0).wait(1).to({scaleY:0.89,skewX:2.5,y:17.6},0).wait(1).to({scaleY:0.93,skewX:1.7,x:21.1,y:17},0).wait(1).to({scaleY:0.96,skewX:0.8,x:21.2,y:16.4},0).wait(1).to({scaleY:1,skewX:0,x:21.3,y:15.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.2,31.7);


(lib.lava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(95.5,96.4,1,1,0,0,0,95.5,96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1,y:96.8},0).wait(1).to({scaleY:0.99,y:97.2},0).wait(1).to({scaleY:0.99,y:97.7},0).wait(1).to({scaleY:0.98,y:98.1},0).wait(1).to({scaleY:0.98,y:98.5},0).wait(1).to({scaleY:0.97,y:98.9},0).wait(1).to({scaleY:0.97,y:99.3},0).wait(1).to({scaleY:0.97,y:99.8},0).wait(1).to({scaleY:0.96,y:100.2},0).wait(1).to({scaleY:0.96,y:100.6},0).wait(1).to({scaleY:0.95,y:101},0).wait(1).to({scaleY:0.95,y:101.4},0).wait(1).to({scaleY:0.94,y:101.9},0).wait(1).to({scaleY:0.94,y:102.3},0).wait(1).to({scaleY:0.94,y:102.7},0).wait(1).to({scaleY:0.93,y:103.1},0).wait(1).to({scaleY:0.93,y:103.6},0).wait(1).to({scaleY:0.92,y:104},0).wait(1).to({scaleY:0.92,y:104.4},0).wait(1).to({scaleY:0.91,y:104.8},0).wait(1).to({scaleY:0.91,y:105.2},0).wait(1).to({scaleY:0.9,y:105.7},0).wait(1).to({scaleY:0.9,y:106.1},0).wait(1).to({scaleY:0.9,y:106.5},0).wait(1).to({scaleY:0.89,y:106.9},0).wait(1).to({scaleY:0.89,y:107.3},0).wait(1).to({scaleY:0.88,y:107.8},0).wait(1).to({scaleY:0.88,y:108.2},0).wait(1).to({scaleY:0.87,y:108.6},0).wait(2).to({scaleY:0.88,y:108.2},0).wait(1).to({scaleY:0.88,y:107.8},0).wait(1).to({scaleY:0.89,y:107.3},0).wait(1).to({scaleY:0.89,y:106.9},0).wait(1).to({scaleY:0.9,y:106.5},0).wait(1).to({scaleY:0.9,y:106.1},0).wait(1).to({scaleY:0.9,y:105.7},0).wait(1).to({scaleY:0.91,y:105.2},0).wait(1).to({scaleY:0.91,y:104.8},0).wait(1).to({scaleY:0.92,y:104.4},0).wait(1).to({scaleY:0.92,y:104},0).wait(1).to({scaleY:0.93,y:103.6},0).wait(1).to({scaleY:0.93,y:103.1},0).wait(1).to({scaleY:0.94,y:102.7},0).wait(1).to({scaleY:0.94,y:102.3},0).wait(1).to({scaleY:0.94,y:101.9},0).wait(1).to({scaleY:0.95,y:101.4},0).wait(1).to({scaleY:0.95,y:101},0).wait(1).to({scaleY:0.96,y:100.6},0).wait(1).to({scaleY:0.96,y:100.2},0).wait(1).to({scaleY:0.97,y:99.8},0).wait(1).to({scaleY:0.97,y:99.3},0).wait(1).to({scaleY:0.97,y:98.9},0).wait(1).to({scaleY:0.98,y:98.5},0).wait(1).to({scaleY:0.98,y:98.1},0).wait(1).to({scaleY:0.99,y:97.7},0).wait(1).to({scaleY:0.99,y:97.2},0).wait(1).to({scaleY:1,y:96.8},0).wait(1).to({scaleY:1,y:96.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,192.9);


(lib.lamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(54.2,53.9,1,1,0,0,0,54.2,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-1.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-1.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-1.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-2},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-2.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-2.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-2.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-2.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-3},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-3.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-3.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-3.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-3.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-3.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-4.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-4.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-4.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-4.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-4.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-5.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-5.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-5.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-5.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-6.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-6.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-6.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-6.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-6.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-7.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-7.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-7.5},0).wait(1).to({regX:54.1,regY:53.8,rotation:-7.3},0).wait(1).to({regX:54.2,regY:53.9,scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-7.1,y:54},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-6.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-6.7,y:53.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-6.5,x:54.3,y:54},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-6.3,x:54.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-6.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-5.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-5.7,x:54.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-5.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-5.3,x:54.2,y:53.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-5.1,y:54},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-4.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-4.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-4.5,y:53.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-4.3,y:54},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-4.1,x:54.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-3.9,x:54.2,y:53.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-3.7,y:54},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-3.5,x:54.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-3.3,x:54.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-3.2,x:54.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-3,x:54.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-2.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-2.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-2.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-2.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-2,x:54.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-1.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-1.6,x:54.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-1.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-1.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-1,x:54.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-0.8,x:54.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-0.6,x:54.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-0.4,x:54.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.2,x:54.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:54.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.4,107.9);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.3,88.6);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-659,88.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},89).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-659},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-1,165.5,179.6);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-366.8,55.3,1,1,0,0,0,113.3,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-351.8},0).wait(1).to({x:-336.9},0).wait(1).to({x:-322.1},0).wait(1).to({x:-307.1},0).wait(1).to({x:-292.2},0).wait(1).to({x:-277.3},0).wait(1).to({x:-262.4},0).wait(1).to({x:-247.5},0).wait(1).to({x:-232.6},0).wait(1).to({x:-217.7},0).wait(1).to({x:-202.8},0).wait(1).to({x:-187.9},0).wait(1).to({x:-173},0).wait(1).to({x:-158.1},0).wait(1).to({x:-143.2},0).wait(1).to({x:-128.3},0).wait(1).to({x:-113.4},0).wait(1).to({x:-98.5},0).wait(1).to({x:-83.6},0).wait(1).to({x:-68.7},0).wait(1).to({x:-53.8},0).wait(1).to({x:-38.9},0).wait(1).to({x:-24},0).wait(1).to({x:-9.1},0).wait(1).to({x:5.8},0).wait(1).to({x:20.7},0).wait(1).to({x:35.6},0).wait(1).to({x:50.5},0).wait(1).to({x:65.4},0).wait(1).to({x:80.3},0).wait(1).to({x:95.2},0).wait(1).to({x:110.1},0).wait(1).to({x:125},0).wait(1).to({x:139.9},0).wait(1).to({x:154.8},0).wait(1).to({x:169.7},0).wait(1).to({x:184.6},0).wait(1).to({x:199.5},0).wait(1).to({x:214.4},0).wait(1).to({x:229.3},0).wait(1).to({x:244.2},0).wait(1).to({x:259.1},0).wait(1).to({x:274},0).wait(1).to({x:288.9},0).wait(1).to({x:303.8},0).wait(1).to({x:318.7},0).wait(1).to({x:333.6},0).wait(1).to({x:348.5},0).wait(1).to({x:363.4},0).wait(1).to({x:378.4},0).wait(1).to({x:393.3},0).wait(1).to({x:408.2},0).wait(1).to({x:423.1},0).wait(1).to({x:437.9},0).wait(1).to({x:452.9},0).wait(1).to({x:467.8},0).wait(1).to({x:482.7},0).wait(1).to({x:497.6},0).wait(1).to({x:512.5},0).wait(1).to({x:527.4},0).wait(1).to({x:542.3},0).wait(1).to({x:557.2},0).wait(1).to({x:572.1},0).wait(1).to({x:587},0).wait(1).to({x:601.9},0).wait(1).to({x:616.8},0).wait(1).to({x:631.7},0).wait(1).to({x:646.6},0).wait(1).to({x:661.5},0).wait(1).to({x:676.4},0).wait(1).to({x:691.3},0).wait(1).to({x:706.2},0).wait(1).to({x:721.1},0).wait(1).to({x:736},0).wait(1).to({x:750.9},0).wait(1).to({x:765.8},0).wait(1).to({x:780.7},0).wait(1).to({x:795.6},0).wait(1).to({x:810.5},0).wait(1).to({x:825.4},0).wait(1).to({x:840.3},0).wait(1).to({x:855.2},0).wait(1).to({x:870.2},0).wait(1).to({x:885.1},0).wait(1).to({x:899.9},0).wait(1).to({x:914.9},0).wait(1).to({x:929.8},0).wait(1).to({x:944.7},0).wait(1).to({x:959.6},0).wait(1).to({x:974.5},0).wait(1).to({x:989.4},0).wait(1).to({x:1004.3},0).wait(1).to({x:1019.2},0).wait(1).to({x:1034.1},0).wait(1).to({x:1049},0).wait(1).to({x:1063.9},0).wait(1).to({x:1078.8},0).wait(1).to({x:1093.7},0).wait(1).to({x:1108.6},0).wait(1).to({x:1123.5},0).wait(1).to({x:1138.4},0).wait(1).to({x:1153.3},0).wait(1).to({x:1168.2},0).wait(1).to({x:1183.1},0).wait(1).to({x:1198},0).wait(1).to({x:1212.9},0).wait(1).to({x:1227.8},0).wait(1).to({x:1242.7},0).wait(1).to({x:1257.6},0).wait(1).to({x:1272.5},0).wait(1).to({x:1287.4},0).wait(1).to({x:1302.3},0).wait(1).to({x:1317.2},0).wait(1).to({x:1332.1},0).wait(1).to({x:1347},0).wait(1).to({x:1362},0).wait(1).to({x:1376.9},0).wait(1).to({x:1391.8},0).wait(1).to({x:1406.6},0).wait(1).to({x:1421.6},0).wait(1).to({x:1436.5},0).wait(1).to({x:1451.4},0).wait(1).to({x:1466.3},0).wait(1).to({x:1481.2},0).wait(1).to({x:1496.1},0).wait(1).to({x:1511},0).wait(1).to({x:1525.9},0).wait(1).to({x:1540.8},0).wait(1).to({x:1555.7},0).wait(1).to({x:1570.6},0).wait(1).to({x:1585.5},0).wait(1).to({x:1600.4},0).wait(1).to({x:1615.3},0).wait(1).to({x:1630.2},0).wait(1).to({x:1645.1},0).wait(1).to({x:1660},0).wait(1).to({x:1674.9},0).wait(1).to({x:1689.8},0).wait(1).to({x:1704.7},0).wait(1).to({x:1719.6},0).wait(1).to({x:1734.5},0).wait(1).to({x:1749.4},0).wait(1).to({x:1764.3},0).wait(1).to({x:1779.2},0).wait(1).to({x:1794.1},0).wait(1).to({x:1809},0).wait(1).to({x:1823.9},0).wait(1).to({x:1838.8},0).wait(1).to({x:1853.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480.1,0,226.6,110.6);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(79.8,38.9,1,1,0,0,0,79.8,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:78.6},0).wait(1).to({x:77.3},0).wait(1).to({x:76},0).wait(1).to({x:74.7},0).wait(1).to({x:73.4},0).wait(1).to({x:72.1},0).wait(1).to({x:70.8},0).wait(1).to({x:69.6},0).wait(1).to({x:68.3},0).wait(1).to({x:67},0).wait(1).to({x:65.7},0).wait(1).to({x:64.4},0).wait(1).to({x:63.1},0).wait(1).to({x:61.8},0).wait(1).to({x:60.5},0).wait(1).to({x:59.3},0).wait(1).to({x:58},0).wait(1).to({x:56.7},0).wait(1).to({x:55.4},0).wait(1).to({x:54.1},0).wait(1).to({x:52.8},0).wait(1).to({x:51.5},0).wait(1).to({x:50.2},0).wait(1).to({x:49},0).wait(1).to({x:47.7},0).wait(1).to({x:46.4},0).wait(1).to({x:45.1},0).wait(1).to({x:43.8},0).wait(1).to({x:42.5},0).wait(1).to({x:41.2},0).wait(1).to({x:39.9},0).wait(1).to({x:38.7},0).wait(1).to({x:37.4},0).wait(1).to({x:36.1},0).wait(1).to({x:34.8},0).wait(1).to({x:33.5},0).wait(1).to({x:32.2},0).wait(1).to({x:30.9},0).wait(1).to({x:29.6},0).wait(1).to({x:28.4},0).wait(1).to({x:27.1},0).wait(1).to({x:25.8},0).wait(1).to({x:24.5},0).wait(1).to({x:23.2},0).wait(1).to({x:21.9},0).wait(1).to({x:20.6},0).wait(1).to({x:19.4},0).wait(1).to({x:18.1},0).wait(1).to({x:16.8},0).wait(1).to({x:15.5},0).wait(1).to({x:14.2},0).wait(1).to({x:12.9},0).wait(1).to({x:11.6},0).wait(1).to({x:10.3},0).wait(1).to({x:9.1},0).wait(1).to({x:7.8},0).wait(1).to({x:6.5},0).wait(1).to({x:5.2},0).wait(1).to({x:3.9},0).wait(1).to({x:2.6},0).wait(1).to({x:1.3},0).wait(1).to({x:0},0).wait(1).to({x:-1.2},0).wait(1).to({x:-2.5},0).wait(1).to({x:-3.8},0).wait(1).to({x:-5.1},0).wait(1).to({x:-6.4},0).wait(1).to({x:-7.7},0).wait(1).to({x:-9},0).wait(1).to({x:-10.3},0).wait(1).to({x:-11.5},0).wait(1).to({x:-12.8},0).wait(1).to({x:-14.1},0).wait(1).to({x:-15.4},0).wait(1).to({x:-16.7},0).wait(1).to({x:-18},0).wait(1).to({x:-19.3},0).wait(1).to({x:-20.6},0).wait(2).to({x:-19.3},0).wait(1).to({x:-18},0).wait(1).to({x:-16.7},0).wait(1).to({x:-15.4},0).wait(1).to({x:-14.1},0).wait(1).to({x:-12.8},0).wait(1).to({x:-11.5},0).wait(1).to({x:-10.3},0).wait(1).to({x:-9},0).wait(1).to({x:-7.7},0).wait(1).to({x:-6.4},0).wait(1).to({x:-5.1},0).wait(1).to({x:-3.8},0).wait(1).to({x:-2.5},0).wait(1).to({x:-1.2},0).wait(1).to({x:0},0).wait(1).to({x:1.3},0).wait(1).to({x:2.6},0).wait(1).to({x:3.9},0).wait(1).to({x:5.2},0).wait(1).to({x:6.5},0).wait(1).to({x:7.8},0).wait(1).to({x:9.1},0).wait(1).to({x:10.3},0).wait(1).to({x:11.6},0).wait(1).to({x:12.9},0).wait(1).to({x:14.2},0).wait(1).to({x:15.5},0).wait(1).to({x:16.8},0).wait(1).to({x:18.1},0).wait(1).to({x:19.4},0).wait(1).to({x:20.6},0).wait(1).to({x:21.9},0).wait(1).to({x:23.2},0).wait(1).to({x:24.5},0).wait(1).to({x:25.8},0).wait(1).to({x:27.1},0).wait(1).to({x:28.4},0).wait(1).to({x:29.6},0).wait(1).to({x:30.9},0).wait(1).to({x:32.2},0).wait(1).to({x:33.5},0).wait(1).to({x:34.8},0).wait(1).to({x:36.1},0).wait(1).to({x:37.4},0).wait(1).to({x:38.7},0).wait(1).to({x:39.9},0).wait(1).to({x:41.2},0).wait(1).to({x:42.5},0).wait(1).to({x:43.8},0).wait(1).to({x:45.1},0).wait(1).to({x:46.4},0).wait(1).to({x:47.7},0).wait(1).to({x:49},0).wait(1).to({x:50.2},0).wait(1).to({x:51.5},0).wait(1).to({x:52.8},0).wait(1).to({x:54.1},0).wait(1).to({x:55.4},0).wait(1).to({x:56.7},0).wait(1).to({x:58},0).wait(1).to({x:59.3},0).wait(1).to({x:60.5},0).wait(1).to({x:61.8},0).wait(1).to({x:63.1},0).wait(1).to({x:64.4},0).wait(1).to({x:65.7},0).wait(1).to({x:67},0).wait(1).to({x:68.3},0).wait(1).to({x:69.6},0).wait(1).to({x:70.8},0).wait(1).to({x:72.1},0).wait(1).to({x:73.4},0).wait(1).to({x:74.7},0).wait(1).to({x:76},0).wait(1).to({x:77.3},0).wait(1).to({x:78.6},0).wait(1).to({x:79.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.6,77.8);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(73.4,36.1,1,1,0,0,0,73.4,36.1);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.6,36.1,1,1,0,0,0,73.4,36.1);
	this.instance_1._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnnFpQhmAAhIhJQhIhJAAhmQAAhmBIhIQBIhJBmAAQA/AAA3AfQAQhuBUhJQBVhKBwAAQBlAABRA+QBPA8AcBfQAngRArAAQBSAAA6A4QA7A4ADBQQAegNAjAAQBFAAAyAzQAxAyAABGQAABGgxAyQgyAzhFAAg");
	this.shape_1.setTransform(73.4,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:72.4},0).wait(1).to({x:71.3},0).wait(1).to({x:70.2},0).wait(1).to({x:69.1},0).wait(1).to({x:68},0).wait(1).to({x:66.9},0).wait(1).to({x:65.8},0).wait(1).to({x:64.7},0).wait(1).to({x:63.6},0).wait(1).to({x:62.5},0).wait(1).to({x:61.4},0).wait(1).to({x:60.4},0).wait(1).to({x:59.3},0).wait(1).to({x:58.2},0).wait(1).to({x:57.1},0).wait(1).to({x:56},0).wait(1).to({x:54.9},0).wait(1).to({x:53.8},0).wait(1).to({x:52.7},0).wait(1).to({x:51.6},0).wait(1).to({x:50.5},0).wait(1).to({x:49.4},0).wait(1).to({x:48.3},0).wait(1).to({x:47.3},0).wait(1).to({x:46.2},0).wait(1).to({x:45.1},0).wait(1).to({x:44},0).wait(1).to({x:42.9},0).wait(1).to({x:41.8},0).wait(1).to({x:40.7},0).wait(1).to({x:39.6},0).wait(1).to({x:38.5},0).wait(1).to({x:37.4},0).wait(1).to({x:36.3},0).wait(1).to({x:35.2},0).wait(1).to({x:34.2},0).wait(1).to({x:33.1},0).wait(1).to({x:32},0).wait(1).to({x:30.9},0).wait(1).to({x:29.8},0).wait(1).to({x:28.7},0).wait(1).to({x:27.6},0).wait(1).to({x:26.5},0).wait(1).to({x:25.4},0).wait(1).to({x:24.3},0).wait(1).to({x:23.2},0).wait(1).to({x:22.2},0).wait(1).to({x:21.1},0).wait(1).to({x:20},0).wait(1).to({x:18.9},0).wait(1).to({x:17.8},0).wait(1).to({x:16.7},0).wait(1).to({x:15.6},0).wait(1).to({x:14.5},0).wait(1).to({x:13.4},0).wait(1).to({x:12.3},0).wait(1).to({x:11.2},0).wait(1).to({x:10.1},0).wait(1).to({x:9.1},0).wait(1).to({x:8},0).wait(1).to({x:6.9},0).wait(1).to({x:5.8},0).wait(1).to({x:4.7},0).wait(1).to({x:3.6},0).wait(1).to({x:2.5},0).wait(1).to({x:1.4},0).wait(1).to({x:0.3},0).wait(1).to({x:-0.8},0).wait(1).to({x:-1.9},0).wait(1).to({x:-3},0).wait(1).to({x:-4},0).wait(1).to({x:-5.1},0).wait(1).to({x:-6.2},0).wait(1).to({x:-7.3},0).wait(1).to({x:-8.4},0).wait(1).to({x:-9.5},0).wait(1).to({x:-10.6},0).wait(1).to({x:-11.7},0).wait(1).to({x:-12.8},0).wait(1).to({x:-13.9},0).wait(1).to({x:-15},0).wait(1).to({x:-16.1},0).wait(1).to({x:-17.1},0).wait(1).to({x:-18.2},0).wait(1).to({x:-19.3},0).wait(1).to({x:-20.4},0).wait(1).to({x:-21.5},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({x:-17.5},0).wait(1).to({x:-14.3},0).wait(1).to({x:-11.2},0).wait(1).to({x:-8.1},0).wait(1).to({x:-4.9},0).wait(1).to({x:-1.8},0).wait(1).to({x:1.3},0).wait(1).to({x:4.5},0).wait(1).to({x:7.6},0).wait(1).to({x:10.7},0).wait(1).to({x:13.9},0).wait(1).to({x:17},0).wait(1).to({x:20.2},0).wait(1).to({x:23.3},0).wait(1).to({x:26.4},0).wait(1).to({x:29.6},0).wait(1).to({x:32.7},0).wait(1).to({x:35.8},0).wait(1).to({x:39},0).wait(1).to({x:42.1},0).wait(1).to({x:45.2},0).wait(1).to({x:48.4},0).wait(1).to({x:51.5},0).wait(1).to({x:54.6},0).wait(1).to({x:57.8},0).wait(1).to({x:60.9},0).wait(1).to({x:64},0).wait(1).to({x:67.2},0).wait(1).to({x:70.3},0).wait(1).to({x:73.4},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.8,72.2);


// stage content:
(lib._01_LetsPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(1061.6,550.7,0.592,0.592,0,0,0,80,88.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKC1QgeAAgVgJQgWgIgOgNQgOgNgIgQQgIgQgEgPQgEgPgBgMIgBgTIAAgEIAAjdIA1AAIAADdQAAAXAGAPQAGAPAJAKQAIAKALAGIAUAIIARADIAIAAQAVAAAOgGQAOgHAKgJQAJgKAFgLQAFgLADgKIADgRIAAgJIAAjdIA1AAIAAFkIg1AAIAAgyQgBAKgEAIQgEAHgGAFQgGAGgHAEQgHAEgIADQgSAGgXACg");
	this.shape.setTransform(954.1,559.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDAmQgJAAgEgDQgFgDgCgFQgDgGgBgHIAAgzIAyAAIAAAaICFAAIAAAxg");
	this.shape_1.setTransform(927.1,533.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABWCzIAAjcQABgVgGgOQgGgPgJgJQgJgKgLgFQgLgFgJgCQgKgDgHAAIgJAAQgPAAgMADQgNAEgJAGQgKAGgFAIQgGAHgFAIQgJATgBAXIAADcIg2AAIAAkQQALgUANgOQAOgOANgKQAOgJANgGQAOgFAMgDQALgDAIgBIANAAIADAAQAZAAAVAGQATAGAPAKQAPAJAJALQALAMAGAMQAHAMADAMIAGAWIACARIAAAIIAADcg");
	this.shape_2.setTransform(919.7,559.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWA4QgJAAgGgGQgHgHAAgJIAAgvIgVAAIAAgqIApAAQAKAAAGAGQADADACAEIABAIIAAAwIAaAAIAAhFIAqAAIAABZQAAAKgGAGQgGAGgJAAg");
	this.shape_3.setTransform(890.8,585.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1C1IgLgCQgTgEgPgLQgPgLgKgOQgKgPgFgSQgFgSAAgSIAAh0QADggAKgWQAKgXANgPQAOgPAPgIQAQgJAPgEQAOgEAMgBIARgCIAEAAIAEAAIARACQAMABAPAEQAOAEAQAJQAQAIANAPQAOAPAKAXQAKAWADAgIAADfIg1AAIAAjfQgCgXgKgSQgEgIgHgHQgGgHgKgGQgKgGgMgDQgNgEgRAAQgQAAgNAEQgNADgJAGQgKAGgGAHQgHAHgEAIQgLASgBAXIAAB0QABALAEAKQADAJAFAJQAFAKAJAFQALAIAKAAQAKAAAIgEQAHgFAFgEIAhAjQgIAIgKAGQgHAFgMAEQgMAFgPAAIgKgBg");
	this.shape_4.setTransform(884.4,559.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsDyQgTgGgPgJQgOgIgLgMQgKgLgHgMQgQgcgDgkIAAjpIA1AAIAADpQAAAOAEALQAEAKAHAIQAFAIAIAGQAIAFAIAEQATAIAXABQAYgBATgIQAIgEAIgFQAIgGAGgIQAGgIAEgKQADgLAAgOIAAluIA1AAIAAFuQgDAkgQAcQgGAMgLALQgKAMgPAIQgOAJgTAGQgUAFgZAAQgYAAgUgFg");
	this.shape_5.setTransform(850.2,553.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgEpIAAnqQAAgHgEgHIgHgNIgMgOIgqArIgzhFIAhgfIAWAhIAagmQAQACANAFQAMAGAKAHQAJAIAHAJQAGAJAEAJQAKAVABAbIAAHqg");
	this.shape_6.setTransform(821.5,547.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggCwQgSgFgNgJQgNgJgIgLQgJgLgFgMIAJgFIANgIIAMgHIAJgGQAGAPAKAIQALAIAKADQAMAFAMAAQATgCAPgJQAGgEAGgFQAGgFAEgIQAFgHADgKQADgJAAgNIAAh1QgCgTgHgQIgIgNQgFgGgHgFQgGgFgKgDQgKgEgMAAQgQAAgMAEQgMADgJAGQgJAHgHAKQgHALgFAPIg2AAQACgYAKgUQAIgUARgPQAPgOAYgIQAYgIAfAAIABAAIACAAIAOABQAKABAOAEQAMAEAPAIQAOAIALAOQALAOAJAVQAHAUAAAdIAAB2QgCAigNAaQgGAMgIALQgJALgMAIQgNAIgRAGQgRAFgXAAQgVAAgRgGg");
	this.shape_7.setTransform(802.4,559.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7A6IAAhBIgbAAIAAgyIA1AAQAHAAAEADQAFACAEAFQAEAFgBAIIAAArIBhAAIAAAxg");
	this.shape_8.setTransform(775.4,518.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABXCzIAAhpQAAgPgHgKQgHgLgLgHQgKgGgMgEQgMgEgLgCIgRgCIgGAAIgHAAIgNACQgJACgIAEQgKADgIAHQgJAGgGAKQgIAKgCAPIgBAJQAAALAFAIQAGAIAJAFQAIAFALAEQALADAKACIAUACIAMAAIAFAAIAAAyIg7AAQgSAAgRgIQgRgIgLgNQgNgOgHgSQgHgSAAgUQAAgUAJgUQAJgUAUgTQAMgLAOgHQANgIANgFQAMgEANgCQANgCALAAQASAAAQADQAQAEALAEQAOAFAMAGIAAgVQAAgQgEgNQgEgNgFgJQgHgJgIgHQgIgGgIgEQgSgKgYgBQgVAAgPAHQgPAIgJALQgKALgFANQgGAMgCAJIg4AAQACgeAKgVQAKgUANgOQANgOAQgIQAQgIAOgDQAOgEAMgBIAQgBIADAAQAhAAAYAJQAXAIAPAOQAPANAKARQAIAQAEAQQAFAPABAMIABASIAAADIAADYg");
	this.shape_9.setTransform(772.7,559.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAdCyIAAljIA2AAIAAFjgAhSCyIAAljIA2AAIAAFjg");
	this.shape_10.setTransform(745.4,559.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsCwQgTgFgPgJQgOgJgLgLQgKgMgHgMQgQgcgCgkIAAhHIBjAAIAAAxIguAAIAAAWQAAAPADALQAEALAGAIQAHAIAHAGQAIAGAIADQATAJAXABQAYgBATgJQAIgDAIgGQAIgGAGgIQAGgIAEgLQADgLAAgPIAAhrQAAgOgDgLQgEgKgGgIQgGgIgIgFQgIgGgIgDQgTgJgYgBIgDAAIgRACQgLACgMAGQgMAFgLALQgLAKgGASIg1AAIAGgVQAFgLAGgMQAHgMAKgLQALgMAPgIQAOgJATgGQATgFAYAAQAZAAAUAGQATAFAOAJQAPAJAKAMQALALAHAMQAQAcACAkIAABrQgCAkgQAcQgHAMgLAMQgKALgPAJQgOAJgTAFQgUAGgZAAQgZAAgTgGg");
	this.shape_11.setTransform(718.7,559.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhsArIAAgwIBZAAIAAglIAxAAIAAAlIAdAAIAAglIAyAAIAABVg");
	this.shape_12.setTransform(686.3,533.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAC1QgWgCgTgGIgPgHQgIgEgGgGQgGgFgEgHQgDgIgBgJIAAgBIAAABIAAAxIg1AAIAAlkIA1AAIAADdIABAJIADARQACAKAFALQAFALAKAKQAJAJAOAHQAOAGAVAAIAIAAIARgDQAKgDAKgFQALgGAJgKQAIgKAGgPQAGgPAAgXIAAjdIA1AAIAADdIAAAEIgBATQgBAMgEAPQgEAPgIAQQgIAQgOANQgOANgVAIQgVAJgfAAg");
	this.shape_13.setTransform(684.7,559.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag1C1IgLgCQgTgEgPgLQgPgLgKgOQgKgPgFgSQgFgSAAgSIAAh0QADggAKgWQAKgXANgPQAOgPAPgIQAQgJAPgEQAOgEAMgBIARgCIAEAAIAEAAIARACQAMABAPAEQAOAEAQAJQAQAIANAPQAOAPAKAXQAKAWADAgIAADfIg1AAIAAjfQgCgXgKgSQgEgIgHgHQgGgHgKgGQgKgGgMgDQgNgEgRAAQgQAAgNAEQgNADgJAGQgKAGgGAHQgHAHgEAIQgLASgBAXIAAB0QABALAEAKQADAJAFAJQAFAKAJAFQALAIAKAAQAKAAAIgEQAHgFAFgEIAhAjQgIAIgKAGQgHAFgMAEQgMAFgPAAIgKgBg");
	this.shape_14.setTransform(649.6,559.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDAmQgJAAgEgDQgFgDgCgFQgDgGgBgHIAAgzIAyAAIAAAaICFAAIAAAxg");
	this.shape_15.setTransform(622.8,533.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsDyQgTgGgPgJQgPgIgKgMQgKgLgHgMQgQgcgDgkIAAjpIA1AAIAADpQAAAOAFALQADAKAHAIQAFAIAIAGQAIAFAIAEQATAIAXABQAYgBATgIQAIgEAIgFQAHgGAHgIQAGgIAEgKQADgLAAgOIAAluIA1AAIAAFuQgDAkgQAcQgHAMgKALQgJAMgQAIQgOAJgTAGQgUAFgZAAQgYAAgUgFg");
	this.shape_16.setTransform(615.4,553.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgKC1QgeAAgVgJQgWgIgOgNQgOgNgIgQQgIgQgEgPQgEgPgBgMIgBgTIAAgEIAAjdIA1AAIAADdQAAAXAGAPQAGAPAJAKQAIAKALAGIAUAIIARADIAIAAQAVAAAOgGQAOgHAKgJQAJgKAFgLQAFgLADgKIADgRIAAgJIAAjdIA1AAIAAFkIg1AAIAAgyQgBAKgEAIQgEAHgGAFQgGAGgHAEQgHAEgIADQgSAGgXACg");
	this.shape_17.setTransform(954.1,559.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AhDAmQgJAAgEgDQgFgDgCgFQgDgGgBgHIAAgzIAyAAIAAAaICFAAIAAAxg");
	this.shape_18.setTransform(927.1,533.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("ABWCzIAAjcQABgVgGgOQgGgPgJgJQgJgKgLgFQgLgFgJgCQgKgDgHAAIgJAAQgPAAgMADQgNAEgJAGQgKAGgFAIQgGAHgFAIQgJATgBAXIAADcIg2AAIAAkQQALgUANgOQAOgOANgKQAOgJANgGQAOgFAMgDQALgDAIgBIANAAIADAAQAZAAAVAGQATAGAPAKQAPAJAJALQALAMAGAMQAHAMADAMIAGAWIACARIAAAIIAADcg");
	this.shape_19.setTransform(919.7,559.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgWA4QgJAAgGgGQgHgHAAgJIAAgvIgVAAIAAgqIApAAQAKAAAGAGQADADACAEIABAIIAAAwIAaAAIAAhFIAqAAIAABZQAAAKgGAGQgGAGgJAAg");
	this.shape_20.setTransform(890.8,585.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("Ag1C1IgLgCQgTgEgPgLQgPgLgKgOQgKgPgFgSQgFgSAAgSIAAh0QADggAKgWQAKgXANgPQAOgPAPgIQAQgJAPgEQAOgEAMgBIARgCIAEAAIAEAAIARACQAMABAPAEQAOAEAQAJQAQAIANAPQAOAPAKAXQAKAWADAgIAADfIg1AAIAAjfQgCgXgKgSQgEgIgHgHQgGgHgKgGQgKgGgMgDQgNgEgRAAQgQAAgNAEQgNADgJAGQgKAGgGAHQgHAHgEAIQgLASgBAXIAAB0QABALAEAKQADAJAFAJQAFAKAJAFQALAIAKAAQAKAAAIgEQAHgFAFgEIAhAjQgIAIgKAGQgHAFgMAEQgMAFgPAAIgKgBg");
	this.shape_21.setTransform(884.4,559.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgsDyQgTgGgPgJQgOgIgLgMQgKgLgHgMQgQgcgDgkIAAjpIA1AAIAADpQAAAOAEALQAEAKAHAIQAFAIAIAGQAIAFAIAEQATAIAXABQAYgBATgIQAIgEAIgFQAIgGAGgIQAGgIAEgKQADgLAAgOIAAluIA1AAIAAFuQgDAkgQAcQgGAMgLALQgKAMgPAIQgOAJgTAGQgUAFgZAAQgYAAgUgFg");
	this.shape_22.setTransform(850.2,553.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AAgEpIAAnqQAAgHgEgHIgHgNIgMgOIgqArIgzhFIAhgfIAWAhIAagmQAQACANAFQAMAGAKAHQAJAIAHAJQAGAJAEAJQAKAVABAbIAAHqg");
	this.shape_23.setTransform(821.5,547.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AggCwQgSgFgNgJQgNgJgIgLQgJgLgFgMIAJgFIANgIIAMgHIAJgGQAGAPAKAIQALAIAKADQAMAFAMAAQATgCAPgJQAGgEAGgFQAGgFAEgIQAFgHADgKQADgJAAgNIAAh1QgCgTgHgQIgIgNQgFgGgHgFQgGgFgKgDQgKgEgMAAQgQAAgMAEQgMADgJAGQgJAHgHAKQgHALgFAPIg2AAQACgYAKgUQAIgUARgPQAPgOAYgIQAYgIAfAAIABAAIACAAIAOABQAKABAOAEQAMAEAPAIQAOAIALAOQALAOAJAVQAHAUAAAdIAAB2QgCAigNAaQgGAMgIALQgJALgMAIQgNAIgRAGQgRAFgXAAQgVAAgRgGg");
	this.shape_24.setTransform(802.4,559.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("Ag7A6IAAhBIgbAAIAAgyIA1AAQAHAAAEADQAFACAEAFQAEAFgBAIIAAArIBhAAIAAAxg");
	this.shape_25.setTransform(775.4,518.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("ABXCzIAAhpQAAgPgHgKQgHgLgLgHQgKgGgMgEQgMgEgLgCIgRgCIgGAAIgHAAIgNACQgJACgIAEQgKADgIAHQgJAGgGAKQgIAKgCAPIgBAJQAAALAFAIQAGAIAJAFQAIAFALAEQALADAKACIAUACIAMAAIAFAAIAAAyIg7AAQgSAAgRgIQgRgIgLgNQgNgOgHgSQgHgSAAgUQAAgUAJgUQAJgUAUgTQAMgLAOgHQANgIANgFQAMgEANgCQANgCALAAQASAAAQADQAQAEALAEQAOAFAMAGIAAgVQAAgQgEgNQgEgNgFgJQgHgJgIgHQgIgGgIgEQgSgKgYgBQgVAAgPAHQgPAIgJALQgKALgFANQgGAMgCAJIg4AAQACgeAKgVQAKgUANgOQANgOAQgIQAQgIAOgDQAOgEAMgBIAQgBIADAAQAhAAAYAJQAXAIAPAOQAPANAKARQAIAQAEAQQAFAPABAMIABASIAAADIAADYg");
	this.shape_26.setTransform(772.7,559.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AAdCyIAAljIA2AAIAAFjgAhSCyIAAljIA2AAIAAFjg");
	this.shape_27.setTransform(745.4,559.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgsCwQgTgFgPgJQgOgJgLgLQgKgMgHgMQgQgcgCgkIAAhHIBjAAIAAAxIguAAIAAAWQAAAPADALQAEALAGAIQAHAIAHAGQAIAGAIADQATAJAXABQAYgBATgJQAIgDAIgGQAIgGAGgIQAGgIAEgLQADgLAAgPIAAhrQAAgOgDgLQgEgKgGgIQgGgIgIgFQgIgGgIgDQgTgJgYgBIgDAAIgRACQgLACgMAGQgMAFgLALQgLAKgGASIg1AAIAGgVQAFgLAGgMQAHgMAKgLQALgMAPgIQAOgJATgGQATgFAYAAQAZAAAUAGQATAFAOAJQAPAJAKAMQALALAHAMQAQAcACAkIAABrQgCAkgQAcQgHAMgLAMQgKALgPAJQgOAJgTAFQgUAGgZAAQgZAAgTgGg");
	this.shape_28.setTransform(718.7,559.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AhsArIAAgwIBZAAIAAglIAxAAIAAAlIAdAAIAAglIAyAAIAABVg");
	this.shape_29.setTransform(686.3,533.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AAAC1QgWgCgTgGIgPgHQgIgEgGgGQgGgFgEgHQgDgIgBgJIAAgBIAAABIAAAxIg1AAIAAlkIA1AAIAADdIABAJIADARQACAKAFALQAFALAKAKQAJAJAOAHQAOAGAVAAIAIAAIARgDQAKgDAKgFQALgGAJgKQAIgKAGgPQAGgPAAgXIAAjdIA1AAIAADdIAAAEIgBATQgBAMgEAPQgEAPgIAQQgIAQgOANQgOANgVAIQgVAJgfAAg");
	this.shape_30.setTransform(684.7,559.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("Ag1C1IgLgCQgTgEgPgLQgPgLgKgOQgKgPgFgSQgFgSAAgSIAAh0QADggAKgWQAKgXANgPQAOgPAPgIQAQgJAPgEQAOgEAMgBIARgCIAEAAIAEAAIARACQAMABAPAEQAOAEAQAJQAQAIANAPQAOAPAKAXQAKAWADAgIAADfIg1AAIAAjfQgCgXgKgSQgEgIgHgHQgGgHgKgGQgKgGgMgDQgNgEgRAAQgQAAgNAEQgNADgJAGQgKAGgGAHQgHAHgEAIQgLASgBAXIAAB0QABALAEAKQADAJAFAJQAFAKAJAFQALAIAKAAQAKAAAIgEQAHgFAFgEIAhAjQgIAIgKAGQgHAFgMAEQgMAFgPAAIgKgBg");
	this.shape_31.setTransform(649.6,559.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AhDAmQgJAAgEgDQgFgDgCgFQgDgGgBgHIAAgzIAyAAIAAAaICFAAIAAAxg");
	this.shape_32.setTransform(622.8,533.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgsDyQgTgGgPgJQgPgIgKgMQgKgLgHgMQgQgcgDgkIAAjpIA1AAIAADpQAAAOAFALQADAKAHAIQAFAIAIAGQAIAFAIAEQATAIAXABQAYgBATgIQAIgEAIgFQAHgGAHgIQAGgIAEgKQADgLAAgOIAAluIA1AAIAAFuQgDAkgQAcQgHAMgKALQgJAMgQAIQgOAJgTAGQgUAFgZAAQgYAAgUgFg");
	this.shape_33.setTransform(615.4,553.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8FC44B").s().p("AgiAQQgPgQAAgTIAAgKIBjAAIAAAKQAAATgOAQQgPAOgUAAQgUAAgPgOg");
	this.shape_34.setTransform(691.4,506.5,2.811,2.811);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#23ACE1").s().p("AgjAQQgPgQAAgTIAAgKIBlAAIAAAKQAAATgPAQQgPAOgVAAQgUAAgPgOg");
	this.shape_35.setTransform(647.5,506.5,2.811,2.811);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F1512B").s().p("AgjAQQgPgQAAgTIAAgKIBlAAIAAAKQAAATgPAQQgPAOgVAAQgUAAgPgOg");
	this.shape_36.setTransform(600.1,506.5,2.811,2.811);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0033").s().p("AnNHNQi/i/AAkOQAAkNC/i/QC/i/EOAAQEOAADAC/QC/C/AAENQAAEOi/C/QjAC/kOAAQkOAAi/i/g");
	this.shape_37.setTransform(1064.6,550.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("ALvDzQg1gagmguI5IAAQhNAAg2gyQg4gzAAhKIAAAAQAAhLA4g2QA3g3BMAAIZVAAQAlgmAxgVQAzgVA4AAQBwAABPBPQBPBPAABuQAABwhPBOQhPBPhwAAQg9AAg2gag");
	this.shape_38.setTransform(820.8,551.2,2.811,2.811);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#595A5C").s().p("ALpD4Qg1gYglgsI5IAAQhLAAgzg5Qgzg4AAhMQAAhLAzg1QAyg0BMAAIZVAAQAlgnAxgUQAzgXA3AAQBwABBQBPQBPBQAABvQAABwhPBQQhQBQhwAAQg+AAg1gYg");
	this.shape_39.setTransform(825.1,562.7,2.811,2.811);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// ?
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C0212F").s().p("Aj7M2IAAkwIE+AAIAAEwgAj7FtIAAkBQAAhWA8hFQA1g+BLg8QBJg6A3g2QA7g5AAhHQAAhDgvggQgwgehVAAQhUAAhDAXQhMAagsAYQgOAJglAbQggAWgYANIAAkCQAwg0AvgfQAwgiBOgaQBMgbBvAAQBbAABUAeQBUAdA+A2QBAA2AmBIQAmBIAABTQAABRgbA8QgcA7goAxQgpAwgwAkQgyAmgnAhQgnAfgdAnQgbAkAAAsIAADvg");
	this.shape_40.setTransform(1562.8,267.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BBBDBF").s().p("Aj2M0IAAkxIEvAAIAAExgAj2FrIAAj9QAAhbA3hAQA6hDBEg2QBEg4A6g5QA6g4AAhHQAAhEgvgfQgxgfhUAAQhUAAhDAXQg9AVg2AeQg8AlgqAiIAAkDIAqgrQAYgYAYgQQAygiBJgaQBLgaBvAAQBcAABSAdQBSAdBAA2QBAA3AmBIQAmBIAABTQAABRgbA7QgcA8goAwQgmAtgzAoQg0AmgmAgQgsAlgZAhQgeAnAAApIAADrg");
	this.shape_41.setTransform(1569.9,272.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// text
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("Ag8D6QgWgIgRgLQgSgMgNgQIAzgyIAIAIQAGAGAJAFQAIAGANAFQAOAEARAAQALAAAHgDQAIgDAHgGQAHgGADgHQAEgFAEgJQAGgQACgXIAAknIhHAAIAAhHICTAAIAAFuQAAAjgKAbQgIAYgPASQgNAPgSALQgRAJgPAEQgRAFgJAAIgNABQggAAgYgIg");
	this.shape_42.setTransform(1489.8,421.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AA3EAIAAlqQgBgUgHgQQgCgHgFgHQgGgIgEgEQgGgFgJgDQgKgEgIABQgTgBgNAFQgRAGgFAEQgHAGgGAGIgHAIIg1g3QANgQASgMQARgKAXgJQAVgIAiAAIANAAQAMACAPAEQAOADASAJQARAKANAQQANAPALAbQAJAagBAlIAAFqg");
	this.shape_43.setTransform(1458,421.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AgjBIIAAiPIBGAAIAACPg");
	this.shape_44.setTransform(1431.8,382.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgvD8QgYgIgTgNQgUgNgKgQQgMgOgJgSIA/gkQAIAUAPALQAOAMAPAFQAQAFATACQAcgFATgLQAJgEAJgJQAIgHAHgLQAHgLAEgNQAEgPAAgRIAAinQgCgcgLgXQgEgIgHgKQgIgKgJgHQgIgFgPgGQgOgFgRAAQgXAAgSAFQgSAFgNAIQgNALgJAOQgKAQgHAVIhNAAQAEgjANgdQANgdAWgTQAXgUAigMQAggLAvAAIADAAIAVABQASACAPAFQARAFAWAMQAUALARAUQAPATAMAfQALAeAAApIAACnQgCAxgTAmQgJASgMAOQgLAQgTAMQgSAMgZAHQgYAIggAAQgggBgYgHg");
	this.shape_45.setTransform(1423.4,421.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("ABvEdIAAiWQAAgWgKgPQgKgPgPgKQgOgJgSgGQgUgGgMgCQgMgCgXgBIgJAAQgHAAgMADQgMADgNAFQgOAFgMAJQgMAKgKAOQgJAOgEAWIgBAGIAAAGQAAAQAIALQAIALANAIQAMAIAQAFQAQAFANACIA1AEIAABHIhUAAQgaAAgZgMQgWgLgTgUQgQgSgLgbQgKgZAAgeQAAgcANgcQAMgdAegbQAQgQAUgMQAQgJAVgHQAWgHAOgCQATgDAQAAQAaAAAXAFQAQADAXAHIAkAPIAAgcQAAgZgFgRQgFgRgJgOQgKgOgKgJQgLgJgMgGQgagNgigDQgeAAgWALQgVALgOAQQgOAQgHARQgIAQgEAOIhQAAQAEgqANgdQAOgeATgTQATgUAXgLQATgLAXgGQAUgFARgCIAXgBIAGAAQAkAAAkAKQASgDAUgJQASgIAOgMQAQgNAMgXIAyAyIAEADQAAADgEAFIgKANIgtApQgFAEgGACQAOASAKAWQAJAWAEARQAEAWACAMIABFPg");
	this.shape_46.setTransform(1381.5,418.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("Ag8D6QgXgIgPgLQgTgMgNgQIAzgyIAJAIQAFAGAIAFQAJAGAOAFQAMAEASAAQALAAAHgDQAJgDAGgGQAHgGADgHQAEgFAEgJQAGgTACgUIAAknIhHAAIAAhHICSAAIAAFuQAAAkgJAaQgIAZgPARQgMAPgTALQgRAJgOAEQgSAFgJAAIgNABQggAAgYgIg");
	this.shape_47.setTransform(1340,421.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AhAD8QgagIgWgNQgVgMgPgRQgOgRgJgRQgXgngEg0IAAhmICOAAIAABGIhDAAIAAAgQABAUAFARQAGARAIAKQAHAKAMALQANAIAKAEQAbANAiACQAjgCAagNQALgEAMgIQALgJAJgMQAIgKAGgRQAFgQAAgVIAAiZQAAgVgFgOQgFgPgJgMQgJgLgLgIQgMgIgLgEQgagMgjgCIgFAAQgIAAgQADQgQACgRAJQgSAIgPAOQgPAPgIAaIhMAAIAJgdQAFgRAKgRQALgSANgPQAQgRATgMQAXgNAagHQAbgHAjAAQAkAAAcAHQAcAJAUAMQAWAOAOAPQAPASAJAQQAXAnAEA0IAACZQgEA0gXAnQgJARgPARQgPAQgVANQgVANgbAIQgbAHglABQgkgBgcgHg");
	this.shape_48.setTransform(1304.3,421.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231F20").s().p("AgjBIIAAiPIBGAAIAACPg");
	this.shape_49.setTransform(1266.7,382.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("ABvEdIAAiWQAAgVgKgQQgKgPgPgKQgPgKgRgFQgUgGgMgCQgNgCgVgBIgKAAQgHAAgMADQgLADgOAFQgOAGgLAIQgNAKgJAOQgKAOgEAWIgBAGIAAAGQAAAPAIAMQAJAMAMAHQAMAIAQAFQAQAFAOACIAbADIAZABIAABHIhVAAQgZAAgZgMQgXgLgRgUQgSgUgKgZQgKgaAAgdQAAgbANgdQAMgdAegbQARgQATgMQAQgIAVgIQAXgIANgBQASgDASAAQAaAAAWAFQARADAWAHIAkAPIAAgcQAAgWgFgUQgFgRgJgOQgJgOgLgJQgLgJgLgGQgagNgjgDQgdAAgXALQgWAMgNAPQgPARgHAQQgGAQgFAOIhPAAQADgqANgdQAOgdATgUQAUgUAVgLQAVgLAWgGQAUgFARgCIAYgBIAFAAQAkAAAjAKQAUgDATgJQARgIAPgMQAQgNAMgXIAyAyIAEADQAAADgEAFIgKANIgtApQgGAEgFACQAPATAJAVQAJAVAEASQAFAUAAAOIACAVIAAE6g");
	this.shape_50.setTransform(1257.3,418.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AA3FZQgQgFgMgKQgMgKgHgPQgIgPAAgTQAAAUgHAOQgGAPgNAKQgNAKgPAFQgQAFgUAAQgZAAgVgGQgTgGgPgJQgRgKgJgLQgLgMgGgMQgQgcgFglIAAmAIBMAAIAAFjQAAAhAIASQAJASALAIQAKAJALABIARACIACAAQAVAAALgLQAMgLAFgNQAFgMACgPIABgVIAAlpIBDAAIABF+QACALAGAQQAHANALALQALALAUAAIAEAAIAQgCQALgBAKgJQAKgIAIgSQAIgSAAghIAAobIBMAAIAAI4QgEAkgQAdQgHAMgLAMQgKALgQAKQgPAJgUAGQgUAGgZAAQgUAAgQgFg");
	this.shape_51.setTransform(1205.7,412.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AAuGoIAAq9QAAgJgFgMQgGgLgGgGIgQgTIg8A8IhKhiIAwgsIAfAvIAlg2QAYACASAIQARAIAPALQANAMAJAMQAIAKAHAQQAOAeACAlIAAK9g");
	this.shape_52.setTransform(1160.8,404.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("Ag8D6QgXgIgQgLQgSgMgMgQIAygyIAIAIQAHAHAIAEQAJAHAMAEQANAEASAAQALAAAHgDQAHgDAIgGQAHgGAEgHIAGgOQAHgQABgXIAAknIhHAAIAAhHICUAAIAAFuQgBAkgIAaQgKAagOAQQgPAQgQAKQgRAJgPAEQgSAFgIAAIgNABQggAAgYgIg");
	this.shape_53.setTransform(1138.3,421.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#231F20").s().p("Ai/BZIAAhIIDOAAIgBgRQgBgQAIgSQAHgQAMgMQAMgMAQgHQAQgHATAAQASAAAQAHQAQAHANAMQAMANAGAPQAHASABAQQAAATgIAPQgGAQgNANQgNAMgPAHQgRAHgRAAgABRgUQgIAJAAALQAAANAIAHQAJAJANAAQANAAAHgJQAJgIAAgMQAAgKgJgKQgHgIgNAAQgNAAgJAIg");
	this.shape_54.setTransform(1099.8,380.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#231F20").s().p("AB7EAIAAk7QAAgegIgUQgJgVgMgNQgNgOgPgHQgPgHgOgEQgQgDgIgBIgNAAQgVgBgTAGQgSAFgNAJQgNAJgJAKQgJAMgFALQgNAagCAhIAAD0IAvAAIAABHIh7AAIAAmFQAQgdASgUQASgUAUgOQATgNAUgJQAUgHAQgEQAPgEANgBIATgBIAEAAQAlABAcAIQAdAJAUANQAVANAOAQQAOARAKASQAKATAFAQQAEANAEARIADAkIAAE7g");
	this.shape_55.setTransform(1100.5,421.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#231F20").s().p("AgPECQgrAAgfgMQgcgLgWgUQgUgSgLgXQgMgXgGgVQgGgXgBgRIgBlbIBLAAIAAE8QAAAfAJAXQAIAWANAOQALANAQAJQAOAGAPAFQALADANABIAMABQAdAAAVgJQAUgJAOgNQAMgNAIgSQAHgOAEgPQADgMABgOIABgLIAAk8IBMAAIAAH8IhMAAIAAhHQAAANgGALQgGAMgJAHQgIAJgLAFQgIAFgNAFQgbAJggACg");
	this.shape_56.setTransform(1050.7,421.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#231F20").s().p("AB7EAIAAiNQgGgQgIgMQgIgNgPgIQgNgIgPgFQgPgEgSgBIgZABQgMACgIAFIAAhOQAUgGAZABQA2AAAsAaIAAg0QgDgjgPgcQgGgNgJgKQgJgLgNgJQgLgJgTgGQgRgGgVABQgjACgaAOQgLAFgMAJQgMALgHAMQgJAMgFATQgGATAAAXIhLAAIAAgGIABgZQABgSAHgVQAHgYAMgVQAMgXAWgUQAXgUAhgLQAggNAwAAIAEAAIAZACQASABAVAGQAWAGAXAMQAYANASAWQATAVANAhQAMAhAAAvIAAE7g");
	this.shape_57.setTransform(1001.7,421.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#231F20").s().p("AgTAvQgKgFgGgGQgGgGgFgKQgEgKAAgKQAAgJAEgKQAFgJAGgHQAHgIAJgDQAKgEAJAAQAKAAAKAEQAIADAIAIQAGAHAFAJQAEAKAAAJQAAAKgEAKQgFAKgGAGQgHAGgJAFQgKAEgKAAQgJAAgKgEg");
	this.shape_58.setTransform(970.8,441.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#231F20").s().p("AgTAvQgKgEgGgHQgHgGgEgKQgEgIAAgMQAAgLAEgIQAEgJAHgHQAIgIAIgDQAJgEAKAAQAKAAAJAEQAJADAIAIQAHAHAEAJQAEAJAAAKQAAALgEAJQgEAKgHAGQgHAHgKAEQgJAEgKAAQgKAAgJgEg");
	this.shape_59.setTransform(950.2,441.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#231F20").s().p("AgTAvQgKgFgGgGQgGgGgFgKQgEgKAAgKQAAgJAEgKQAFgJAGgHQAHgIAJgDQAKgEAJAAQAKAAAKAEQAIADAIAIQAIAIADAIQAEAKAAAJQAAAKgEAKQgDAJgIAHQgHAGgJAFQgKAEgKAAQgJAAgKgEg");
	this.shape_60.setTransform(929.5,441.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#231F20").s().p("AA3EAIAAlqQgBgUgHgQQgCgHgFgHQgEgHgGgFQgGgFgJgDQgKgEgIABQgTgBgNAFQgRAGgFAEQgHAFgGAHIgHAIIg0g3QAMgQASgMQAQgKAYgJQAVgIAjAAIAMAAQAMACAPAEQAOADASAJQARAKANAQQANAPALAbQAJAaAAAlIAAFqg");
	this.shape_61.setTransform(900.4,421.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#231F20").s().p("AhVBTIAAheIgmAAIAAhHIBLAAQAJABAIADQAHAEAFAHQAFAGAAAMIAAA9ICKAAIAABHg");
	this.shape_62.setTransform(856.4,381.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#231F20").s().p("AA4FZQgRgFgMgKQgMgKgIgPQgGgPgBgTQAAASgGAQQgIAPgMAKQgMAKgRAFQgPAFgUAAQgZAAgVgGQgUgGgOgJQgRgLgIgKQgLgMgHgMQgRgbgEgmIAAmAIBMAAIAAFjQAAAiAIARQAIASALAIQAKAJAMABIAQACIAEAAQATAAAMgLQALgKAGgOQAGgPABgMIACgVIAAlpIBCAAIACF+QABANAGAOQAHAPALAJQAMALATAAIAEAAIAPgCQAMgBAKgJQAKgIAIgSQAIgRAAgiIAAobIBMAAIAAI4QgEAmgRAbQgHANgLALQgIALgRAKQgPAJgUAGQgUAGgZAAQgVAAgOgFg");
	this.shape_63.setTransform(860.5,412.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#231F20").s().p("AA4FZQgRgFgMgKQgLgKgIgPQgHgPgBgTQAAATgGAPQgIAPgMAKQgLAJgRAGQgQAFgUAAQgYAAgVgGQgUgGgPgJQgRgLgIgKQgLgMgHgMQgRgcgEglIAAmAIBMAAIAAFjQAAAhAIASQAIASALAIQALAJALABIAQACIAEAAQATAAAMgLQALgKAGgOQAGgPABgMIACgVIAAlpIBCAAIAAFpQAAAIACANQABANAGAOQAHAPALAJQAMALATAAIAEAAIAQgCQALgBAKgJQALgJAHgRQAIgTAAggIAAobIBMAAIAAI4QgEAlgQAcQgIANgKALQgJALgRAKQgPAJgUAGQgUAGgZAAQgUAAgPgFg");
	this.shape_64.setTransform(804.8,412.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#231F20").s().p("AAuGoIAAq9QAAgKgFgLQgFgIgHgJIgQgTIg8A8IhKhiIAvgsIAgAvIAlg2QAXACATAIQAQAIAPALQANALAKANQAJANAGANQANAdADAmIAAK9g");
	this.shape_65.setTransform(759.9,404.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#231F20").s().p("AhMEDIgQgDQgcgHgUgPQgVgPgPgWQgPgWgHgYQgHgZAAgbIAAimQAEgvAOgeQAPghATgUQATgWAXgMQAUgMAXgGQAVgGARgCIAYgBIAMAAIAZABQAQACAVAGQAWAGAWAMQAWAMATAWQAVAWANAfQANAeAGAvIAAE/IhMAAIAAk/QgCgfgPgbQgGgKgKgLQgKgLgNgIQgNgIgTgFQgUgFgWAAQgVAAgVAFQgSAFgOAIQgLAHgMAMQgIAJgHAMQgOAZgDAhIAACmQACAQAFAPQAEANAIANQAHANAMAIQAQALAPAAQAOAAAKgGQALgGAHgHIAxAyQgLAMgPAIQgMAIgRAGQgRAGgWAAg");
	this.shape_66.setTransform(728.8,421.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#231F20").s().p("AiNAkIAAhHIEbAAIAABHg");
	this.shape_67.setTransform(683.1,386.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#231F20").s().p("AgPECQgsAAgegMQgcgLgWgUQgUgSgLgXQgMgXgGgVQgGgWgBgSIgBlbIBLAAIAAE8QAAAfAJAXQAIAWANAOQALANAQAJQAOAGAPAFQALADANABIAMABQAeAAAUgJQAUgIAOgOQANgPAHgQQAHgOAEgPQADgMABgOIABgLIAAk8IBMAAIAAH8IhMAAIAAhHQAAANgGALQgFAKgKAJQgIAJgLAFQgKAFgLAFQgbAJggACg");
	this.shape_68.setTransform(679.6,421.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#231F20").s().p("AglD/IAAn9IBLAAIAAH9g");
	this.shape_69.setTransform(646.4,421.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#231F20").s().p("ADFFsIAAlsQgBgSgHgRIgHgNQgEgHgGgFQgGgFgJgDQgJgEgKAAQgTAAgNAFQgPAFgHAFQgHAFgGAGIgHAIIg1g3QAPgQAQgLQARgLAWgIQAXgIAiAAIAOAAQAMABAOAFQAQAEAQAJQAPAIAPASQAOAQAJAaQAKAZAAAjIAAFsgAjZjAQgQgGgNgNQgMgMgHgQQgHgRAAgRQAAgSAHgRQAHgQAMgMQANgNAQgGQAQgIASAAQASAAARAIQAQAGAMANQALAKAIASQAHARAAASQAAARgHARQgIASgLAKQgMANgQAGQgRAHgSAAQgSAAgQgHgAjMkmQgIAIAAANQAAAMAIAIQAIAIANAAQANAAAIgIQAJgIAAgMQAAgNgJgIQgIgJgNAAQgNAAgIAJg");
	this.shape_70.setTransform(605,410.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#231F20").s().p("AB7EAIAAk7QAAgegIgUQgIgVgNgNQgPgPgOgGQgNgGgQgFIgXgEIgNAAQgWgBgSAGQgRAFgOAJQgOAKgHAJQgKAMgFALQgNAZgDAiIAAE7IhLAAIAAmFQAPgcATgVQAUgWASgMQASgNAVgJQAWgIANgDQAQgEANgBIATgBIAEAAQAlABAbAIQAdAJAVANQAUANAPAQQAOARAKASQAJAPAGAUQAEANAEARIACAYIABFHg");
	this.shape_71.setTransform(580.2,421.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#231F20").s().p("Ag8D6QgXgIgQgLQgSgMgMgQIAygyIAIAIQAHAGAIAFQAIAGANAFQAOAEARAAQAKAAAJgDQAGgDAIgGQAIgIADgFQAEgHACgHQAIgSABgVIAAknIhIAAIAAhHICUAAIAAFuQgBAkgIAaQgKAagOAQQgMAPgSALQgSAJgPAEQgTAFgHAAIgNABQggAAgYgIg");
	this.shape_72.setTransform(538.4,421.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#231F20").s().p("AhQD4QgmgMgXgOQgcgPgTgWIAzgxQAJAJAPAJQAQAKASAHQASAIAXAEQAWAFAXAAQAXAAAUgGQATgGANgLQAOgLAHgOQAHgOAAgTQAAgSgGgMQgGgLgJgHQgHgHgJgDIgOgDIh5gWQgKgDgNgGQgNgHgMgIQgOgKgKgOQgLgQgGgUQgHgUAAgcQAAgoAPgeQAPgdAXgSQAYgSAegIQAdgIAeAAQAeAAAbAHQAVAGAYAJQAWAKASAMIAnAbIgqA/IghgVIgagOIgegMQgNgFgPgDQgNgDgJAAQgOAAgTADQgRADgMAIQgLAIgIAPQgIAPAAAXQAAAWANAOQAMANAVAIQAXAHAVAEIAyAIQAaAEAXANQAWALATATQAQARAMAZQALAYAAAaQAAAogOAcQgOAdgZATQgYATghAJQghAJglAAQgzAAglgMg");
	this.shape_73.setTransform(503.7,421.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#231F20").s().p("AhDGoIAAoDQAAgOgHgPQgIgQgJgNIgWgdIgWgfQgKgOgHgRQgHgRAAgQQAAgWAGgbQAFgaAOgXQAOgVAZgQQAYgPAlAAIDCAAIAABIIivAAQgUABgOAJQgGAEgGAFQgFAFgGAIQgEAKgDAKQgDAKAAAQQAAATAGAMQAFALALAMIAZAcQANARASAcIAFARIAFAWQACAQAAANIAAH2g");
	this.shape_74.setTransform(479.9,404.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#231F20").s().p("AB7EAIAAk7QAAgegIgUQgJgVgMgNQgNgPgPgGQgNgGgQgFQgPgDgKgBIgMAAQgWgBgTAGQgQAFgOAJQgOAKgIAJQgJAMgFALQgNAZgCAiIAAE7IhMAAIAAmFQARgfARgSQAUgWASgMQAVgNASgJQAWgIAOgDQAPgEANgBIATgBIAEAAQAlABAcAIQAdAJATANQAWANAOAQQAOARAKASQAJAPAFAUQAHATABALQAEAOAAAKIAAFHg");
	this.shape_75.setTransform(439.3,421.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#231F20").s().p("AA3EAIAAlqQgBgUgHgQIgHgOQgFgHgFgFQgGgFgJgDQgKgEgIABQgTgBgNAFQgPAGgHAEQgHAGgGAGIgHAIIg1g3QANgQASgMQARgKAWgJQAWgIAiAAIAOAAQALACAOAEQAPADASAJQAPAKAPAQQANAPAKAbQAKAagBAlIAAFqg");
	this.shape_76.setTransform(396,421.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#231F20").s().p("AB7EAIAAiNQgGgQgIgMQgIgNgPgIQgNgIgPgFQgPgEgSgBIgZABQgMACgIAFIAAhOQAUgGAZABQA3AAArAaIAAg0QgDgjgPgcQgGgNgJgKQgJgLgNgJQgLgJgSgGQgSgGgVABQgjACgaAOQgMAFgKAJQgMAKgIANQgJAMgFATQgGATAAAXIhLAAIABgfQABgOAHgZQAHgYAMgVQAMgXAWgUQAXgTAhgMQAggNAwAAIAEAAIAZACQASABAVAGQAXAHAWALQAYANASAWQATAVANAhQAMAhAAAvIAAE7g");
	this.shape_77.setTransform(358.9,421.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#231F20").s().p("AgTE9Qg1AAglgPQgkgPgZgXQgZgWgOgdQgPgbgHgbQgHgagCgWIgCmrIBdAAIAAGEQAAAnALAbQAKAbAPASQARASARAJQASAIASAGQAVAEAIAAIAPABQAjABAbgLQAagNAPgPQARgRAIgTQAKgUAEgSQAEgQABgPIABgOIAAmEIBeAAIAAJwIheAAIAAhYQAAARgIAPQgIANgJAJQgLAKgNAHQgNAIgOAEQghALgnADg");
	this.shape_78.setTransform(1468.3,284.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#231F20").s().p("ACSE5IAAkPQgCgSgDgKQgEgNgFgMQgEgLgLgPQgIgLgPgJQgOgIgSAAIjQAAIAAF6IhdAAIAApxIBdAAIAACgIDQAAQARgCAOgKQALgHANgQQAMgOAHgcIAAhTIBdAAIAABbQAAAJgDAOQgEANgHARQgGANgLATQgLARgNANQARAOAQAZQAMASALAdQAKAbAAAjIAAEPg");
	this.shape_79.setTransform(1408.5,283.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#231F20").s().p("AA5IJIAAteQAAgLgHgNQgHgOgHgJIgUgXIhKBKIhbh4IA7g2IAnA5IAthCQAfAEAUAJQAXAKAQANQARANALAQQALAPAIARQARAlACAtIAANeg");
	this.shape_80.setTransform(1358,262.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#231F20").s().p("ACYE7IAAmDQAAglgLgZQgJgZgRgRQgPgRgTgJQgUgJgQgEQgPgEgPgBIgPAAQgdAAgVAGQgUAGgRALQgRALgKANQgMAOgGANQgQAggDAqIAAGDIhdAAIAAneQAUglAWgYQAYgaAXgPQAWgQAagLQAVgIAXgGQAUgFAPgBIAXgCIAFAAQAtACAiAKQAkALAZAQQAaAQARAUQARATANAXQALAVAHAWQAGATADATQADAOABAPIABGSg");
	this.shape_81.setTransform(1321,283.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#231F20").s().p("ABDE7IAAm9QAAgZgJgUQgEgIgFgJQgGgJgHgFQgGgGgMgEQgJgEgNAAQgWAAgSAFQgOAFgMAIQgJAFgIAIIgJAKIhAhDQAQgTAWgPQAVgNAcgKQAcgLApAAIAPABQAOABATAFQASAFAVALQAUAMARAUQASAUALAgQALAgAAAtIAAG9g");
	this.shape_82.setTransform(1267.8,283.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#231F20").s().p("ACXE7IAAitQgGgUgLgPQgLgPgRgLQgSgKgQgFQgUgGgVAAIgeABQgPACgKAFIAAhfQAZgHAeAAQBDAAA1AgIAAg/QgEgsgRgiQgHgNgMgPQgJgNgRgMQgQgLgVgHQgVgGgbAAQgoACgjARQgQAJgMAJQgOAMgKAQQgLARgGAVQgHAWABAeIheAAIAAgHQAAgMACgSQACgXAHgaQAHgZARgfQAPgbAcgZQAbgXAogQQArgQA4AAIAFAAIAfACQAXACAZAIQAaAHAdAPQAdAPAYAcQAXAbAPAoQAPApAAA5IAAGDg");
	this.shape_83.setTransform(1222.2,283.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#231F20").s().p("ABEE7IAAm9QgCgagIgTQgDgIgGgJQgGgJgHgFQgGgGgMgEQgIgEgOAAQgWAAgSAFQgOAFgMAIQgJAFgIAIIgJAKIhAhDQAQgTAXgPQATgNAdgKQAcgLApAAIAQABQANABATAFQASAFAVALQAUAMASAUQAQAUAMAgQALAgAAAtIAAG9g");
	this.shape_84.setTransform(1173.9,283.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#231F20").s().p("AgBE9QgmgDghgLQgOgEgNgIQgOgHgKgKQgKgJgIgNQgHgOAAgSIAABYIhdAAIAApwIBdAAIAAGEIABAOQABAPAEAQQAEASAJAUQAJATARARQAQAQAZAMQAaALAjgBIAPgBQAJAAAVgEQASgGARgIQATgKAPgRQAQgSAKgbQAKgbAAgnIAAmEIBdAAIgBGrQgCAWgHAaQgIAbgOAbQgMAbgaAYQgZAXglAPQglAPg1AAg");
	this.shape_85.setTransform(1128.4,284.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#231F20").s().p("AhpBnIAAh1IgvAAIAAhXIBdAAQAKABALAFQAHADAHAJQAGAIABAPIAABLICqAAIAABYg");
	this.shape_86.setTransform(1077.3,234.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#231F20").s().p("AhbEuQglgOgZgXQgZgWgOgbQgOgcgGgXQgGgYgCgUIgBgYQAAgeAIgZQAJgZANgSQANgUAQgRIAegfQAOgOAKgOQAKgOACgOIABgHIAAgHQAAgVgIgPQgHgPgLgKQgKgJgPgGQgLgFgQgEQgPgDgKgBIgYgBIAAhXIA3AAQAmAAAbALQAaAKATAQQATARAJAUQAKASAHAWQAFAWACAPIABAcIAAAMQgCAQgHARQgHARgIANIgVAdQgbAfgOAWQgOAWgJASQgHATgBAJIgBAOQAAAfAIAWQAIAWANAOQANAPAPAHQARAJANADQAPADAJABIANAAQAcAAAVgIQAUgIAPgNQAOgOAJgPQAJgQAEgOQAFgOACgLIABgOIAAjFQAAg8hTAAIgfAAIAAhIIAfAAQAqAAAVgTQAUgRAAgkIAAgRIBdAAIAAAkQAABHhEARQAgAIAQATQASAUACAcIAADbQAAA1gOAkQgQAkgWAYQgYAZgbANQgaAMgaAHQgYAGgTACIgYABQg1AAgngPg");
	this.shape_87.setTransform(1070.2,284.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#231F20").s().p("AgPIIIAAp5QAAgXAGgSQAEgRAIgSQAJgRANgPQAOgRANgNQAPgOAIgMQAJgMAFgKQAFgJABgKQABgJABgKQgBgYgHgSQgIgQgOgNQgNgMgTgGQgSgGgSAAQglAAgVAHQgVAIgJAHQgKAKgCAMIhPAAIAAgCIAAgFIABgTQACgMAGgNQAFgOAMgOQAMgOATgMQAUgLAegIQAcgHAsAAQAqAAAfAJQAfAKAUAPQAUAQAMATQANAUAEASQAGAUACAQIABAoQABAKgDAQQgCAMgGARQgHAQgMATQgMASgRAWQgRAVgJARQgJASgFALQgEAOgBAMIAAJ5g");
	this.shape_88.setTransform(1025.6,262.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#231F20").s().p("ABEE7IAAm9QgCgagIgTQgDgHgFgKQgGgIgIgGQgGgGgLgEQgKgEgNAAQgWAAgRAFQgOAFgMAIQgJAFgIAIIgJAKIhAhDQAPgSAXgQQAUgNAbgKQAegLAoAAIAQABQAOABASAFQASAFAVALQAVALARAVQARAUAMAgQALAfgBAuIAAG9g");
	this.shape_89.setTransform(991.3,283.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#231F20").s().p("AhjExQgtgOgegRQgjgVgWgZIA+g9QAJAKAVANQATALAXAKQAXAJAbAGQAcAFAbAAQAdAAAYgHQAXgHARgOQARgNAIgSQAJgRAAgXQAAgWgHgPQgIgOgKgIQgLgJgKgDIgQgEIiVgbQgPgFgNgGQgQgIgQgLQgPgLgOgTQgNgTgIgZQgIgYAAgjQAAgzASgjQASgjAdgWQAfgXAjgKQAmgKAjABQAmgBAgAJQAgAKAXAJQAbALAWAQIAwAhIg0BNIgngZIghgSIglgOQgPgGgUgEQgOgEgMAAQgXAAgSAEQgUAEgPAJQgPALgJARQgKASAAAdQAAAcAQARQAPAPAZAJQAbALAcAEIA+AJQAfAGAcAPQAdAQAWAVQAWAZANAbQANAdAAAhQAAAwgSAjQgRAkgeAXQgeAYgoALQgrALgsgBQg+AAgugOg");
	this.shape_90.setTransform(949.4,284);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#231F20").s().p("AguE4IAApwIBdAAIAAJwg");
	this.shape_91.setTransform(915.5,283.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#231F20").s().p("AgqBZIAAixIBVAAIAACxg");
	this.shape_92.setTransform(889.2,212.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#231F20").s().p("AitBIIAAhXIEEAAIAAg4IBXAAIAACPg");
	this.shape_93.setTransform(874.4,237.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#231F20").s().p("ACWE7IAAmEQAAglgLgZQgKgZgPgRQgRgQgRgJQgTgJgRgEQgSgEgLgBIgQAAQgjAAgaAKQgaALgPAPQgQAPgJATQgKATgEAQQgEAOgBAOIgBAOIAAGEIheAAIAApwIBeAAIAABXQABgRAGgNQAHgNALgKQALgKANgGQALgFAPgGQAhgKAogCIAUAAQA1AAAlAPQAkAOAaAWQAZAWAOAcQAOAdAHAZQAHAZACAWIABGrg");
	this.shape_94.setTransform(874.5,283.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#231F20").s().p("ABEE7IAAm9QgCgagIgTQgDgHgFgKQgGgIgIgGQgGgGgLgEQgKgEgNAAQgWAAgRAFQgOAFgNAIQgGAEgKAJIgJAKIhBhDQAQgSAXgQQAUgNAbgKQAdgLApAAIAQABQANABATAFQASAFAVALQAVAMARAUQAQATANAhQALAfgBAuIAAG9g");
	this.shape_95.setTransform(821.5,283.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#231F20").s().p("AhpBmIAAh0IgvAAIAAhXIBdAAQALABAJAFQAIADAHAJQAGAIAAAPIAABLICrAAIAABXg");
	this.shape_96.setTransform(767.5,235);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#231F20").s().p("ABEGnQgVgGgOgMQgPgNgIgRQgKgUABgWQgBAYgIASQgJARgPANQgPAMgUAGQgUAHgYAAQgeAAgagHQgYgIgTgLQgSgLgNgOQgNgQgIgOQgVglgFgrIAAnYIBdAAIAAG0QAAAoAKAXQAMAXANAJQAMALAOABQAMACAIAAIAEAAQAYAAAPgNQAOgMAGgRQAHgSACgQQACgPAAgLIAAm7IBRAAIADHVQABAPAJATQAHARAOAMQAOANAYAAIAFAAQAIAAALgCQANgBANgLQANgJAKgXQAKgWAAgpIAAqWIBdAAIAAK6QgFAugVAiQgIAOgNAQQgNAOgTALQgSALgZAIQgZAHgfAAQgYAAgTgHg");
	this.shape_97.setTransform(772.5,272.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#231F20").s().p("ABEGnQgUgGgPgMQgOgMgJgSQgJgSgBgYQAAAWgIAUQgJARgPANQgPAMgUAGQgTAHgYAAQgfAAgZgHQgagIgRgLQgSgKgNgPQgMgNgKgRQgVgkgFgsIAAnYIBeAAIAAG0QAAAqAKAVQALAXAMAJQAOALANABQAMACAIAAIAEAAQAYAAAPgNQANgMAIgRQAHgSABgQIACgaIAAm7IBSAAIAAG7QAAALACAPQACARAHARQAIAQAOANQAOANAYAAIAFAAQAIAAAMgCQANgBANgLQANgKAJgWQAKgXAAgoIAAqWIBdAAIAAK6QgFAsgUAkQgLARgLANQgNAOgTALQgQALgaAIQgaAHgeAAQgYAAgUgHg");
	this.shape_98.setTransform(704.1,272.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#231F20").s().p("AA4IJIAAteQAAgMgGgMQgHgOgHgJIgUgXIhLBKIhah4IA6g2IAnA5IAuhCQAeAEAVAJQAXAKAQANQARANALAQQAMAQAGAQQASAlACAtIAANeg");
	this.shape_99.setTransform(648.9,262.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#231F20").s().p("AgTE9Qg1AAglgPQglgPgYgXQgagYgOgbQgOgegHgYQgHgagCgWQgBgTAAgNIAAmLIBdAAIAAGEQAAApAKAZQAKAbAPASQAQARATAKQARAJASAFQAUAEAJAAIAPABQAkABAagLQAagNAPgPQARgSAIgSQAKgUAEgSQADgNACgSIABmSIBeAAIAAJwIheAAIAAhYQAAARgIAPQgGALgLALQgLAKgNAHQgOAIgMAEQgjALgmADg");
	this.shape_100.setTransform(611.4,284.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#231F20").s().p("ABDE7IAAm9QgBgagIgTQgEgIgFgJQgGgJgHgFQgGgGgMgEQgIgEgOAAQgWAAgRAFQgPAFgMAIQgIAFgJAIIgJAKIhAhDQAQgTAWgPQAUgNAdgKQAcgLAoAAIAQABQAOABATAFQASAFAVALQAUAMARAUQASAUALAgQAMAgAAAtIAAG9g");
	this.shape_101.setTransform(558.4,283.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#231F20").s().p("AhKEzQgcgKgUgNQgWgPgQgTIA/g+IAKAKQAFAGAMAIQAKAGARAGQARAGAVAAQAMAAALgEQAKgFAIgGQAHgGAFgKQAGgHADgKQAIgUACgcIAAlrIhXAAIAAhXIC1AAIAAHCQAAAugMAeQgMAggRATQgRAVgUALQgXANgQAEQgUAGgNAAIgQABQgoABgdgLg");
	this.shape_102.setTransform(521.9,284.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#231F20").s().p("AhKEzQgcgKgTgNQgXgQgPgSIA/g+IAJAKQAGAGAMAIQALAHAQAFQAQAGAVAAQAMAAAKgEQAMgFAGgGQAJgHAFgJIAJgRQAHgUADgcIAAlrIhYAAIAAhXIC0AAIAAHCQABAtgMAfQgMAggQATQgQAUgWAMQgXANgRAEQgSAGgOAAIgQABQgoABgdgLg");
	this.shape_103.setTransform(484.6,284.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#231F20").s().p("Ah3BDQgOAAgJgGQgIgGgEgIQgFgKgBgLIAAhcIBXAAIAAAvIDqAAIAABWg");
	this.shape_104.setTransform(451,238.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#231F20").s().p("ACYE7IAAi4QAAgbgMgSQgMgTgSgMQgTgMgVgGQgWgHgSgDQgSgDgYgCIgLABQgIAAgQAEQgPADgPAGQgRAHgPALQgOALgMASQgMASgFAaIgCAPQAAATAKAPQAKAOAPAJQAOAJAUAGQAVAGARADIAhAEIAfAAIAABYIhoAAQghAAgcgOQgcgOgXgYQgVgXgMghQgNgfAAgkQAAgjAQgjQAQgkAjghQAZgUAUgMQAWgNAXgJQAYgIAVgDQAagEARAAQAhAAAaAHQAfAGASAHQAYAIAUALIAAgkQAAgegGgWQgGgVgLgRQgLgQgOgMQgLgJgQgJQgjgRgpgCQglAAgaANQgbAOgQATQgRATgJAWQgKAYgDANIhiAAQADgzARglQAQgkAYgYQAXgYAcgPQAdgOAYgGQAbgHASgCIAigCQA5AAAqAQQAqAQAaAXQAcAZAPAcQAOAaAJAdQAIAeACATIACGhg");
	this.shape_105.setTransform(439.6,283.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#231F20").s().p("ABEE2QgVgGgOgMQgPgMgJgSQgJgUAAgWQAAAYgIASQgJASgPAMQgPANgUAFQgUAHgYAAQgeAAgagHQgYgIgTgLQgSgLgNgOQgLgNgKgRQgVgkgFgsIAAnYIBdAAIAAG0QAAAoAKAXQAKAXAOAKQAMAKAOABQAMACAIAAIAEAAQAYABAPgNQAOgOAHgQQAHgSACgQQACgOAAgLIAAm8IBRAAIAAG8IADAZQACAPAHATQAIARAOANQAOANAZgBIAEAAQAIAAAMgCQANgBAMgKQANgKAKgXQAJgWAAgpIAAm0IBeAAIAAHYQgGAtgTAjQgJAQgNAOQgOAOgSALQgSALgZAIQgZAHgfAAQgYAAgTgHg");
	this.shape_106.setTransform(378.2,284.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).wait(1));

	// Cloud
	this.instance_1 = new lib.Group_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1438.7,195.9,1,1,0,0,0,73.4,36.1);
	this.instance_1.alpha = 0.621;

	this.instance_2 = new lib.Group_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(726.3,667.7,1,1,0,0,0,79.8,38.9);
	this.instance_2.alpha = 0.75;

	this.instance_3 = new lib.Group_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(306.9,196.8,1,1,0,0,0,113.3,55.3);
	this.instance_3.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 4
	this.instance_4 = new lib.lamp();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1196.5,675.2,0.861,0.861,0,0,0,54.2,53.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AoFHjQjOixg1kNQg2kQCAj6QBKiQB7hoQB3hkCUgwQCUgwCZALQCgALCPBKQCPBJBmB8QBiB2AvCVQAvCUgMCbQgNCghKCQQiLENkXBvQkVBtkVhjQkGEPgFAUIgBACQgEAAAXm2g");
	this.shape_107.setTransform(1194.7,688.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.instance_4}]}).wait(1));

	// sun
	this.instance_5 = new lib.sun();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1426.3,596.6,1,1,0,0,0,67.3,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 1
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(356.6,864.3,1.28,1.28,0,0,0,51.6,51.3);

	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(450.4,852.2,0.904,0.904,75,0,0,58.5,60.2);

	this.instance_8 = new lib.Symbol10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(526.2,833.9,0.807,0.807,125.3,0,0,58.6,59.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B2B2B2").s().p("AlagzILHgTIAMBHIrxBGg");
	this.shape_108.setTransform(736.1,846.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#676767").s().p("Agwg3IBcgCIAKBwIhrADg");
	this.shape_109.setTransform(757.5,805.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#676767").s().p("ABAgwIADBdIiFAEg");
	this.shape_110.setTransform(726.2,810.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#676767").s().p("ABAgvIADBcIiFAEg");
	this.shape_111.setTransform(739.9,809.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#676767").s().p("ABAgwIACBdIiEADg");
	this.shape_112.setTransform(712.6,810.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E5E5E4").s().p("AlkCwIAwgBIgFi+ICGhkIADBgICGhkIACBgICFhjIAGC7IAvgBIAQlNIBOgDIAgFNIA1gCIACBiIAcAAIACB8IrEBBgAjyBkIACBjIBsgDIgDhjgAg5BfIACBjIBrgDIgDhjgACBBZIADBkIBrgDIgChkgABMkYIgIgCIgIgEIgKgIIgHgIIgEgIIACgCIAQAHIAQAEIADABIADAAIALgBIAGgCIAGgDIADgCIADgCIAHgGIAAgBIABAAIAFgGIAHgGIAHgGIAIgFQALgFAIAAIAEABIAEABIAIADIALAIIAGAIIADAGIABACIgBACIgbgKIgJgDIgDAAQgGgDgHAAIgHABIgHAFIgFAGIgCAEIAAACIgBABIAAAAIAAABIgEAJIgGAIIgIAHIgKAFQgGACgGAAIgIgBg");
	this.shape_113.setTransform(736.9,817.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E5E5E4").s().p("AicgGIE3gVIACAiIk3AVg");
	this.shape_114.setTransform(785.1,843.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B4B2B4").s().p("AhogCIDKgGIAHAJIjGAHg");
	this.shape_115.setTransform(1127,822.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B4B2B4").s().p("AhogBIDKgHIAHAKIjGAHg");
	this.shape_116.setTransform(1121.2,814.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B4B2B4").s().p("AhogBIDKgHIAHAKIjGAHg");
	this.shape_117.setTransform(1115.5,805.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B4B2B4").s().p("ABiCcIjXk3IAOAAIDdE3g");
	this.shape_118.setTransform(1127.3,813.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B4B2B4").s().p("ABiCcIjXk3IAOAAIDdE3g");
	this.shape_119.setTransform(1121.5,813.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B4B2B4").s().p("ABjCcIjYk3IAOAAIDdE3g");
	this.shape_120.setTransform(1114.3,813.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D3DBE1").s().p("AgKCrIjflVIDbAAID4FVg");
	this.shape_121.setTransform(1121.7,813.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#24526E").s().p("AgNDSIkcmjIEsACIEnGhg");
	this.shape_122.setTransform(1120.3,812.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#003334").s().p("AgQDnIkZmWIAAg3IJTGgIAAAtg");
	this.shape_123.setTransform(1120.5,815.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B4B2B4").s().p("AhogCIDKgGIAHAJIjGAHg");
	this.shape_124.setTransform(1165.7,822.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B4B2B4").s().p("AhogBIDKgHIAHAKIjGAHg");
	this.shape_125.setTransform(1160,814.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B4B2B4").s().p("AhogBIDKgHIAHAKIjGAHg");
	this.shape_126.setTransform(1154.2,805.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B4B2B4").s().p("ABiCcIjXk3IAPAAIDcE3g");
	this.shape_127.setTransform(1166,813.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B4B2B4").s().p("ABiCcIjXk3IAPAAIDcE3g");
	this.shape_128.setTransform(1160.3,813.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B4B2B4").s().p("ABiCcIjXk3IAOAAIDdE3g");
	this.shape_129.setTransform(1153.1,813.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D3DBE1").s().p("AgLCrIjelVIDcAAID2FVg");
	this.shape_130.setTransform(1160.5,813.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#24526E").s().p("AgNDSIkcmjIEsACIEnGhg");
	this.shape_131.setTransform(1159,812.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#003334").s().p("AgRDnIkYmWIAAg3IJTGgIAAAtg");
	this.shape_132.setTransform(1159.3,815.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3C2518").s().p("AhoDCIAAmDIDRAAIAAGDg");
	this.shape_133.setTransform(1026.5,886);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3C2518").s().p("AgsBwIAAjfIBZAAIAADfg");
	this.shape_134.setTransform(1148.8,877.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3C2518").s().p("AgkBwIAAjfIBJAAIAADfg");
	this.shape_135.setTransform(1163,877.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3C2518").s().p("AgsBwIAAjfIBZAAIAADfg");
	this.shape_136.setTransform(1066.8,877.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3C2518").s().p("AgsBwIAAjfIBZAAIAADfg");
	this.shape_137.setTransform(1081.7,877.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C3282F").s().p("AhkGLInUqzIhlC1IhagSICUkFIM2AAIIlMVg");
	this.shape_138.setTransform(1134.1,816.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C3282F").s().p("AAWEFIkEnQIj2HCIg5AAIEUn7IHJAAIFeIJg");
	this.shape_139.setTransform(1051,830.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8C653C").s().p("AyZAlIAAhJMAk0AAAIAABJg");
	this.shape_140.setTransform(1096.6,907.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E6E6E5").s().p("AqtJlIAAsXIDtmxILGASIGoJ0IAAJCg");
	this.shape_141.setTransform(1122,845.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CCCBCA").s().p("AkEH6IAAn9ID8n2IENIAIAAHzg");
	this.shape_142.setTransform(1027.3,854.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#676868").s().p("AgVAeIAAg7IAsAAIAAA7g");
	this.shape_143.setTransform(1373.3,990.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#676868").s().p("AiYBKQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIABgGIAAgBIgBgFQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIEKAAQAEAAAFgGQAEgFAAgFIAAhtQAAgGABgBQABgBAFAAIADAAQAUAAAAAHIAACFQAAAIgVgBg");
	this.shape_144.setTransform(1389.7,983);

	this.instance_9 = new lib.Path_20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1319.9,945.6,1,1,0,0,0,60.4,1.6);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_1_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1272.2,930.1,1,1,0,0,0,7.5,14.2);
	this.instance_10.alpha = 0.199;

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8C653C").s().p("ApbCdICmk5IN2AAICbE5g");
	this.shape_145.setTransform(1319.9,931.5);

	this.instance_11 = new lib.Path_2_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1365.1,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_12 = new lib.Path_3_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1359.9,985.2,1,1,0,0,0,0.7,5.2);

	this.instance_13 = new lib.Path_4_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1354.7,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_14 = new lib.Path_5_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1349.5,985.2,1,1,0,0,0,0.8,5.2);

	this.instance_15 = new lib.Path_6_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1344.2,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_16 = new lib.Path_7_2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1339.1,985.2,1,1,0,0,0,0.8,5.2);

	this.instance_17 = new lib.Path_8_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1333.8,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_18 = new lib.Path_9_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1328.6,985.2,1,1,0,0,0,0.8,5.2);

	this.instance_19 = new lib.Path_10_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1323.4,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_20 = new lib.Path_11_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1318.2,985.2,1,1,0,0,0,0.8,5.2);

	this.instance_21 = new lib.Path_12_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(1312.9,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_22 = new lib.Path_13();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1307.7,985.2,1,1,0,0,0,0.8,5.2);

	this.instance_23 = new lib.Path_14();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1302.5,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_24 = new lib.Path_15();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1296.5,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_25 = new lib.Path_16();
	this.instance_25.parent = this;
	this.instance_25.setTransform(1292,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_26 = new lib.Path_17();
	this.instance_26.parent = this;
	this.instance_26.setTransform(1286.1,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_27 = new lib.Path_18();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1281.6,985.2,1,1,0,0,0,1.5,5.2);

	this.instance_28 = new lib.Path_19();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1277.1,985.2,1,1,0,0,0,1.5,5.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C39A6F").s().p("AncBDIAAiFIO5AAIAACFg");
	this.shape_146.setTransform(1321.8,985.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A67D55").s().p("AgVDvIAAndIArAAIAAHdg");
	this.shape_147.setTransform(1368.8,971);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#A67D55").s().p("AgWDvIAAndIAsAAIAAHdg");
	this.shape_148.setTransform(1274.9,971);

	this.instance_29 = new lib.Path_12();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1437.8,925.3,1,1,0,0,0,0.8,0.6);
	this.instance_29.alpha = 0.5;

	this.instance_30 = new lib.Path_1_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1434,926.1,1,1,0,0,0,0.8,0.6);
	this.instance_30.alpha = 0.5;

	this.instance_31 = new lib.Path_2_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(1423.3,924.5,1,1,0,0,0,0.8,0.5);
	this.instance_31.alpha = 0.5;

	this.instance_32 = new lib.Path_3_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1427.1,926.8,1,1,0,0,0,0.8,0.6);
	this.instance_32.alpha = 0.5;

	this.instance_33 = new lib.Path_4_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1412.7,925.3,1,1,0,0,0,0.8,0.6);
	this.instance_33.alpha = 0.5;

	this.instance_34 = new lib.Path_5_3();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1416.5,926.1,1,1,0,0,0,0.8,0.6);
	this.instance_34.alpha = 0.5;

	this.instance_35 = new lib.Path_6_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(1414.3,927.5,1,1,0,0,0,0.9,0.5);
	this.instance_35.alpha = 0.5;

	this.instance_36 = new lib.Path_7_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(1406.7,926.1,1,1,0,0,0,0.9,0.6);
	this.instance_36.alpha = 0.5;

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#764F2C").s().p("Ah3AaIhWgLIATgYIAPAAQASgBALgFQALgEAIAAIAIAAQAEgBAUABIAHACQAKABAEAAIAKACQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQACgDARgFIARgFIAPAIQAPAJAEABQAIAAAIAGIAugCIATAEQAEAAAHgDQAHgDADgEQAFgEATgBIAJALIAsAAIANAZIjUAMg");
	this.shape_149.setTransform(1422.8,925.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#B4B2B4").s().p("AipAWQhHgJAAgNQAAgMBHgJQBGgJBjAAQBjAABHAJQBHAJAAAMQAAANhHAJQhGAJhkAAQhjAAhGgJg");
	this.shape_150.setTransform(1422.8,925.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CCCBCA").s().p("AjBAcQhQgMAAgQQAAgPBQgLQBRgMBwAAQBxAABQAMQBQALAAAPQAAAQhQAMQhQALhxAAQhwAAhRgLg");
	this.shape_151.setTransform(1423,925.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E5E5E4").s().p("Ai/BOIhPgRIgCiWIIhgEIgFCLQAAAOhNAQQhVAShpAAQheAAhigQg");
	this.shape_152.setTransform(1423.1,935.3);

	this.instance_37 = new lib.Path_11();
	this.instance_37.parent = this;
	this.instance_37.setTransform(1437.8,961.1,1,1,0,0,0,0.8,0.6);
	this.instance_37.alpha = 0.5;

	this.instance_38 = new lib.Path_1_0();
	this.instance_38.parent = this;
	this.instance_38.setTransform(1434,961.9,1,1,0,0,0,0.8,0.6);
	this.instance_38.alpha = 0.5;

	this.instance_39 = new lib.Path_2_0();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1423.3,960.3,1,1,0,0,0,0.8,0.5);
	this.instance_39.alpha = 0.5;

	this.instance_40 = new lib.Path_3_0();
	this.instance_40.parent = this;
	this.instance_40.setTransform(1427.1,962.6,1,1,0,0,0,0.8,0.6);
	this.instance_40.alpha = 0.5;

	this.instance_41 = new lib.Path_4_0();
	this.instance_41.parent = this;
	this.instance_41.setTransform(1412.7,961.1,1,1,0,0,0,0.8,0.6);
	this.instance_41.alpha = 0.5;

	this.instance_42 = new lib.Path_5_2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(1416.5,961.9,1,1,0,0,0,0.8,0.6);
	this.instance_42.alpha = 0.5;

	this.instance_43 = new lib.Path_6_0();
	this.instance_43.parent = this;
	this.instance_43.setTransform(1414.3,963.3,1,1,0,0,0,0.9,0.5);
	this.instance_43.alpha = 0.5;

	this.instance_44 = new lib.Path_7_0();
	this.instance_44.parent = this;
	this.instance_44.setTransform(1406.7,961.9,1,1,0,0,0,0.9,0.6);
	this.instance_44.alpha = 0.5;

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#764F2C").s().p("Ah3AaIhWgLIATgYIAPAAQASgBALgFQALgEAIAAIAIAAQAEgBAUABIAHACQAKABAEAAIAKACQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQACgDARgFIARgFIAPAIQAPAJAEABQAIAAAIAGIAugCIATAEQAEAAAHgDQAHgDADgEQAFgEATgBIAJALIAsAAIANAZIh+AKIhWACg");
	this.shape_153.setTransform(1422.8,961.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#B4B2B4").s().p("AipAWQhHgJAAgNQAAgMBHgJQBGgJBjAAQBjAABHAJQBHAJAAAMQAAANhHAJQhGAJhkAAQhjAAhGgJg");
	this.shape_154.setTransform(1422.8,961.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CCCBCA").s().p("AjBAcQhQgMAAgQQAAgPBQgLQBRgMBwAAQBxAABQAMQBQALAAAPQAAAQhQAMQhQALhxAAQhwAAhRgLg");
	this.shape_155.setTransform(1423,961.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E5E5E4").s().p("AjBBVIhKgRIgFikIIhgFIAACfQAAANhTAPQhaAQhqAAQhfAAhcgRg");
	this.shape_156.setTransform(1422.8,971.8);

	this.instance_45 = new lib.pig();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1301.3,973.3,1,1,0,0,0,21.1,15.8);

	this.instance_46 = new lib.pig();
	this.instance_46.parent = this;
	this.instance_46.setTransform(1343.5,973.3,1,1,0,0,0,21.1,15.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#56A54C").s().p("Ar0GqIjQgLQlvhKhohmQhThSBYhhQA/hECOhGQBHgiA6gVQDHhYIigNQAxhXDPg5QDRg6ESAAQE4AADdBJQDcBJAABmQAAAKgCAGIAdADQGoBCifCJQgyArhmAuIhcAkQjXAMifBFQgyAWgmAZIgdAVQjlB9rjAEIglAAQjXAAjqgLg");
	this.shape_157.setTransform(1372,974.5);

	this.instance_47 = new lib.water();
	this.instance_47.parent = this;
	this.instance_47.setTransform(848.8,829,1,1,0,0,0,8,4.2);

	this.instance_48 = new lib.water();
	this.instance_48.parent = this;
	this.instance_48.setTransform(892,827.4,1,1,0,0,0,8,4.2);

	this.instance_49 = new lib.water();
	this.instance_49.parent = this;
	this.instance_49.setTransform(869.5,829,1,1,0,0,0,8,4.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CACACA").s().p("AgbCcIAPk3IAoAEIgnEzg");
	this.shape_158.setTransform(926.4,822.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CACACA").s().p("AgcCkIAQlIIApAEIgdFCIgOACIgKABIgEgBg");
	this.shape_159.setTransform(911.4,822.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CACACA").s().p("AgMAlIgEhcIAgACIgGBtQgKgMgMgHg");
	this.shape_160.setTransform(896.7,811.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CACACA").s().p("AgDCCIgOklIAhAAIACEeIgMApg");
	this.shape_161.setTransform(879.7,822.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CACACA").s().p("AgPg1IAcgBIAEBhQgJABgJAFIgJAGg");
	this.shape_162.setTransform(866.1,811.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#CACACA").s().p("AAHBBQgCgcgNgTIgJiHIAVgBIAODtg");
	this.shape_163.setTransform(855.5,818.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CACACA").s().p("AgVhDIAdgCIAPB1IgVAWg");
	this.shape_164.setTransform(841.2,814.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CACACA").s().p("AAHCsIgwlUIAogDIArFXg");
	this.shape_165.setTransform(826.1,825.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CACACA").s().p("AgmilIAcgDIAxFQIgeABg");
	this.shape_166.setTransform(810,826.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#25A6DE").s().p("AhGhbICUgEIAgCyIjbANg");
	this.shape_167.setTransform(891.3,832.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#25A6DE").s().p("AhMhbICUgEIAsC3IjnAIg");
	this.shape_168.setTransform(869.5,834);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#25A6DE").s().p("AhGhbICUgEIAgCyIjbANg");
	this.shape_169.setTransform(848.1,834);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#B2B2B2").s().p("Ag0A1QgVgWAAgfQAAgeAVgWQAWgVAeAAQAfAAAWAVQAVAWAAAeQAAAfgVAWQgWAVgfAAQgeAAgWgVg");
	this.shape_170.setTransform(891.6,821.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B2B2B2").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeABQAfgBAVAWQAXAXAAAdQAAAfgXAWQgVAWgfgBQgeABgWgWg");
	this.shape_171.setTransform(869.3,823.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B2B2B2").s().p("Ag0A0QgVgVgBgfQABgeAVgVQAWgXAeAAQAfAAAWAXQAVAVAAAeQAAAfgVAVQgWAXgfAAQgeAAgWgXg");
	this.shape_172.setTransform(848.5,824.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B2B2B2").s().p("AtXgUIDZgSQEJgVDwgJQL+gdDfBgIhHA/Qh6gfkHgOQoOgarDBVg");
	this.shape_173.setTransform(872.3,804.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E5E5E4").s().p("Arvi0QF3goJZAGQEtACDiALIg4FhQhGgB0tBBg");
	this.shape_174.setTransform(869.3,822.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3786C6").s().p("A42QXQg6AAgXg2QgXg1AngqQDmj0IKmWQCliACwiBICahxIACgBQEWidEgh4QCSg9BlghIABAAQIYhvFRinQD6h7B5iQQAKgMAMAJQAMAKgJAMQijDdo6DWQi0BEjJA7QhsAghGARIgBABQlQBzpAHzQltE+mDGTQg4A5hJAfQhKAghQAAg");
	this.shape_175.setTransform(653.6,967.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3786C6").s().p("AglCsIAegiQAVgaAJgNQAMgSAQgbQARggAGgSQAJgWAEgeQAEgdgEgWQgGgxgfgkQgXgcgbgOIgQgIIgHgDIAHACQAHABAKAFQAhAPAXAZQAjAmAIAxQAKA0gWA7QgHAUgRAgQgMAUgTAZQgIAMgZAbIgfAhQgHAHgVASIgsAjg");
	this.shape_176.setTransform(910.9,863);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3786C6").s().p("AgkCxQAVgTAHgJIAUgZIAGgJQASgaAHgOIAUgsQAGgPAJgfQADgNAGghIAEgsIAAgoIgCgiIgDgaIgDgXIAGAWIAGAaIAFAiIACApQAAAJgCAkIgEAYQgCARgCAIQgJAggGAPIgKAXIgLAXQgEAJgJAMIgOAUIgHAJIgWAZQgFAFgaAWIgOALQgIAHgGACIgqAZg");
	this.shape_177.setTransform(874.7,863.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#3786C6").s().p("AhuC5IAegRIAggYQAPgLASgUQAOgNASgWIAegoQAcgqAUgqQAUgqAOglQAOgmAGgVIAGgVIgDAWQgIAngHAVQgPAvgPAjQgOAegIANIgaAsQgUAcgLANIgRATQgHAIgJAJQgQAQgUAOQgHAGgLAFIgRALQgMAIgTAIIgwAQg");
	this.shape_178.setTransform(841.7,861.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#25A6DE").s().p("EgkKAQdQDGjlEAjcQMyrBRBlkIDNgzQD1hCDGhQQJ7j/hGkqIFHgPQFmgNCYgCIBaAPQBnAZBEAqQDWCKjlETQjbCUjQC0QmeFoA+ChQAMAfADAVQALBdgYCCQgiCyhdCYQkKGzqQBSMguiAAJQAwhGBjhzg");
	this.shape_179.setTransform(698.5,956.1);

	this.instance_50 = new lib.Path_10();
	this.instance_50.parent = this;
	this.instance_50.setTransform(518.6,913.7,1,1,0,0,0,5.2,2.3);
	this.instance_50.alpha = 0.5;

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#969696").s().p("AhvAWIAAgsIDfAAIAAAsg");
	this.shape_180.setTransform(524.6,913.6);

	this.instance_51 = new lib.Group_3();
	this.instance_51.parent = this;
	this.instance_51.setTransform(527.7,874.9,1,1,0,0,0,3.8,37.9);
	this.instance_51.alpha = 0.5;

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F2F2F2").s().p("Ag+F7IAor1QAWALAVgJIAqLzg");
	this.shape_181.setTransform(525.1,875);

	this.instance_52 = new lib.Path_6();
	this.instance_52.parent = this;
	this.instance_52.setTransform(445.5,951.7,1,1,0,0,0,6.7,3);
	this.instance_52.alpha = 0.5;

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#969696").s().p("AiFAeIAAg7IELAAIAAA7g");
	this.shape_182.setTransform(452.2,951.6);

	this.instance_53 = new lib.Group_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(455.9,902.4,1,1,0,0,0,3.6,46.4);
	this.instance_53.alpha = 0.5;

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F2F2F2").s().p("AhNHQIAyueIARADQAUACAQgGIA0Ofg");
	this.shape_183.setTransform(451.5,902.2);

	this.instance_54 = new lib.Path_2();
	this.instance_54.parent = this;
	this.instance_54.setTransform(356,989.7,1,1,0,0,0,8.2,3.7);
	this.instance_54.alpha = 0.5;

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#969696").s().p("AijAlIAAhJIFHAAIAABJg");
	this.shape_184.setTransform(364.2,989.7);

	this.instance_55 = new lib.Group();
	this.instance_55.parent = this;
	this.instance_55.setTransform(369,932.8,1,1,0,0,0,4.7,54.7);
	this.instance_55.alpha = 0.5;

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F2F2F2").s().p("AhbIjIA7xFIAVAFQAXADATgHIA8REg");
	this.shape_185.setTransform(364.3,932.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#56A54C").s().p("Az1HZQg/g5BOhmQA3hJB4hYIBthKQJnkYD4hRQCYgyDRgxQCIggF7hQQFthOB3A2QAsAUABAkQABAegaAcQgYAagiAOQggAOglAAQj0AElsD2Qi2B6iFB6QkEC2nIB8QiOAniRAdIh0AUIgiABQkJAAhKhDg");
	this.shape_186.setTransform(446.7,955.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B3D76A").s().p("Ah1AwQgBkcAQiiQDaFdACGcQhvAkhtAAQgOhNgBkSg");
	this.shape_187.setTransform(171.2,961.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#96CC4D").s().p("AjcFrQAKi2A8jGQA2i0BgjJQDbFdACGcQhxAkhuAAQhuAAhsgkg");
	this.shape_188.setTransform(160.9,961.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#8D5E43").s().p("AgOhRIAdAAIAACaIgPAHQgEACgKAAg");
	this.shape_189.setTransform(162.9,1004.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#754528").s().p("AgkBJIAAiaIBJAAIAACaQgLAJgUAAIgCAAQgTAAgVgJg");
	this.shape_190.setTransform(160.7,1004.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#B3D76A").s().p("AhhAFQgBiyAmhTIAFAAQA/ADAtBLQAtBKAABoQAABqguBMQgvBLhBAAQgjhMgCiwg");
	this.shape_191.setTransform(1414.6,867.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#96CC4D").s().p("AhvC2QgvhMAAhqQAAhpAvhLQAuhMBBAAQBCAAAvBMQAuBLAABpQAABqguBMQgvBLhCAAQhBAAguhLg");
	this.shape_192.setTransform(1408.6,867.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#8D5E43").s().p("AgHhnIAPAAIAADEQAAAHgPAEg");
	this.shape_193.setTransform(1410.6,896.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#754528").s().p("AgVBdIAAjEIAsAAIAADEQgMALgLAAQgLAAgKgLg");
	this.shape_194.setTransform(1409.1,896.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#B3D76A").s().p("Ah1AGQgCjXAuhkIAGAAQBMADA3BbQA2BaAAB9QAACBg4BaQg4BbhPAAQgqhbgCjVg");
	this.shape_195.setTransform(1473.1,879.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#96CC4D").s().p("AiHDbQg4haAAiBQAAh/A4hcQA4haBPAAQBPAAA5BaQA4BcAAB/QAACBg4BaQg5BbhPAAQhPAAg4hbg");
	this.shape_196.setTransform(1465.8,879.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#8D5E43").s().p("AgOh/IAdAAIAADyQAAAFgJAFQgIACgMABg");
	this.shape_197.setTransform(1466.5,913.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#754528").s().p("AgdBzIAAjyIA7AAIAADyQgLANgTAAQgSAAgLgNg");
	this.shape_198.setTransform(1465,913.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#B3D76A").s().p("AirAKQgCk7BDiSIAIAAQBwAGBPCDQBPCDAAC3QAAC7hSCEQhRCEhzABQg/iGgCk0g");
	this.shape_199.setTransform(1545.5,885.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#96CC4D").s().p("AjEE/QhSiEAAi7QAAi6BSiFQBRiEBzAAQB0AABRCEQBSCFAAC6QAAC7hSCEQhRCEh0ABQhzgBhRiEg");
	this.shape_200.setTransform(1534.8,885.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#8D5E43").s().p("Agdi3IA7AAIAAFcQgLAJgTAFQgPAFgOABg");
	this.shape_201.setTransform(1536.6,935.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#754528").s().p("AgzClIAAldIBnAAIAAFdQgiATgWAAIgBABQgZAAgVgUg");
	this.shape_202.setTransform(1534.4,935.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#56A54C").s().p("Ar6FXQmPgkjfhWQkRhqAXiqQAWijDuhZQB3gsBygMIFbAAQGkACF3ANQSwAoEbCBQB0A1AcAxQAZAsguAiQgqAghaASQhWARhjgCQgvgBglAVQgYAOgiAkQgoApgSAOQgmAcgtAIQgoAIlzAjQkpAchLAmQgoAUknAHQhJABhHAAQkGAAj1gVg");
	this.shape_203.setTransform(1109.4,913.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#B3D76A").s().p("AioAGQgCjIBCheIAHAAQBvADBOBUQBOBVAAB0QAAB4hRBUQhQBVhxAAQg+hWgCjFg");
	this.shape_204.setTransform(1633.1,979.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#96CC4D").s().p("AjBDMQhRhUAAh4QAAh2BRhVQBQhVBxAAQByAABRBVQBQBVAAB2QAAB4hQBUQhRBVhyAAQhxAAhQhVg");
	this.shape_205.setTransform(1622.6,979.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#8D5E43").s().p("AgWiPIAsAAIAAEPQgWAPgWABg");
	this.shape_206.setTransform(1623.9,1012.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#754528").s().p("AgkCAIAAkPIBJAAIAAEPQgWAQgUAAIgBAAQgUAAgKgQg");
	this.shape_207.setTransform(1622.4,1012.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B3D76A").s().p("AhtAEQgCiCArg9IAFAAQBIACAzA3QAzA2AABMQAABOg1A3Qg0A3hKAAQgog3gBiBg");
	this.shape_208.setTransform(257.8,949.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#96CC4D").s().p("Ah+CFQg1g3AAhOQAAhOA1g2QA1g3BJAAQBKAAA1A3QA1A2gBBOQABBOg1A3Qg1A3hKAAQhJAAg1g3g");
	this.shape_209.setTransform(250.9,949.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#8D5E43").s().p("AgOhbIAdAAIAACtIgPAHQgFACgJABg");
	this.shape_210.setTransform(252.4,971.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#754528").s().p("AgWBSIAAitIAsAAIAACtQgMAKgKAAQgLAAgLgKg");
	this.shape_211.setTransform(251.7,971.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B3D76A").s().p("AhtAEQgCiCArg+IAFAAQBIADAzA2QAzA3AABMQAABOg1A4Qg0A3hKAAQgog4gBiBg");
	this.shape_212.setTransform(1654,933.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#96CC4D").s().p("Ah+CGQg0g4AAhOQAAhNA0g3QA1g4BJAAQBLAAA0A4QA1A3AABNQAABOg1A4Qg0A3hLAAQhJAAg1g3g");
	this.shape_213.setTransform(1647.1,933.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#8D5E43").s().p("AgHhfIAPAAIAAC1QAAAHgPADg");
	this.shape_214.setTransform(1647.8,955.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#754528").s().p("AgVBWIAAi1IArAAIAAC1QgLAKgLAAQgLAAgKgKg");
	this.shape_215.setTransform(1646.3,955.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B3D76A").s().p("AhuAEQgBiDArg9IAFAAQBIADAzA2QAzA3AABMQAABOg1A4Qg0A3hKAAQgog4gCiBg");
	this.shape_216.setTransform(1598.9,933.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#96CC4D").s().p("Ah+CGQg1g4AAhOQAAhNA1g3QA1g4BJAAQBLAAA0A4QA0A3ABBNQgBBOg0A4Qg0A3hLAAQhJAAg1g3g");
	this.shape_217.setTransform(1592.1,933.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#8D5E43").s().p("AgOhfIAdAAIAAC1IgUAIIgJACg");
	this.shape_218.setTransform(1593.3,955.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#754528").s().p("AgdBWIAAi1IA7AAIAAC1QgXAKgMAAIgBAAQgMAAgLgKg");
	this.shape_219.setTransform(1591.8,955.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#66B04D").s().p("A+QieIArgWQA5gbBGgaQDihVERgvQNpiWP9EdICyA3QDYBHC9BMQJgDyB3DMg");
	this.shape_220.setTransform(1398.4,863.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#66B04D").s().p("AzfADIBqg2QCMg/CtgoQIniDKXCOIB0AcQCNAlB7ApQGOCCBUB9g");
	this.shape_221.setTransform(1190.5,837.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B3D76A").s().p("AhjAoQgBjwAOiJQC4EnACFdQhgAfhaAAQgMhCgBjog");
	this.shape_222.setTransform(223,981.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#96CC4D").s().p("Ai6EzQAQkiCqliQC5EnACFdQhgAfhcAAQheAAhbgfg");
	this.shape_223.setTransform(214.3,981.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#8D5E43").s().p("AgOhFIAdAAIAACEIgdAHg");
	this.shape_224.setTransform(216.6,1018.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#754528").s().p("AgkA/IAAiEIBJAAIAACEQgXAGgOABQgOAAgWgHg");
	this.shape_225.setTransform(214.4,1018.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#8EA758").s().p("Ah7hxQC7iZDtgEQBVAugGCWQgGCKhUDNIqdABQBHjrC5iUg");
	this.shape_226.setTransform(965.6,810.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#70813D").s().p("Amuh1QC/iYDvgBQDvAADACYQC8CVBHDtI1jACQBHjtC8iWg");
	this.shape_227.setTransform(996.7,810.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C7AD76").s().p("Aj9hdQDiiiEqggQDtBxAjFYIw9B3QBEjfDdifg");
	this.shape_228.setTransform(609.5,839.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#9F8450").s().p("ApBhZQDiiiEsghQEqggEABuQD6BsBxDKI7EC8QBEjeDdifg");
	this.shape_229.setTransform(641.9,839.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8EA758").s().p("AiXhmQCniwDqghQBaAhANCWQAMCLg5DVIqWBYQAnjyCkisg");
	this.shape_230.setTransform(513.9,847.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#70813D").s().p("AndhlQCrixDtgfQDsgfDSB+QDNB8BmDhI1XC1QAoj1Cmisg");
	this.shape_231.setTransform(546.8,847.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#56A54C").s().p("AiVicQCxjnDzgWQBcA6AJDWQAJDGhBEqIqwAzQAwlUCvjig");
	this.shape_232.setTransform(712.7,812.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#3D7F40").s().p("AnjifQC1joD2gSQD1gSDVDKQDSDHBiFMI2MBpQAwlYCzjig");
	this.shape_233.setTransform(746.5,812.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#66B04D").s().p("EiSCASHQghAAgkgZQgjgXgSggQgjg9gEhGQgFhMAig2QALgSAvgcQAqgZAvgVQIfjtJ+jkQQQlyRkkdUAzZgNBAzvAA7IDkANQEnAUFQAeQQ0BhQ6CmQXsDoUjFRQZsGlTSIxQBNAjAuBIQAtBHABBVIAAAOQAABOg3A3Qg2A2hOAAg");
	this.shape_234.setTransform(964.9,962.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#96C14A").s().p("EiV/ATYIAAmCQD7iJHUjNQOpmYQ8lNQXwnVZBj/QfQk+fcAkIEkAGQF4AKGgAXQU2BITjCkQbWDmU0F8QaAHcOPKuIAAGsg");
	this.shape_235.setTransform(960,955.9);

	this.instance_56 = new lib.lava();
	this.instance_56.parent = this;
	this.instance_56.setTransform(1705.5,876.8,1,1,0,0,0,95.5,96.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#93CFED").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_236.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_236},{t:this.instance_56},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.instance_55},{t:this.shape_184},{t:this.instance_54},{t:this.shape_183},{t:this.instance_53},{t:this.shape_182},{t:this.instance_52},{t:this.shape_181},{t:this.instance_51},{t:this.shape_180},{t:this.instance_50},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.shape_157},{t:this.instance_46},{t:this.instance_45},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_145},{t:this.instance_10},{t:this.instance_9},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(673.5,540,2206.5,1080);
// library properties:
lib.properties = {
	id: '96D6664B86D74BD59F6BD104097C75F4',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['96D6664B86D74BD59F6BD104097C75F4'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;