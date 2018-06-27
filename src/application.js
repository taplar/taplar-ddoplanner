import Vue from 'vue';
import VueResource from 'vue-resource';
import Application from './assets/javascripts/controllers/Application.vue';
import { dataModel } from './assets/javascripts/models/dataModel.js';

Vue.use( VueResource );
/*
if ( 'serviceWorker' in navigator ) {
	window.onload = function () {
		function ajax ( type, url ) {
			return new Promise( function ( resolve, reject ) {
				var xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function () {
					if ( xhr.readyState === XMLHttpRequest.DONE ) {
						if ( xhr.status >= 200 && xhr.status <= 299 ) {
							resolve();
						} else {
							reject();
						}
					}
				};
	
				xhr.open( type, url, true );
				xhr.send();
			} );
		}

		navigator.serviceWorker.register( './sw.js' ).then( function serviceWorkerInitialized () {
			ajax( 'GET', 'api/initialize' ).then(
				function () {
					new Vue( {
						el: document.getElementById( 'application' )
						, components: { Application }
						, render: function ( h ) {
							return h( 'application' );
						}
						, store: dataModel
					} );
				}
				, function () {
					setTimeout( serviceWorkerInitialized, 100 );
				}
			);
		} );
	};
}
*/