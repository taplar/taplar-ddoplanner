import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export const dataModel = new Vuex.Store( {
	state: {
		buildSteps: {
			abilitiesStepLocked: true
			, classesStepLocked: true
			, enhancementsStepLocked: true
			, featsStepLocked: true
			, spellsStepLocked: true
			, summaryStepLocked: true
		}
		, theBuildStepsShouldBeShown: !!localStorage.getItem( 'hideTheDisclaimer' )
		, theDisclaimerShouldBeShown: !localStorage.getItem( 'hideTheDisclaimer' )
	}
	, getters: {
		abilitiesStepLocked: function ( state ) {
			return state.buildSteps.abilitiesStepLocked;
		}
		, classesStepLocked: function ( state ) {
			return state.buildSteps.classesStepLocked;
		}
		, enhancementsStepLocked: function ( state ) {
			return state.buildSteps.enhancementsStepLocked;
		}
		, featsStepLocked: function ( state ) {
			return state.buildSteps.featsStepLocked;
		}
		, spellsStepLocked: function ( state ) {
			return state.buildSteps.spellsStepLocked;
		}
		, summaryStepLocked: function ( state ) {
			return state.buildSteps.summaryStepLocked;
		}
		, theBuildStepsShouldBeShown: function ( state ) {
			return state.theBuildStepsShouldBeShown;
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
		, hideTheBuildSteps: function ( state ) {
			state.theBuildStepsShouldBeShown = false;
		}
		, showTheBuildSteps: function ( state ) {
			state.theBuildStepsShouldBeShown = true;
		}
	}
} );
