if ('serviceWorker' in navigator) {
	// service worker available
	navigator.serviceWorker
		.register('/sw.js')
		.then(function() {
			console.log('Service Worker registered');
		});
}

