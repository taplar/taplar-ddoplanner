<template>
	<div class="header fixed-top-left row z-index-200">
		<h3 class="title center col-xs-12 font-size-5 no-margin">DDO Planner</h3>
		<build-steps></build-steps>
	</div>
</template>

<script>
	import BuildSteps from '../components/BuildSteps.vue';

	export default {
		components: {
			BuildSteps
		}
	}
</script>
