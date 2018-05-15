<template>
	<div class="fixed-top-left row z-index-100 header">
		<h3 class="center col-xs-12 font-size-5 no-margin title">DDO Planner</h3>
		<build-steps v-if="theBuildStepsShouldBeShown"></build-steps>
	</div>
</template>

<script>
	import BuildSteps from '../components/BuildSteps.vue';

	export default {
		components: {
			BuildSteps
		}
		, computed: {
			theBuildStepsShouldBeShown: function () {
				return !this.$store.getters.theDisclaimerShouldBeShown;
			}
		}
	}
</script>
