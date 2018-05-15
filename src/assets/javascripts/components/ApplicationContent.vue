<template>
	<div class="row content">
		<disclaimer v-if="theDisclaimerShouldBeShown"></disclaimer>
	</div>
</template>

<script>
	import Disclaimer from '../components/Disclaimer.vue';

	export default {
		components: {
			Disclaimer
		}
		, computed: {
			theDisclaimerShouldBeShown: function () {
				return this.$store.getters.theDisclaimerShouldBeShown;
			}
		}
	}
</script>
