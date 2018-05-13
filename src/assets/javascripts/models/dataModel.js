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
		, theDisclaimerShouldBeShown: !localStorage.getItem( 'closeDisclaimer' )
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
		, theDisclaimerShouldBeShown: function ( state ) {
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
