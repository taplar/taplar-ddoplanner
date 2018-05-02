if ( 'serviceWorker' in navigator ) {
	window.addEventListener( 'load', function () {
		navigator.serviceWorker.register( './sw.js' );
	} );
}

import Vue from 'vue';
import VueResource from 'vue-resource';
import Application from './assets/javascripts/controllers/Application.vue';
import { dataModel } from './assets/javascripts/models/dataModel.js';

Vue.use( VueResource );

new Vue( {
	el: document.getElementById( 'application' )
	, components: { Application }
	, render: function ( h ) {
		return h( 'application' );
	}
	, store: dataModel
} );
