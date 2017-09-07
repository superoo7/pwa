# Progressive Web App (PWA)
My notes on PWA. 

Tools that I might use :-
* Webpack
* Gulp
* Material Design
* JS
* EcmaScript6
* React/JSX
* Polymer 2.0

# Table of Content
i)	[What are the features of PWA](#feature)

### What are the features of PWA <a name="feature"></a>
* Reliable
* Fast
* Engaging

### Some stats
- on 2015, user spends 87% of time on native app and 13% on web app (source: comScore)
- user spend 80% of their time on top 3 used app on their phone
- Web has 2.5x reach of app

### Why traditional web does not overcome issue of user not using web app
* Push notification in native app pulls user back 
* Easier to start the app with native
* Access native device feature like camera
* Work Offline 

### Why not native app?
* Learn 2 languages
* Need multiple developer
* HTML, CSS, JS
* average installed app in phone is 0

### Quick start with PWA
use of service worker `navigator.serviceWorker.register('/sw.js');`

### Core Building Blocks of PWA
Core block ~

![Core Building Blocks](./img/core-building-blocks.png) 

### Difference between SPA and PWA
SPA:
- Powered by JS
- Highly Reactive
- Only one HTML File sent to Browser

PWA
- Uses a lot of JS (Work without it too)
- Aims to have Reactivity
- Work with multiple file

### Progressive Enhancement the web app
- For old project, slowly implement some core PWA features
- For new project, fully implement PWA

### Downloadable PWA
use web manifest `manifest.json`

insert the manifest.json link in all html pages

`  <link rel="manifest" href="/manifest.json"> `

in [`manifest.json`](https://gist.github.com/superoo7/399b7646c10581eb3f03b59d80ac03d4.js)

### Adding support for Safari and IE
#### Safari on iOS
  	<!-- Apple Safari Setup -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="green">
    <meta name="apple-mobile-web-app-title" content="share-gram">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-57x57.png" sizes="57x57">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-60x60.png" sizes="60x60">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-72x72.png" sizes="72x72">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-76x76.png" sizes="76x76"> 
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-114x114.png" sizes="114x114">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-120x120.png" sizes="120x120">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-144x144.png" sizes="144x144">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-152x152.png" sizes="152x152">
    <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-180x180.png" sizes="180x180"

#### IE Support
    <!-- IE Support -->
    <meta name="msapplication-TitleImage" content="src/images/icons/app-icon-144x144.png">
    <meta name="msapplication-TitleColor" content="#fff">
    <meta name="theme-color" content="#3f51b5">

### Service Worker
_Function_
* Apps work offline
* Push notification
* Background synchronization

![Service Worker](/img/service-worker.png)

Normal way (Angular, React or Vue or whatsoever), web app run on single thread with HTML with loaded JS. JS can manipulate the DOM, allow to use SPA and widgets

Service Worker are JS that access to DOM, they run different single thread. They can listen to specific events by the server, able to use push notification. They run on background and they decoupled from HTML pages.

### Listen to Event
* Fetch
	- Browser or Page-related JS initiates a Fetch (HTTP Request)
	- Maybe IMG tag 
	- React fetch request with Service Worker (can assume they work like proxy)
	- using Fetch API
	- can manipulate the request
* Push Notification
	- From another server
	- Chrome/Firefox has push server
	- Vendor server sent push notification to the user (receive with service worker)
	- Service Worker receives Web Push Notification (from Server)
	- Alert user 
* Notification Interaction
	- User interacts with displayed Notification
* Background Sync
	- Bad internet connection, normally will fail
	- Store certain action, execute when the internet is ok back
* Service Worker Lifecycle
	- Service Worker Phase changes

### Service Worker Lifecycle
![service-lifecycle](img/service-lifecycle.png)


### Register Service Worker
- service worker js file is located at root
- any name, `sw.js`
- Register in all html (save in app.js)
- the code: 

		if ('serviceWorker' in navigator) {
			// service worker available
			navigator.serviceWorker
				.register('/sw.js', {scope: '/help'/})
				.then(function() {
					console.log('Service Worker registered');
				});
		}



### Useful Link
* [Web App Manifest - Browser Support](http://caniuse.com/#feat=web-app-manifest)
* [MDN Article on the Web App Manifest (includes List of all Properties)](https://developer.mozilla.org/en-US/docs/Web/Manifest)
* [A detailed Web App Manifest Explanation by Google](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)
* [More about the "Web App Install Banner" (including Requirements)](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/)

### Resources

