import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export const dataModel = new Vuex.Store( {
	state: {
		theDisclaimerShouldBeShown: !localStorage.getItem( 'closeDisclaimer' )
	}
	, getters: {
		theDisclaimerShouldBeShown: function ( state ) {
			return state.theDisclaimerShouldBeShown;
		}
	}
	, mutations: {
		closeTheDisclaimer: function ( state ) {
			state.theDisclaimerShouldBeShown = false;
			localStorage.setItem( 'closeDisclaimer', 'true' );
		}
	}
} );
