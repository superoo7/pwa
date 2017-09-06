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

### What feature of PWA?
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
use web manifest `manidest.json`

insert the manifest.json link in all html pages

`  <link rel="manifest" href="/manifest.json"> `


### Resources

