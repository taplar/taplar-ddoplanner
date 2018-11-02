require( './assets/styles/application.less' );

import Vue from 'vue';
import VueResource from 'vue-resource';
import Application from './assets/javascripts/controllers/Application.vue';
import { dataModel } from './assets/javascripts/models/dataModel.js';

Vue.use( VueResource );

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
	if ( showTheElement ) {
		element.classList.remove( 'display-none' );
	} else {
		element.classList.add( 'display-none' );
	}

	element.setAttribute( 'aria-hidden', !showTheElement );
}

window.onload = function () {
	let firstRender = document.querySelector( '.firstRender section' );
	let initializing = firstRender.querySelector( '.initializing' );
	let initializingFailure = firstRender.querySelector( '.initializingFailure' );
	let startButton = firstRender.querySelector( '.startButton' );
	let startupCount = 0;

	startButton.addEventListener( 'click', function () {
		showTheElement( document.querySelector( '.firstRender' ), false );
		showTheElement( document.querySelector( '.application' ), true );
	} );

	if ( 'serviceWorker' in navigator ) {
		showTheElement( initializing, true );

		navigator.serviceWorker.register( './sw.js' ).then(
			function serviceWorkerInitialized () {
				setTimeout( function () {
					ajax( 'GET', './api/initialize' ).then(
						function () {
							new Vue( {
								el: document.querySelector( '#application' )
								, components: { Application }
								, render: function ( h ) {
									return h( 'application' );
								}
								, store: dataModel
							} );

							showTheElement( startButton, true );
						}
						, function () {
							if ( startupCount < 10 ) {
								serviceWorkerInitialized();
							} else {
								if ( sessionStorage.getItem( 'initializeAfterRefreshFailed') ) {
									sessionStorage.removeItem( 'initializeAfterRefreshFailed')
									showTheElement( initializingFailure, true );
								} else {
									sessionStorage.setItem( 'initializeAfterRefreshFailed', 'true' );
									window.location.reload();
								}
							}
						}
					);
				}, 100 * ++startupCount );
			}
			, function () {
				showTheElement( initializingFailure, true );
			}
		);
	} else {
		showTheElement( initializingFailure, true );
	}
};
