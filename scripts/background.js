// Returns stored value
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.reqtype == "compact")
		sendResponse({data: localStorage});
	else
		sendResponse({}); // snub them
});
