import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export const dataModel = new Vuex.Store( {
	state: {
	}
	, getters: {
		disclaimerShouldBeShown: function () {
			return !localStorage.getItem( 'closeDisclaimer' );
		}
	}
	, mutations: {
	}
} );
