var LeapCallback = null;

Leap.loop(function(frame) {
	var fingersInfo = [],
		handsInfo = [],
		iBox = frame.interactionBox;

	for (var f=0; f<frame.fingers.length; f++) {
		var finger = frame.fingers[f],
			normalizedPosition = iBox.normalizePoint(finger.stabilizedTipPosition, true);
		fingersInfo.push(normalizedPosition);
	}
	for (var h=0; h<frame.hands.length; h++) {
		var hand = frame.hands[h],
			normalizedPosition = iBox.normalizePoint(hand.palmPosition, true),
			handVelocity = hand.palmVelocity;
		handsInfo.push([normalizedPosition[0], normalizedPosition[1], normalizedPosition[2], handVelocity[0], handVelocity[1], handVelocity[2]]);
	}

	//check callback before call callback
	LeapCallback({
		"fingers": fingersInfo,
		"hands": handsInfo
	});

});



external.AddListenerForLeapMotion = function(callback) {
	LeapCallback = callback;
}
