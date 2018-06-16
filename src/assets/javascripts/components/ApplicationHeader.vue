<template>
	<div class="header container-fluid position-fixed z-index-200">
		<div class="row">
			<h3 class="title col-xs-12 center font-size-5 no-margin">DDO Planner</h3>
			<build-steps></build-steps>
		</div>
	</div>
</template>

<script>
	import BuildSteps from './BuildSteps.vue';

	export default {
		components: {
			BuildSteps
		}
	}
</script>
