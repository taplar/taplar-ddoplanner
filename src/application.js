import Vue from 'vue';
import VueResource from 'vue-resource';
import Application from './assets/javascripts/controllers/Application.vue';
import { dataModel } from './assets/javascripts/models/dataModel.js';

Vue.use( VueResource );

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

		let firstRender = document.querySelector( '.firstRender' );
		let startupCount = 0;
		
		firstRender.classList.add( 'initializing' );

		navigator.serviceWorker.register( './sw.js' ).then(
			function serviceWorkerInitialized () {
				firstRender.classList.add( 'starting' );

				ajax( 'GET', 'api/initialize' ).then(
					function () {
						firstRender.classList.remove( 'initializing' );
						firstRender.classList.remove( 'starting' );

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
						if ( startupCount++ < 10 ) {
							setTimeout( serviceWorkerInitialized, 100 * startupCount );
						} else {
							firstRender.classList.remove( 'starting' );
							firstRender.classList.add( 'startingFailure' );
						}
					}
				);
			}
			, function () {
				firstRender.classList.remove( 'initializing' );
				firstRender.classList.add( 'initializingFailure' );
			}
		);
	};
}
