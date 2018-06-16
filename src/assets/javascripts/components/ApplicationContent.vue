<template>
	<div class="content row position-absolute z-index-100">
		<disclaimer></disclaimer>
		<build-container></build-container>
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
	}
</script>
