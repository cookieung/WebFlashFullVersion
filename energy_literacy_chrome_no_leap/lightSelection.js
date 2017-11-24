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


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43332F").s().p("AkIBIIAAiQIIRAAIAACQg");
	this.shape.setTransform(-186.9,-136.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A4232").s().p("AjEA2IAAnVIGJAAIAAM/g");
	this.shape_1.setTransform(-186.9,-101.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#43332F").s().p("AqnBOIAAibIVPAAIAACbg");
	this.shape_2.setTransform(-104.1,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#43332F").s().p("AibALIAAgVIE3AAIAAAVg");
	this.shape_3.setTransform(-107.4,129.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#43332F").s().p("AibAKIAAgUIE3AAIAAAUg");
	this.shape_4.setTransform(-107.4,123);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#43332F").s().p("AibALIAAgVIE3AAIAAAVg");
	this.shape_5.setTransform(-107.4,116.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#43332F").s().p("AibALIAAgUIE3AAIAAAUg");
	this.shape_6.setTransform(-107.4,110);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#43332F").s().p("AibALIAAgVIE3AAIAAAVg");
	this.shape_7.setTransform(-107.4,103.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#43332F").s().p("AibALIAAgVIE3AAIAAAVg");
	this.shape_8.setTransform(-107.4,97.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E6039").s().p("AidCXIAAktIE7AAIAAEtg");
	this.shape_9.setTransform(-107.4,78.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5A4232").s().p("AjnHxIAAsOIACAAQAIhYBCg+QBCg8BZgBQBbABBCA8QBCA9AIBZIABAAIAAMOg");
	this.shape_10.setTransform(-107.5,85.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5A4232").s().p("AgQEPIAAocIAhAAIAAIcg");
	this.shape_11.setTransform(-287.2,47.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8E6039").s().p("Ag7kNIB3BGIAAGXIh3A+g");
	this.shape_12.setTransform(-279.4,47.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5A4232").s().p("AgQEPIAAocIAhAAIAAIcg");
	this.shape_13.setTransform(-212.5,47.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E6039").s().p("Ag7DQIAAmXIB3hGIAAIbg");
	this.shape_14.setTransform(-220.4,47.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8E6039").s().p("AjUDMIAAmXIGpAAIAAGXg");
	this.shape_15.setTransform(-249.4,47.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AD6725").s().p("Ag+JJIAAyRIB9AAIAASRg");
	this.shape_16.setTransform(-165.7,77);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C99154").s().p("ApyJKIAAyTITlAAIAASTg");
	this.shape_17.setTransform(-109.4,76.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#43332F").s().p("AgtHYIAAuvIBaAAIAAOvg");
	this.shape_18.setTransform(-290.8,190.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#43332F").s().p("AgsHYIAAuvIBaAAIAAOvg");
	this.shape_19.setTransform(-167.9,190.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5A4232").s().p("AgQEUIAAonIAiAAIAAIng");
	this.shape_20.setTransform(-389.2,182.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8E6039").s().p("Ag9kTIB7BIIAAGgIh7A/g");
	this.shape_21.setTransform(-381.1,181.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5A4232").s().p("AgQEUIAAonIAhAAIAAIng");
	this.shape_22.setTransform(-313,182.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8E6039").s().p("Ag8DVIAAmgIB5hIIAAIng");
	this.shape_23.setTransform(-321,181.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8E6039").s().p("AjZDQIAAmfIGzAAIAAGfg");
	this.shape_24.setTransform(-350.7,182.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5A4232").s().p("AgQEUIAAonIAiAAIAAIng");
	this.shape_25.setTransform(-266.8,182.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8E6039").s().p("Ag8kTIB5BIIAAGgIh5A/g");
	this.shape_26.setTransform(-258.8,181.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5A4232").s().p("AgREUIAAonIAiAAIAAIng");
	this.shape_27.setTransform(-190.7,182.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8E6039").s().p("Ag8DVIAAmgIB5hIIAAIng");
	this.shape_28.setTransform(-198.7,181.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8E6039").s().p("AjZDQIAAmfIGzAAIAAGfg");
	this.shape_29.setTransform(-228.3,182.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5A4232").s().p("AgREUIAAonIAiAAIAAIng");
	this.shape_30.setTransform(-144.5,182.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8E6039").s().p("Ag9kTIB7BIIAAGgIh7A/g");
	this.shape_31.setTransform(-136.5,181.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5A4232").s().p("AgREUIAAonIAiAAIAAIng");
	this.shape_32.setTransform(-68.3,182.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8E6039").s().p("Ag9DVIAAmgIB7hIIAAIng");
	this.shape_33.setTransform(-76.3,181.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8E6039").s().p("AjZDQIAAmfIGzAAIAAGfg");
	this.shape_34.setTransform(-106,182.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C99154").s().p("A7tGDIAAsGMA3bAAAIAAMGg");
	this.shape_35.setTransform(-228.8,184.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#43332F").s().p("AgtHYIAAuvIBaAAIAAOvg");
	this.shape_36.setTransform(-39.3,190.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#43332F").s().p("AgsHYIAAuvIBaAAIAAOvg");
	this.shape_37.setTransform(-417.7,190.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#43332F").s().p("Ai8ANIAAgZIF5AAIAAAZg");
	this.shape_38.setTransform(-357.6,126.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#43332F").s().p("Ai8ANIAAgZIF5AAIAAAZg");
	this.shape_39.setTransform(-357.6,118.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#43332F").s().p("Ai8ANIAAgZIF5AAIAAAZg");
	this.shape_40.setTransform(-357.6,110.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#43332F").s().p("Ai8ANIAAgZIF5AAIAAAZg");
	this.shape_41.setTransform(-357.6,103.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#43332F").s().p("Ai8ANIAAgZIF5AAIAAAZg");
	this.shape_42.setTransform(-357.6,95.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#43332F").s().p("Ai8ANIAAgZIF5AAIAAAZg");
	this.shape_43.setTransform(-357.6,87.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8E6039").s().p("Ai/C3IAAltIF/AAIAAFtg");
	this.shape_44.setTransform(-357.6,64.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5A4232").s().p("AkZHcIAAu3IIzAAIAAO3g");
	this.shape_45.setTransform(-357.6,86.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#43332F").s().p("Ak6HqIAAvTIJ2AAIAAPTg");
	this.shape_46.setTransform(-357.6,86.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#43332F").s().p("AiXCYQg/g+AAhaQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_47.setTransform(-290.1,-93.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#43332F").s().p("AjYDQIAAmfIGxAAIAAGfg");
	this.shape_48.setTransform(-290.2,-71.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#43332F").s().p("ATxK+IzxygIzwSgIjqAAIXa17IXbV7g");
	this.shape_49.setTransform(-290.3,-105.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5A4232").s().p("AQmI9IAAiJIAeAcIAABtgANPI9IAAlSIAdAcIAAE2gAJ3I9IAAocIAdAbIAAIBgAGgI9IAArlIAdAbIAALKgADJI9IAAuuIAeAbIAAOTgAgOI9IAAx5IAdAcIAARdgAjlI9IAAv/IAegbIAAQagAm9I9IAAs1IAegbIAANQgAqUI9IAApsIAegbIAAKHgAtsI9IAAmiIAegcIAAG+gAxDI9IAAjZIAegbIAAD0g");
	this.shape_50.setTransform(-284.5,-92.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5B3118").s().p("Ar5JQITxyfIECDxIwXOug");
	this.shape_51.setTransform(-340.6,-94.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#76431D").s().p("AzaJRIAAgqIC7ivIAADZgARmJQIAAhtIB0BtgAOPJQIAAk3IC6CvIAACIgAK3JQIAAoAIC6CvIAAFRgAHgJQIAArJIC6CtIAAIcgAEIJQIAAuSIC6CuIAALkgAAyJQIAAxdIC5CvIAAOugAikJQIAAwaICPiGIAqAoIAAR4gAl8JQIAAtQIC6iuIAAP+gApUJQIAAqGIC7iuIAAM0gAssJQIAAm9IC7iuIAAJrgAwDJQIAAjzIC7ivIAAGig");
	this.shape_52.setTransform(-288,-94.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#894717").s().p("AjAC4IAAlvIGBAAIAAFvg");
	this.shape_53.setTransform(-388.6,-18.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A9845B").s().p("AjAKjIAA1FIGBAAIAAVFg");
	this.shape_54.setTransform(-388.6,67.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AD6725").s().p("AvZC4IAAlvIezAAIAAFvg");
	this.shape_55.setTransform(-270.6,-18.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C99154").s().p("AyeKmIAA1LIAIAAIAAVEIGBAAIAA1EIe0AAIAAVLg");
	this.shape_56.setTransform(-290.3,67.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5A4232").s().p("A7sAsIAAhXMA3ZAAAIAABXg");
	this.shape_57.setTransform(-228.6,227.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5A4232").s().p("A+aAsIAAhXMA81AAAIAABXg");
	this.shape_58.setTransform(-227.5,141.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C0B9B1").s().p("A2YA8QpRgZAAgjQAAgiJRgZQJRgZNHAAQNIAAJRAZQJRAZAAAiQAAAjpRAZQpSAZtHAAQtGAApSgZg");
	this.shape_59.setTransform(-230.8,237.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B1ADA8").s().p("AjwFXIgBk9QAAhQA2g8QAbgeAbgNIFji5IATAdIkwClQhXAvggBNQgPAmABAdIAAEsg");
	this.shape_60.setTransform(-122.4,-203.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDEDEA").s().p("AikBVICRhXQCWhWAiAEQgpAsg+ApQh3BUhmAAIgFAAg");
	this.shape_61.setTransform(-76.3,-245.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#877F7E").s().p("AjMBCIB5hLQB7hhBggCQAwgBAVASQgqgBkhCtIgwAdg");
	this.shape_62.setTransform(-79.9,-244.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#706868").s().p("AghMQIAA4eIBDAAIAAYeg");
	this.shape_63.setTransform(-144.5,-90.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B1ADA8").s().p("ACfEXIAAj3QABgXgNgeQgZg/hHglIj1iGIAPgYIEfCWIAsAkQArAyAABAIAAECg");
	this.shape_64.setTransform(464.2,-242.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDEDEA").s().p("AgxABQgggVgdgaIgWgWQAbgDB5BGQA+AiA3AkIgDAAQhTAAhghEg");
	this.shape_65.setTransform(426.9,-276.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#877F7E").s().p("ABoBBQjtiLgfABQgGAAATgIQASgHAZABQBOABBiBPIBiA8IgYAkg");
	this.shape_66.setTransform(429.7,-276.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#706868").s().p("AgaJ4IAAzvIA1AAIAATvg");
	this.shape_67.setTransform(482.1,-151.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B1ADA8").s().p("ADrGdIAAlsQACgjgTguQgmhdhog4IlsjFIAXgjIGpDeIAUANQAYARAVAYQBABIAABgIgBF+g");
	this.shape_68.setTransform(596.4,-29.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDEDEA").s().p("AhKABQgtgfgsgmIghghQAogFC0BoQBaAzBTA1IgFAAQh6AAiQhlg");
	this.shape_69.setTransform(541.2,-79.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#877F7E").s().p("ACZBhQldjPgvABQgJAAAbgLQAcgKAkAAQBzADCTB0ICRBaIgkA0g");
	this.shape_70.setTransform(545.4,-79);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#706868").s().p("AgnOnIAA9NIBPAAIAAdNg");
	this.shape_71.setTransform(622.9,105.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5A4232").s().p("Aw+AWIAAgrMAh9AAAIAAArg");
	this.shape_72.setTransform(47.5,-57.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#43332F").s().p("AgWAjIAAhGIAtAAIAABGg");
	this.shape_73.setTransform(30.1,-52.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#43332F").s().p("AgVAjIAAhGIAsAAIAABGg");
	this.shape_74.setTransform(154,-52.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#43332F").s().p("AgWAjIAAhGIAtAAIAABGg");
	this.shape_75.setTransform(-58.9,-52.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#43332F").s().p("AiDAkIAAhHIEHAAIAABHg");
	this.shape_76.setTransform(-33.8,-164.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5A4232").s().p("AhhByIAAjmIDDAAIAADpg");
	this.shape_77.setTransform(-33.7,-156.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5B3118").s().p("ApFB/IECj8IOIAAIAAD8g");
	this.shape_78.setTransform(-25.8,-132.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#43332F").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_79.setTransform(91.1,-67.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#43332F").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_80.setTransform(91.1,-71.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#43332F").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_81.setTransform(91.1,-75.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#43332F").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_82.setTransform(91.1,-79.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#43332F").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_83.setTransform(91.1,-83);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#43332F").s().p("AhdAGIAAgLIC7AAIAAALg");
	this.shape_84.setTransform(91.1,-86.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8E6039").s().p("AheBcIAAi2IC9AAIAAC2g");
	this.shape_85.setTransform(91.1,-98.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5A4232").s().p("AiMDsIAAnXIEZAAIAAHXg");
	this.shape_86.setTransform(91.2,-87.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#43332F").s().p("AicD0IAAnnIE5AAIAAHng");
	this.shape_87.setTransform(91.1,-87.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8F643E").s().p("ApLEZIAAgOISXAAIAAAOgApLCRIAAgPISXAAIAAAPgApLAHIAAgMISXAAIAAAMgApLiBIAAgNISXAAIAAANgApLkKIAAgOISXAAIAAAOg");
	this.shape_88.setTransform(91.2,-98.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5A4232").s().p("AgHCDIAAkEIAPAAIAAEEg");
	this.shape_89.setTransform(7,-99.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8E6039").s().p("AgcBlIAAjFIA5giIAAEFg");
	this.shape_90.setTransform(3.2,-100);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5A4232").s().p("AgHCDIAAkEIAPAAIAAEEg");
	this.shape_91.setTransform(-29.1,-99.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8E6039").s().p("AgciCIA5AiIAADFIg5Aeg");
	this.shape_92.setTransform(-25.3,-100);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8E6039").s().p("AhmBjIAAjFIDNAAIAADFg");
	this.shape_93.setTransform(-11.2,-99.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5B3118").s().p("ACvCgIAAgHIg3gdIjvAAIg3AdIAAAHIgxAAIAAk/IAxAAIAAAFIA0AfID1AAIA0gfIAAgFIAxAAIAAE/g");
	this.shape_94.setTransform(-11,-99.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#43332F").s().p("AhLBLQgfgfAAgsQAAgrAfggQAfgfAsAAQAtAAAfAfQAfAgAAArQAAAsgfAfQgfAggtAAQgrAAggggg");
	this.shape_95.setTransform(91.1,-173.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#43332F").s().p("AhrBnIAAjNIDXAAIAADNg");
	this.shape_96.setTransform(91.1,-162.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#43332F").s().p("AJ1FdIp1pMIp0JMIh1AAILpq5ILqK5g");
	this.shape_97.setTransform(91.2,-179.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5A4232").s().p("AIQEdIAAh5IAPANIAABsgAGkEdIAAjeIAQAOIAADQgAE6EdIAAlBIAPANIAAE0gADPEdIAAmlIAOANIAAGYgABjEdIAAoKIAPAOIAAH8gAgGEdIAAorIANgOIAAI5gAhxEdIAAnHIAOgNIAAHUgAjcEdIAAljIAOgNIAAFwgAlHEdIAAj/IAOgOIAAENgAmzEdIAAiaIAPgOIAACogAoeEdIAAg2IAPgOIAABEg");
	this.shape_98.setTransform(88.3,-173.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5B3118").s().p("ACOEnIoInUICBh5IJ0JNg");
	this.shape_99.setTransform(116.2,-174.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#76431D").s().p("AINEnIAAhsIBdBXIAAAVgAGiEnIAAjQIBdBXIAAB5gAE3EnIAAk0IBdBWIAADegADMEnIAAmYIBdBXIAAFBgABhEnIAAn8IBdBXIAAGlgAgJEnIAAo5IAUgUIBHBDIAAIKgAh0EnIAAnUIBchXIAAIrgAjfEnIAAlwIBdhXIAAHHgAlKEnIAAkNIBchWIAAFjgAm1EnIAAioIBchXIAAD/gAohEnIAAhEIBdhXIAACbgAppEnIA6g2IAAA2g");
	this.shape_100.setTransform(90,-174.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#894717").s().p("AhfBcIAAi3IC/AAIAAC3g");
	this.shape_101.setTransform(140,-136.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A9845B").s().p("AhfFPIAAqdIC/AAIAAKdg");
	this.shape_102.setTransform(140,-93.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AD6725").s().p("AnpBcIAAi3IPTAAIAAC3g");
	this.shape_103.setTransform(81.4,-136.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C99154").s().p("ApLFRIAAqhIPTAAIAAKeIDAAAIAAqeIAEAAIAAKhg");
	this.shape_104.setTransform(91.2,-93.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_105.setTransform(-11.4,-60.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#936438").s().p("AgUAVQgJgJAAgMQAAgLAJgIQAIgJAMAAQAMAAAJAJQAJAIAAALQAAAMgJAJQgJAIgMAAQgMAAgIgIg");
	this.shape_106.setTransform(-53.4,-63.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#744828").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMg");
	this.shape_107.setTransform(-53.4,-63.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_108.setTransform(-11.4,-68.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#936438").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMABQAMgBAJAJQAJAIAAAMQAAAMgJAJQgJAIgMAAQgMAAgIgIg");
	this.shape_109.setTransform(-53.4,-71.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#744828").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMg");
	this.shape_110.setTransform(-53.4,-71.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_111.setTransform(-11.4,-76.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#936438").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMABQAMgBAJAJQAJAJAAALQAAAMgJAJQgJAIgMAAQgMAAgIgIg");
	this.shape_112.setTransform(-53.4,-79);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#744828").s().p("AgbAdQgMgMAAgRQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLAMQgMALgRAAQgPAAgMgLg");
	this.shape_113.setTransform(-53.4,-79);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_114.setTransform(-11.4,-83.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#936438").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMABQAMgBAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_115.setTransform(-53.4,-86.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#744828").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMg");
	this.shape_116.setTransform(-53.4,-86.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_117.setTransform(-11.4,-91.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#936438").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgIAMAAQAMAAAJAIQAJAJAAALQAAAMgJAJQgJAIgMAAQgMAAgIgIg");
	this.shape_118.setTransform(-53.4,-94.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#744828").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMg");
	this.shape_119.setTransform(-53.4,-94.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_120.setTransform(-11.4,-99.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#936438").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAIgMAAQgMAAgIgIg");
	this.shape_121.setTransform(-53.4,-102);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#744828").s().p("AgbAdQgMgNAAgQQAAgPAMgMQAMgMAPAAQARAAAMAMQALAMAAAPQAAAQgLANQgMALgRAAQgPAAgMgLg");
	this.shape_122.setTransform(-53.4,-102);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_123.setTransform(-11.4,-106.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#936438").s().p("AgUAVQgJgJAAgMQAAgLAJgIQAIgKAMABQAMgBAJAKQAJAIAAALQAAAMgJAJQgJAJgMgBQgMABgIgJg");
	this.shape_124.setTransform(-53.4,-109.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#744828").s().p("AgbAcQgMgMAAgQQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAAQgLAMQgMAMgRAAQgPAAgMgMg");
	this.shape_125.setTransform(-53.4,-109.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#744828").s().p("AmRAGIAAgLIMjAAIAAALg");
	this.shape_126.setTransform(-11.4,-114.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#936438").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAIgIAMgBQAMABAJAIQAJAJAAALQAAANgJAIQgJAJgMAAQgMAAgIgJg");
	this.shape_127.setTransform(-53.4,-117.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#744828").s().p("AgbAdQgMgMAAgRQAAgPAMgMQAMgMAPAAQARAAAMAMQALAMAAAPQAAARgLAMQgMALgRAAQgPAAgMgLg");
	this.shape_128.setTransform(-53.4,-117.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#936438").s().p("AmkE0IAApnINJAAIAAJng");
	this.shape_129.setTransform(-9.5,-90.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#43332F").s().p("AmHE1IAAgEQgJAEgJAAQgRAAgLgMQgMgLAAgRQAAgNAHgLQAJgLANgEQgNgDgJgLQgHgKAAgOQAAgNAHgLQAJgLANgDQgNgEgJgKQgHgLAAgOQAAgNAHgLQAJgKANgEQgNgEgJgKQgHgLAAgOQAAgNAHgLQAJgKANgEQgNgDgJgKQgHgLAAgOQAAgNAHgLQAJgKANgEQgNgEgJgKQgHgLAAgNQAAgOAHgLQAJgKANgEQgNgEgIgKQgIgLAAgNQAAgOAHgKQAJgLANgEQgNgDgJgLQgHgKAAgOQAAgRAMgLQALgMARAAQAIAAAKAEIAAgCINKAAIAAJngAmODnIAHADIAAgGgAmOCaIAHADIAAgFgAmOBNIAHACIAAgFgAmOAAIAHADIAAgFgAmOhMIAHADIAAgGgAmOiZIAHADIAAgFgAmOjmIAHADIAAgFg");
	this.shape_130.setTransform(-15.4,-90.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C0B9B1").s().p("AtRAdQlggLAAgSQAAgRFggMQFfgMHyAAQH0AAFeAMQFgAMAAARQAAASlgALQlhANnxAAQnwAAlhgNg");
	this.shape_131.setTransform(47.9,-48.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C0B9B1").s().p("AxJA7QnHgYAAgjQAAgiHHgYQHHgZKCAAQKCAAHIAZQHGAYAAAiQAAAjnGAYQnGAZqEAAQqCAAnHgZg");
	this.shape_132.setTransform(428.8,129.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5A4232").s().p("AgLD4IAAnvIAXAAIAAHvg");
	this.shape_133.setTransform(528,36.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8E6039").s().p("AgoDAIAAl2IBRhBIAAHvg");
	this.shape_134.setTransform(522.6,36.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#5A4232").s().p("AgLD4IAAnvIAXAAIAAHvg");
	this.shape_135.setTransform(476.7,36.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8E6039").s().p("Agpj3IBTBBIAAF2IhTA4g");
	this.shape_136.setTransform(482.1,36.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8E6039").s().p("AiRC7IAAl1IEjAAIAAF1g");
	this.shape_137.setTransform(502.1,36.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#5A4232").s().p("AgLD4IAAnvIAXAAIAAHvg");
	this.shape_138.setTransform(446,36.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#8E6039").s().p("AgoDAIAAl2IBRhBIAAHvg");
	this.shape_139.setTransform(440.7,36.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5A4232").s().p("AgLD4IAAnvIAXAAIAAHvg");
	this.shape_140.setTransform(394.8,36.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8E6039").s().p("Agpj3IBTBBIAAF2IhTA4g");
	this.shape_141.setTransform(400.2,36.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#8E6039").s().p("AiSC7IAAl1IElAAIAAF1g");
	this.shape_142.setTransform(420.1,36.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#43332F").s().p("Ah4ALIAAgVIDyAAIAAAVg");
	this.shape_143.setTransform(344.6,100.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#43332F").s().p("Ah4ALIAAgVIDyAAIAAAVg");
	this.shape_144.setTransform(344.6,93.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#43332F").s().p("Ah4ALIAAgVIDyAAIAAAVg");
	this.shape_145.setTransform(344.6,86.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#43332F").s().p("Ah4ALIAAgVIDyAAIAAAVg");
	this.shape_146.setTransform(344.6,80.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#43332F").s().p("Ah4ALIAAgVIDyAAIAAAVg");
	this.shape_147.setTransform(344.6,73.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#43332F").s().p("Ah4ALIAAgVIDyAAIAAAVg");
	this.shape_148.setTransform(344.6,66.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#8E6039").s().p("Ah6CdIAAk5ID1AAIAAE5g");
	this.shape_149.setTransform(344.6,47);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#5A4232").s().p("Ai0IFIAAstIABAAQAGhdAzg/QA0hABGAAQBGAAAzBAQAzA/AHBdIACAAIAAMtg");
	this.shape_150.setTransform(344.7,54.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#43332F").s().p("AjVBPIAAidIGrAAIAACdg");
	this.shape_151.setTransform(335.9,-88.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#5A4232").s().p("Aiek4IE9AAIAAH6Ik9B3g");
	this.shape_152.setTransform(336,-65.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#5A4232").s().p("AgQEdIgdgLIABouIBaAPIAAIqg");
	this.shape_153.setTransform(429,-29.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#8F643E").s().p("AqqAQIAAgfIVVAAIAAAfg");
	this.shape_154.setTransform(492.5,84.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#8F643E").s().p("AqqAQIAAgfIVVAAIAAAfg");
	this.shape_155.setTransform(492.5,48.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8F643E").s().p("AqqAPIAAgeIVVAAIAAAeg");
	this.shape_156.setTransform(492.5,12.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#5A4232").s().p("AguKHIAA0OIBdAjIAATrg");
	this.shape_157.setTransform(565.7,63.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#5A4232").s().p("AAAkwI54KwIgFhIIZ9q2IZ+K2IgEBIg");
	this.shape_158.setTransform(428.8,-26);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#43332F").s().p("AAAkTI6KK6IBLi9IY/qPIY/KPIBNC9g");
	this.shape_159.setTransform(428.8,-36.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#744828").s().p("A0qAvIAAhdMApVAAAIAABdg");
	this.shape_160.setTransform(428.8,113.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#8F643E").s().p("AqqAQIAAgfIVVAAIAAAfg");
	this.shape_161.setTransform(365.1,84.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#8F643E").s().p("AqqAQIAAgfIVVAAIAAAfg");
	this.shape_162.setTransform(365.1,48.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#8F643E").s().p("AqqAPIAAgeIVVAAIAAAeg");
	this.shape_163.setTransform(365.1,12.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C99154").s().p("AvoImIAAxLIfRAAIAARLg");
	this.shape_164.setTransform(396.6,53.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#5A4232").s().p("AgtKHIAAzrIBbgjIAAUOg");
	this.shape_165.setTransform(291.9,63.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#894717").s().p("AgFEIIAAgIIp3oHIT5IPg");
	this.shape_166.setTransform(497.4,-27.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A9845B").s().p("AlBImIAAxLIKDAAIAARLg");
	this.shape_167.setTransform(528.9,53.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#744828").s().p("AlBAvIAAhdIKDAAIAABdg");
	this.shape_168.setTransform(528.9,113.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#AD6725").s().p("AvoEdIT+oUIAAglIAsATIAsgTIAAAlIB8A1Ih4gwIJ3IHIAAAIg");
	this.shape_169.setTransform(396.6,-29.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#888888").s().p("AgKAFIgCgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUgGQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgUAFg");
	this.shape_170.setTransform(30.6,-24.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#888888").s().p("AgIAFIgBgBQgBAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAQgGQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABABAAQAAAAgBABQAAAAAAAAQAAAAgBABIgQAFg");
	this.shape_171.setTransform(26.5,-22.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#888888").s().p("AgLAHQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIATgKQAAAAABAAQAAgBAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIgTAKg");
	this.shape_172.setTransform(22.7,-21.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#888888").s().p("AgKAHQgBAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIATgMQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAQAAAAgBAAQAAABAAAAIgSAMIgBAAg");
	this.shape_173.setTransform(18.4,-18.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#888888").s().p("AgLAKQgBgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAVgQQAAgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgUAQIgCABg");
	this.shape_174.setTransform(14,-15.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#888888").s().p("AgHAOQgBAAAAgBQAAAAAAAAQgBgBAAAAQABAAAAgBIAEgJQAFgJAFgFQABAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAABQgFAFgEAIIgFAJIgCABg");
	this.shape_175.setTransform(10.2,-10.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#888888").s().p("AAAATQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQgBgDAAgKQgBgNAFgIQAAAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAQABABABAAQAAABAAABQAAAAAAABQAAAAgBABQgEAJACAUQABABAAAAQAAABgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_176.setTransform(8,-4.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#888888").s().p("AAFAUQgPgYAAgOQAAAAABgBQAAAAAAgBQAAAAABAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAAOAOAUQABABAAABQAAABAAAAQgBABAAAAQAAABgBAAIgCABQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_177.setTransform(9.4,2.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#888888").s().p("AALAVQgXgcgDgLQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQABAAABABQAAAAAAAAQABABAAABQACAHAXAdQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABIgCABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_178.setTransform(13.3,10.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#888888").s().p("AATAVIgqgjQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAABgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABIArAjQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABIgCABg");
	this.shape_179.setTransform(19.8,17.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#888888").s().p("AAXAaIg1goQgFgDAFgGQADgEAFADIA1AnQAEAEgDAFQgCADgDAAg");
	this.shape_180.setTransform(29.1,25.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#888888").s().p("AAdAYIhAgkQgFgDADgGQADgFAGADIBAAkQAFADgDAGQgCADgDAAg");
	this.shape_181.setTransform(40.9,32.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#888888").s().p("AglgKQgFgCACgGQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABgBQABAAAAAAQABAAABAAQAAABABAAIBEAfQAHADgDAGQgCAEgEAAg");
	this.shape_182.setTransform(54.1,38.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#888888").s().p("AAfAXIhFgbQgDgCgCgDQgBgEABgEQACgDADgCQAEgBAEABIBEAbQAEABACAEQABAEgBADQgCAGgHAAg");
	this.shape_183.setTransform(68.1,44.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#888888").s().p("AAhAVIhGgXQgFgBgBgDQgCgEABgEQACgDADgCQAEgCADABIBGAXQAFABABADQACAEgBAEQgCAGgHAAg");
	this.shape_184.setTransform(83.4,50.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#888888").s().p("AAjAYIhMgdQgEgBgCgEQgBgEABgDQACgEADgCQAEgBAEABIBMAdQAEABACAEQABAEgBADQgDAHgHAAg");
	this.shape_185.setTransform(98.5,56);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#888888").s().p("AAiAbIhMgcQgFgDgCgEQgDgGACgEQACgGAFgBQAFgCAFACIBMAcQAFACACAFQACAFgCAEQgDAJgJgBg");
	this.shape_186.setTransform(115.7,62);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#888888").s().p("AA2AmIh2g0QgFgCgBgFQgCgFACgFQACgFAFgCQAFgBAFACIB1A0QAFACACAFQACAFgCAFQgEAIgIAAIgFgCg");
	this.shape_187.setTransform(137.9,70.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#888888").s().p("AA8ApIiBg6QgFgCgCgFQgCgFACgFQADgFAEgCQAFgBAFACICCA6QAFACABAFQACAFgCAFQgEAIgIAAIgFgCg");
	this.shape_188.setTransform(164.5,81.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#888888").s().p("AAdA2QgEgOgMgTQgXgkglgYQgFgCgBgGQgBgFADgEQACgEAGgBQAFgCAEADQAqAbAbApQANAWAGARQABAFgCAFQgDAEgFACIgEAAQgJAAgDgJg");
	this.shape_189.setTransform(188.8,98.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#888888").s().p("AgUBRQgEgEAAgFQgBgGAEgEQAJgLAHgVQAMgqgNg3QgBgFACgFQADgEAEgCQAFgBAFADQAEADACAFQAPA+gQAyQgIAagLAOQgDAFgHAAQgFAAgDgDg");
	this.shape_190.setTransform(196.5,128);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#888888").s().p("AhtBKQgCgFABgFQACgFAEgCIBUgyQBXg1AVgdQAEgEAFgBQAFAAAEADQAEADABAFQABAGgDAEQgYAfhXA3IhaA0QgCACgEAAQgIAAgDgHg");
	this.shape_191.setTransform(167.6,158.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#888888").s().p("AiRA8QgCgFACgFQACgFAFgCIELhtQAFgCAFACQAFACACAFQACAFgCAFQgCAFgFACIkLBtIgFABQgJAAgDgIg");
	this.shape_192.setTransform(112.7,182.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#E4E4E0","#918A87"],[0,1],-23.3,-196.1,191.5,123.8).s().p("A1KPKQXVlnIeiRQPKkDjQkDQhLhfjvhmQhegok6hwQkIhdi/iNQi8iKg3iJQg4iSBvhkQB8hvE3ggQjlA7g5BiQg2BcBrBwQBqBuDvBpQD4BtFWBSQQSD5FHE5QF2FmoOHWQlCEgkUBfQhWAdhIAHMhE/AAXg");
	this.shape_193.setTransform(-3.7,101.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#424815").s().p("EheWAeLQisAAidhDQiZhBh1h1Qh2h2hBiYQhDieAAisMAJVghzQCFmaCxjHQDVjwFHAAMCo5AAAQFHAADTDtQCuDDCJGhMAKeAhzQAACshDCeQhBCYh1B2Qh3B1iXBBQifBDisAAg");
	this.shape_194.setTransform(0,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-688.8,-285.3,1377.6,570.7);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E2527").s().p("ApACMQjhg3iuh0Qg3gkgrgnIgggfIAzgJQHdGINfisQEOg2EUhnQCLg0BUgpIAzgKQrHF1pDAAQjMAAi8gvg");
	this.shape.setTransform(-0.1,217.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E2527").s().p("AlKBUQiCghhkhFQgfgVgZgXIgSgTIAdgGQESDqHvhmQD5gzDBhiIAdgGQmYDdlNAAQh1AAhrgbg");
	this.shape_1.setTransform(45.4,207.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E2527").s().p("AhWD4IAAnuICtAAIAAHug");
	this.shape_2.setTransform(112.6,198.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E2527").s().p("AjmXMQEzoiBZz6QAcmOACmnIgDlZIAlgDQATUUjWPZQhCE0hSDwQgpB3gcA7g");
	this.shape_3.setTransform(6.1,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E2527").s().p("AjpXdQEwpVBdzuQAdmLAFmdIgClQIAlgDQATUUjWPZQhCE0hSDwQgpB3gcA7g");
	this.shape_4.setTransform(-83.4,53.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2E2527").s().p("AhRBkQgIAAgEgFQgGgGAAgHIAAhSQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoIAABSQAAAHgFAGQgGAFgHAAg");
	this.shape_5.setTransform(-106.6,201.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2E2527").s().p("AhRBkQgHAAgGgFQgFgGAAgHIAAhSQAAgoAegeQAdgdAoAAQApAAAeAdQAdAeAAAoIAABSQAAAHgFAGQgGAFgHAAg");
	this.shape_6.setTransform(-17,201.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706868").s().p("Am9A3IAAhsIN7AAIAABsg");
	this.shape_7.setTransform(-62.2,252.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706868").s().p("ApOA2IAAhsISdAAIAABsg");
	this.shape_8.setTransform(-62.2,212.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E552E").s().p("AhRUQMAAAgnJQAAgjAYgZQAYgaAhAAQAiAAAYAaQAYAZAAAjMAAAAnJg");
	this.shape_9.setTransform(-62.2,299.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706868").s().p("AnBA3IAAhsIODAAIAABsg");
	this.shape_10.setTransform(-18.1,-54.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706868").s().p("ApPA3IAAhsISfAAIAABsg");
	this.shape_11.setTransform(-17.6,-94.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8E552E").s().p("AhRUVMAAAgnYQAAghAYgYQAYgYAhAAQAhAAAYAYQAZAZAAAiMAAAAnWg");
	this.shape_12.setTransform(-17.6,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2E2527").s().p("AhZBuQgIAAgGgGQgGgFAAgJIAAhaQAAgsAhghQAgggAsAAQAuAAAgAgQAgAhAAAsIAABaQAAAJgGAFQgFAGgJAAg");
	this.shape_13.setTransform(-61.3,-103.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2E2527").s().p("AhZBuQgJAAgFgGQgGgFAAgJIAAhaQAAgsAgghQAhggAsAAQAuAAAgAgQAgAhAAAsIAABaQAAAJgGAFQgGAGgIAAg");
	this.shape_14.setTransform(26.7,-103.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-137.4,242.7,566.8);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7FD4E").s().p("ApSOCIPj8kIDCB1IAAbQg");
	this.shape.setTransform(59.5,93.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,119,186.1), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7FD4E").s().p("AsvTlMAVUgn1IEKClMAAAAl8g");
	this.shape.setTransform(81.6,129.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,163.1,259.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7FD4E").s().p("ArXvkIDziLMAS8Ai4I2aAng");
	this.shape.setTransform(72.8,113.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,145.5,227.2), null);


(lib.home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ไฟดับ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1F5D4").s().p("AibhnQADg/AtgrQAtgrA+AAQA/AAAuArQAtArACA/IAAFkIk3AAg");
	this.shape.setTransform(398.3,202.5);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(675.4,145.4,1,1,0,0,0,72.8,113.5);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1158,326.2,1,1,0,0,0,81.5,129.7);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Path_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1062.2,95,1,1,0,0,0,59.5,93);
	this.instance_2.alpha = 0.301;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1F5D4").s().p("AAJBXIAAhOIBNAAIAABOgAhVBXIAAhOIBOAAIAABOgAAJgHIAAhPIBNAAIAABPgAhVgIIAAhOIBOAAIAABOg");
	this.shape_1.setTransform(677.4,184.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1F5D4").s().p("AAIBRIAAhIIBIAAIAABIgAhPBRIAAhIIBJAAIAABIgAAIgHIAAhIIBIAAIAABIgAhPgHIAAhIIBJAAIAABIg");
	this.shape_2.setTransform(779.7,186.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1F5D4").s().p("AAJBbIAAhRIBRAAIAABRgAhZBbIAAhRIBRAAIAABRgAAJgIIAAhSIBRAAIAABSgAhZgIIAAhSIBRAAIAABSg");
	this.shape_3.setTransform(779.7,121.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1F5D4").s().p("AAMCmIAAiVIBvAAIAACVgAh6CmIAAiVIBvAAIAACVgAAMgRIAAiUIBvAAIAACUgAh6gRIAAiUIBvAAIAACUg");
	this.shape_4.setTransform(1190.7,321.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1F5D4").s().p("AAMClIAAiTIBvAAIAACTgAh6ClIAAiTIBvAAIAACTgAAMgQIAAiVIBvAAIAACVgAh6gQIAAiVIBvAAIAACVg");
	this.shape_5.setTransform(1108.7,321.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1F5D4").s().p("AAKCLIAAh8IBcAAIAAB8gAhlCLIAAh8IBcAAIAAB8gAAKgOIAAh8IBcAAIAAB8gAhlgOIAAh8IBcAAIAAB8g");
	this.shape_6.setTransform(1033.2,331.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1F5D4").s().p("Ah4BOQAChBAjgsQAjgtAwAAQAwAAAkAtQAjAsACBBg");
	this.shape_7.setTransform(1033.3,301.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1F5D4").s().p("AibBLQADg/AtgqQAtgsA+AAQA/AAAtAsQAtAqADA/g");
	this.shape_8.setTransform(581.2,334.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1F5D4").s().p("AAPCdIAAiMICNAAIAACNgAibCdIAAiMICNAAIAACMgAAPgQIAAiNICNAAIAACNgAibgQIAAiNICNAAIAACNg");
	this.shape_9.setTransform(330.9,349.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1F5D4").s().p("AANCIIAAh6IB5AAIAAB6gAiGCIIAAh6IB6AAIAAB6gAANgOIAAh5IB5AAIAAB5gAiGgOIAAh5IB6AAIAAB5g");
	this.shape_10.setTransform(581,362.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1F5D4").s().p("AASC4IAAikICkAAIAACkgAi1C4IAAikIClAAIAACkgAASgTIAAikICkAAIAACkgAi1gTIAAikIClAAIAACkg");
	this.shape_11.setTransform(439.2,332.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1F5D4").s().p("AARC4IAAikIClAAIAACkgAi1C4IAAikIClAAIAACkgAARgSIAAilIClAAIAAClgAi1gSIAAilIClAAIAAClg");
	this.shape_12.setTransform(337.9,466.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E1F5D4").s().p("AARC4IAAikICkAAIAACkgAi1C4IAAikICkAAIAACkgAARgSIAAilICkAAIAAClgAi1gSIAAilICkAAIAAClg");
	this.shape_13.setTransform(460,466.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E1F5D4").s().p("AARC4IAAikIClAAIAACkgAi1C4IAAikIClAAIAACkgAARgSIAAilIClAAIAAClgAi1gSIAAilIClAAIAAClg");
	this.shape_14.setTransform(582.6,466.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14,p:{x:582.6,y:466.8}},{t:this.shape_13,p:{x:460,y:466.8}},{t:this.shape_12,p:{x:337.9,y:466.8}},{t:this.shape_11,p:{x:439.2,y:332.1}},{t:this.shape_10,p:{x:581,y:362.8}},{t:this.shape_9,p:{x:330.9,y:349.2}},{t:this.shape_8,p:{x:581.2,y:334.2}},{t:this.shape_7,p:{x:1033.3,y:301.8}},{t:this.shape_6,p:{x:1033.2,y:331.6}},{t:this.shape_5,p:{x:1108.7,y:321.8}},{t:this.shape_4,p:{x:1190.7,y:321.4}},{t:this.shape_3,p:{x:779.7,y:121.5}},{t:this.shape_2,p:{x:779.7,y:186.3}},{t:this.shape_1,p:{x:677.4,y:184.9}},{t:this.instance_2,p:{x:1062.2,y:95}},{t:this.instance_1,p:{x:1158,y:326.2}},{t:this.instance,p:{x:675.4,y:145.4}},{t:this.shape,p:{x:398.3,y:202.5}}]},26).to({state:[{t:this.shape_14,p:{x:583.3,y:466.8}},{t:this.shape_13,p:{x:460.7,y:466.8}},{t:this.shape_12,p:{x:338.5,y:466.8}},{t:this.shape_11,p:{x:439.8,y:332.1}},{t:this.shape_10,p:{x:581.6,y:362.8}},{t:this.shape_9,p:{x:331.6,y:349.2}},{t:this.shape_8,p:{x:581.8,y:334.2}},{t:this.shape_7,p:{x:1033.9,y:301.8}},{t:this.shape_6,p:{x:1033.8,y:331.6}},{t:this.shape_5,p:{x:1109.3,y:321.8}},{t:this.shape_4,p:{x:1191.4,y:321.4}},{t:this.shape_3,p:{x:780.3,y:121.5}},{t:this.shape_2,p:{x:780.3,y:186.3}},{t:this.shape_1,p:{x:678.1,y:184.9}},{t:this.instance_2,p:{x:1062.9,y:95}},{t:this.instance_1,p:{x:1158.6,y:326.2}},{t:this.instance,p:{x:676.1,y:145.4}},{t:this.shape,p:{x:399,y:202.5}}]},4).to({state:[]},1).to({state:[{t:this.shape_14,p:{x:581.9,y:466.8}},{t:this.shape_13,p:{x:459.3,y:466.8}},{t:this.shape_12,p:{x:337.1,y:466.8}},{t:this.shape_11,p:{x:438.4,y:332.1}},{t:this.shape_10,p:{x:580.2,y:362.8}},{t:this.shape_9,p:{x:330.2,y:349.2}},{t:this.shape_8,p:{x:580.4,y:334.2}},{t:this.shape_7,p:{x:1032.5,y:301.8}},{t:this.shape_6,p:{x:1032.4,y:331.6}},{t:this.shape_5,p:{x:1107.9,y:321.8}},{t:this.shape_4,p:{x:1190,y:321.4}},{t:this.shape_3,p:{x:778.9,y:121.5}},{t:this.shape_2,p:{x:778.9,y:186.3}},{t:this.shape_1,p:{x:676.7,y:184.9}},{t:this.instance_2,p:{x:1061.5,y:95}},{t:this.instance_1,p:{x:1157.2,y:326.2}},{t:this.instance,p:{x:674.7,y:145.4}},{t:this.shape,p:{x:397.6,y:202.5}}]},5).to({state:[{t:this.shape_14,p:{x:583.3,y:466.8}},{t:this.shape_13,p:{x:460.7,y:466.8}},{t:this.shape_12,p:{x:338.5,y:466.8}},{t:this.shape_11,p:{x:439.8,y:332.1}},{t:this.shape_10,p:{x:581.6,y:362.8}},{t:this.shape_9,p:{x:331.6,y:349.2}},{t:this.shape_8,p:{x:581.8,y:334.2}},{t:this.shape_7,p:{x:1033.9,y:301.8}},{t:this.shape_6,p:{x:1033.8,y:331.6}},{t:this.shape_5,p:{x:1109.3,y:321.8}},{t:this.shape_4,p:{x:1191.4,y:321.4}},{t:this.shape_3,p:{x:780.3,y:121.5}},{t:this.shape_2,p:{x:780.3,y:186.3}},{t:this.shape_1,p:{x:678.1,y:184.9}},{t:this.instance_2,p:{x:1062.9,y:95}},{t:this.instance_1,p:{x:1158.6,y:326.2}},{t:this.instance,p:{x:676.1,y:145.4}},{t:this.shape,p:{x:399,y:202.5}}]},1).to({state:[]},5).to({state:[{t:this.shape_14,p:{x:583.3,y:468.8}},{t:this.shape_13,p:{x:460.7,y:468.8}},{t:this.shape_12,p:{x:338.5,y:468.8}},{t:this.shape_11,p:{x:439.8,y:334.1}},{t:this.shape_10,p:{x:581.6,y:364.8}},{t:this.shape_9,p:{x:331.6,y:351.2}},{t:this.shape_8,p:{x:581.8,y:336.2}},{t:this.shape_7,p:{x:1033.9,y:303.8}},{t:this.shape_6,p:{x:1033.8,y:333.6}},{t:this.shape_5,p:{x:1109.3,y:323.8}},{t:this.shape_4,p:{x:1191.4,y:323.4}},{t:this.shape_3,p:{x:780.3,y:123.5}},{t:this.shape_2,p:{x:780.3,y:188.3}},{t:this.shape_1,p:{x:678.1,y:186.9}},{t:this.instance_2,p:{x:1062.9,y:97}},{t:this.instance_1,p:{x:1158.6,y:328.2}},{t:this.instance,p:{x:676.1,y:147.4}},{t:this.shape,p:{x:399,y:204.5}}]},10).wait(48));

	// สายไฟ
	this.instance_3 = new lib.Tween16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(156.5,109.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// Layer 1
	this.instance_4 = new lib.Tween18("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(688.8,285.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27.9,1377.6,598.6);


// stage content:
(lib.lightSelection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.home();
	this.instance.parent = this;
	this.instance.setTransform(962.3,83.2,0.458,0.458,0,0,0,689,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1606.5,162.9,631.5,274.3);
// library properties:
lib.properties = {
	width: 1920,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
