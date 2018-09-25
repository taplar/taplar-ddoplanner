<template>
	<section class="application-content center layout-container-margin position-absolute">
		<disclaimer v-if="theDisclaimerShouldBeShown"></disclaimer>
		<!-- <build-container v-if="!theDisclaimerShouldBeShown"></build-container> -->
	</section>
</template>

<script>
	//import BuildContainer from './builds/BuildContainer.vue';
	import Disclaimer from './Disclaimer.vue';

	export default {
		components: {
			//BuildContainer
			Disclaimer
		}
		, computed: {
			theDisclaimerShouldBeShown: function () {
				return this.$store.getters.theDisclaimerShouldBeShown;
			}
		}
	}
</script>
