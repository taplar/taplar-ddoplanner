import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export const dataModel = new Vuex.Store( {
	state: {
		activeBuild: undefined
		, builds: {}
		, buildSteps: {
			abilitiesStepLocked: true
			, classesStepLocked: true
			, enhancementsStepLocked: true
			, featsStepLocked: true
			, spellsStepLocked: true
			, summaryStepLocked: true
		}
		, theBuildStepsShouldBeShown: false
		, theDisclaimerShouldBeShown: !localStorage.getItem( 'hideTheDisclaimer' )
	}
	, getters: {
		abilitiesStepLocked: function ( state ) {
			return state.buildSteps.abilitiesStepLocked;
		}
		, activeBuild: function ( state ) {
			return state.activeBuild;
		}
		, builds: function ( state ) {
			return state.builds;
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
		, selectBuild: function ( state, buildId ) {
			state.activeBuild = ( state.builds || {} )[ buildId ];
		}
		, showTheBuildSteps: function ( state ) {
			state.theBuildStepsShouldBeShown = true;
		}
		, updateTheBuilds: function ( state, builds ) {
			state.builds = ( builds || [] ).reduce( function ( buildsById, build ) {
				buildsById[ build.id ] = build;

				return buildsById;
			}, {} );
		}
	}
} );
