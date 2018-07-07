require( './assets/styles/application.less' );

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

		function showTheElement ( element, showTheElement ) {
			element.style.display = showTheElement ? 'inherit' : '';
			element.setAttribute( 'aria-hidden', !showTheElement );
		}

		let firstRender = document.querySelector( '.firstRender section' );
		let initializing = firstRender.querySelector( '.initializing' );
		let initializingFailure = firstRender.querySelector( '.initializingFailure' );
		let starting = firstRender.querySelector( '.starting' );
		let startingFailure = firstRender.querySelector( '.startingFailure' );
		let startupCount = 0;

		showTheElement( initializing, true );

		navigator.serviceWorker.register( './sw.js' ).then(
			function serviceWorkerInitialized () {
				showTheElement( starting, true );

				setTimeout( function () {
					ajax( 'GET', './api/initialize' ).then(
						function () {
							showTheElement( initializing, false );
							showTheElement( starting, false );

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
							if ( startupCount < 10 ) {
								serviceWorkerInitialized();
							} else {
								showTheElement( starting, false );
								showTheElement( startingFailure, true );
							}
						}
					);
				}, 100 * ++startupCount );
			}
			, function () {
				showTheElement( initializing, false );
				showTheElement( initializingFailure, true );
			}
		);
	};
}
