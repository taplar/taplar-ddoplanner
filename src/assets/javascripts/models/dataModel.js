import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export const dataModel = new Vuex.Store( {
	state: {
		activeBuild: undefined
		, builds: {}
		, theDisclaimerShouldBeShown: !localStorage.getItem( 'hideTheDisclaimer' )
	}
	, getters: {
		activeBuild: function ( state ) {
			return state.activeBuild;
		}
		, builds: function ( state ) {
			return state.builds;
		}
		, theDisclaimerShouldBeShown: function ( state ) {
			return state.theDisclaimerShouldBeShown;
		}
	}
	, mutations: {
		hideTheDisclaimer: function ( state ) {
			state.theDisclaimerShouldBeShown = false;
			localStorage.setItem( 'hideTheDisclaimer', 'true' );
		}
		, selectBuild: function ( state, buildId ) {
			state.activeBuild = ( state.builds || {} )[ buildId ];
		}
		, updateTheBuilds: function ( state, builds ) {
			state.builds = ( builds || [] ).reduce( function ( buildsById, build ) {
				buildsById[ build.id ] = build;

				return buildsById;
			}, {} );
		}
	}
} );
