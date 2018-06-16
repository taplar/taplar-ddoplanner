import Vue from 'vue';
import VueResource from 'vue-resource';
import Application from './assets/javascripts/controllers/Application.vue';
import { dataModel } from './assets/javascripts/models/dataModel.js';

Vue.use( VueResource );

if ( 'serviceWorker' in navigator ) {
	window.onload = function () {
		navigator.serviceWorker.register( './sw.js' ).then( function ( registration ) {
			setTimeout( function () {
				var httpRequest = ( XMLHttpRequest ) ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );

				httpRequest.onreadystatechange = function () {
					if ( httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200 ) {
						new Vue( {
							el: document.getElementById( 'application' )
							, components: { Application }
							, render: function ( h ) {
								return h( 'application' );
							}
							, store: dataModel
						} );
					}
				};
	
				httpRequest.open( 'GET', 'api/initialize', true );
				httpRequest.send();
			}, 500 );
		} );
	};
}
