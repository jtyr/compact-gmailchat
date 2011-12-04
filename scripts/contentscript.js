(function() {
	chrome.extension.sendRequest({reqtype: 'compact'}, function(response) {
		var css = '';
		var root_gmail = 'div[class="ApVoH s"] ';
		var root_gplus = 'div[class="CSS_LAYOUT_COMPONENT CSS_CHAT_ROSTER"] ';
		var hide_style = '{ display: none !important; }' + "\n";
		var o = response.data;

		// Title
		if (o.title == 'true') {
			css += root_gmail + 'div.r ' + hide_style;
			css += root_gplus + 'table.roster_header' + hide_style;
		}

		// Search
		if (o.search == 'true') {
			css += root_gmail + 'div.dF ' + hide_style;
			css += root_gplus + 'div.CSS_ME_ENTRY_SEARCH_DIV' + hide_style;
		}

		// Status
		if (o.status == 'true') {
			css += root_gmail + 'div.uk ' + hide_style;
			css += root_gplus + 'div.me_widget_area' + hide_style;
		}

		// Invisible
		if (o.invisible == 'true') {
			css += root_gmail + 'div.pt div.ul ' + hide_style;
			css += root_gplus + 'div[id=":rn"]' + hide_style;
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
