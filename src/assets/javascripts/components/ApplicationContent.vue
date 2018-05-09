<template>
	<div class="content">
		<disclaimer v-show="disclaimerShouldBeShown"></disclaimer>
	</div>
</template>

<script>
	import Disclaimer from '../components/Disclaimer.vue';

	export default {
		components: {
			Disclaimer
		}
		, computed: {
			disclaimerShouldBeShown: function () {
				return this.$store.getters.disclaimerShouldBeShown;
			}
		}
		, methods: {
		}
	}
</script>
