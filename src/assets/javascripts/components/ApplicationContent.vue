<template>
	<div class="application-content row position-absolute z-index-100">
		<disclaimer v-if="theDisclaimerShouldBeShown"></disclaimer>
		<build-container v-if="!theDisclaimerShouldBeShown"></build-container>
	</div>
</template>

<script>
	import BuildContainer from './builds/BuildContainer.vue';
	import Disclaimer from './Disclaimer.vue';

	export default {
		components: {
			BuildContainer
			, Disclaimer
		}
		, computed: {
			theDisclaimerShouldBeShown: function () {
				return this.$store.getters.theDisclaimerShouldBeShown;
			}
		}
	}
</script>
