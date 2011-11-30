// Returns stored value
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.reqtype == "compact")
		sendResponse({data: localStorage});
	else
		sendResponse({}); // snub them
});

// Show options after installation
function install_notice() {
	if (localStorage.getItem('install_time'))
		return;

	var now = new Date().getTime();
	localStorage.setItem('install_time', now);
	chrome.tabs.create({url: "../html/options.html"});
}

install_notice();