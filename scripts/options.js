// List of checkboxes
var ch = ['title', 'search', 'status', 'invisible'];

// Saves options to localStorage
function save_options() {
	for (var i = 0; i<ch.length; i++) {
		var n = document.getElementById(ch[i]);
		localStorage[ch[i]] = n.checked;
	}

	// Update status to let user know options were saved
	toggleMessage(true);
	setTimeout(function() {
		toggleMessage(false);
	}, 1000);
}

// Toggle visibility of Save button and message field
function toggleMessage(status) {
	msg = document.getElementById('msg');
	save = document.getElementById('save');

	if (status) {
		save.style.display = 'none';
		msg.style.display = 'inline';
	} else {
		save.style.display = 'inline';
		msg.style.display = 'none';
	}
}

// Restores select box state to saved value from localStorage
function restore_options() {
	for (var i = 0; i<ch.length; i++) {
		var val = localStorage[ch[i]];
		var elem = document.getElementById(ch[i]);
		if (val == 'true') {
			elem.checked = true;
		} else {
			elem.checked = false;
		}
	}
}
