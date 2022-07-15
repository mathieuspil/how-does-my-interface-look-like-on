document.addEventListener("DOMContentLoaded", function(event) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const url = urlParams.get('url');
	if (url !== '') {
		if (typeof url === 'undefined') {
			document.getElementById("url").value = url;

			var iframes = document.getElementsByTagName('iframe');

			for (var z = 0; z < iframes.length; z++) {
				iframes[z].setAttribute("src", url);
			}
		}
	}
});