

function createSerialPort() {
	var serialObj = {},
		ws;

	serialObj.foundCmd = false;
	serialObj.portName = null;
	serialObj.curCmd = null;
	serialObj.ready = false;
	serialObj.serCCmd = [];
    serialObj.serSCmd = [];

	ws = new WebSocket("ws://localhost:8989/ws");
	serialObj.ws = ws;

	//command list on websocket establish and get comport name
	ws.onopen = function(e) {
		var ws = serialObj.ws,
			cmdStr = "list";

		serialObj.foundCmd = false;
		serialObj.curCmd = cmdStr;

		ws.onmessage = function(e) {
			var recmsg = e.data;
			console.log(recmsg);
			if (recmsg==serialObj.curCmd) {
				serialObj.foundCmd = true;
			} else if (recmsg.substr(0,1)=="{" && recmsg.slice(-1)=="}") {
				if (serialObj.foundCmd) {
					serialObj.result = JSON.parse(recmsg);
					var sp = serialObj.result.SerialPorts,
						lenSer = sp.length;
					for (var i=0; i<lenSer; i++) {
						if (sp[i].UsbVid=="1A86" && sp[i].UsbPid=="7523") {
							serialObj.portName = sp[i].Name;
						}
					}
				}
			}
		};

		ws.send(cmdStr);

	};

	//open function
	serialObj.open = function(callback) {
		var ws = serialObj.ws,
			cmdStr = "open {portname} 9600 default".replace("{portname}", serialObj.portName);

		serialObj.foundCmd = false;
		serialObj.curCmd = cmdStr;

		ws.onmessage = function(e) {
			var recmsg = e.data;
			console.log(recmsg);
			if (recmsg==serialObj.curCmd) {
				serialObj.foundCmd = true;
			} else if (recmsg.substr(0,1)=="{" && recmsg.slice(-1)=="}") {
				if (serialObj.foundCmd) {
					serialObj.result = JSON.parse(recmsg);
					if (serialObj.result.Cmd=="Open") {
						console.log("{text}: complete".replace("{text}", serialObj.curCmd));
						if (typeof callback != "undefined") {
							callback();
						}
					} else if (serialObj.result.Cmd=="OpenFail") {
						serialObj.close(function() {serialObj.open(callback);});
					}
				}
			}
		};

		ws.send(cmdStr);

	}

	//close function
	serialObj.close = function(callback) {
		var ws = serialObj.ws,
			cmdStr = "close {portname}".replace("{portname}", serialObj.portName);

		serialObj.foundCmd = false;
		serialObj.curCmd = cmdStr;

		ws.onmessage = function(e) {
			var recmsg = e.data;
			console.log(recmsg);
			if (recmsg==serialObj.curCmd) {
				serialObj.foundCmd = true;
			} else if (recmsg.substr(0,1)=="{" && recmsg.slice(-1)=="}") {
				if (serialObj.foundCmd) {
					serialObj.result = JSON.parse(recmsg);
					if (typeof callback != "undefined") {
						callback();
					}
				}
			}
		};

		ws.send(cmdStr);

	}


	//write function
	serialObj.write = function(sercmd) {
		var ws = serialObj.ws,
			data = {"P": serialObj.portName, "Data": [{"D": sercmd, "Id": "1234"}]},
			cmdStr = "sendjson "+JSON.stringify(data);
			//cmdStr = "sendjson {\"P\":\"{portname}\", \"Data\":[{\"D\":\"{command}\",\"Id\":\"1234\"}]}".
			//	replace("{portname}", serialObj.portName).
			//	replace("{command}", sercmd);

		serialObj.foundCmd = false;
		serialObj.curCmd = cmdStr;

		ws.onmessage = function(e) {
			var recmsg = e.data;
			//console.log(recmsg);
			if (recmsg==serialObj.curCmd) {
				serialObj.foundCmd = true;
			} else if (recmsg.substr(0,1)=="{" && recmsg.slice(-1)=="}") {
				if (serialObj.foundCmd) {
					serialObj.result = JSON.parse(recmsg);
				}
			}
		};

		ws.send(cmdStr);

	}

	//serialObj.write("wrled:0:1");

	return serialObj;
}

serialObj = createSerialPort();


function serialOpenChain() {
	if (serialObj.ws.readyState==1 && serialObj.portName!=null) {
		serialObj.open(function() {serialObj.ready = true;});
	} else {
		setTimeout(serialOpenChain, 1000);
	}
}

setTimeout(serialOpenChain, 1000);

setInterval(function() {
	if (serialObj.ready) {
		//console.log("I am ready");
		var sercmd = "";

		while (serialObj.serSCmd.length>0) {
			var s = serialObj.serSCmd.pop(),
				id = s.id,
				intense = s.intense;
			sercmd += "wrled:{id}:{intense}\n".replace("{id}", id).replace("{intense}", intense);
			for (var i=0; i<serialObj.serCCmd.length; i++) {
				var c = serialObj.serCCmd[i];
				if (id==c.id) {
					serialObj.serCCmd.splice(i, 1);
					break;
				}
			}
		}

		for (var i=0; i<serialObj.serCCmd.length; i++) {
			var c = serialObj.serCCmd[i],
				id = c.id,
				freq = c.freq,
				now = c.now,
				bool = c.bool;
				var intense;
				if(bool) intense = Math.floor(31*(Math.sin(2*Math.PI*freq*now)+1)/2);
				else intense = Math.floor(31*freq);
			sercmd += "wrled:{id}:{intense}\n".replace("{id}", id).replace("{intense}", intense);
			c.now += 0.1;
		}

		if (sercmd!="") {
			serialObj.write(sercmd);
		}
	}
}, 100);


external.LedIntensity = function(id, intensity) {
	serialObj.serSCmd.push({
		"id": id,
		"intense": Math.floor(31*intensity)
	});
}

external.LedBlink = function(id, freq, bool) {
	for (var i=0; i<serialObj.serCCmd.length; i++) {
		var c = serialObj.serCCmd[i];
		if (id==c.id) {
			serialObj.serCCmd.splice(i, 1);
			break;
		}
	}
	serialObj.serCCmd.push({
		"id": id,
		"freq": freq,
		"now": 0,
		"bool": bool
	});
}
