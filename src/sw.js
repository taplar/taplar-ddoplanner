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
