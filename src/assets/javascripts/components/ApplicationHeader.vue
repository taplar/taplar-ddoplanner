<template>
	<header class="header">
		<h3 class="title">DDO Planner</h3>
		<build-steps v-if="theBuildStepsShouldBeShown"></build-steps>
	</header>
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
