(function() {
	chrome.extension.sendRequest({reqtype: 'compact'}, function(response) {
		var css = '';
		var root = 'div[class="ApVoH s"] ';
		var o = response.data;

		// Title
		if (o.title == 'true') {
			css += root + 'div.r { display: none !important; }';
		}

		// Search
		if (o.search == 'true') {
			css += root + 'div.dF { display: none !important; }';
		}

		// Status
		if (o.status == 'true') {
			css += root + 'div.uk { display: none !important; }';
		}

		// Invisible
		if (o.invisible == 'true') {
			css += root + 'div.pt div.ul { display: none !important; }';
		}

		// Apply the CSS
		if (typeof GM_addStyle != 'undefined') {
			GM_addStyle(css);
		} else if (typeof PRO_addStyle != 'undefined') {
			PRO_addStyle(css);
		} else if (typeof addStyle != 'undefined') {
			addStyle(css);
		} else {
			var heads = document.getElementsByTagName('head');
			if (heads.length > 0) {
				var node = document.createElement('style');
				node.type = 'text/css';
				node.appendChild(document.createTextNode(css));
				heads[0].appendChild(node);
			}
		}
	});
})();
