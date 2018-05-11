workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^http[s]?:\/\/fonts.googleapis.com\/(.*)/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^http[s]?:\/\/fonts.gstatic.com\/(.*)/, workbox.strategies.staleWhileRevalidate(), 'GET');

var DDOPlanner = ( function () {
	let dataStore = {};

	let functions = {
	};

	let api = {
		initialize: function () {
		}
	};

	return api;
}() );

DDOPlanner.initialize();
