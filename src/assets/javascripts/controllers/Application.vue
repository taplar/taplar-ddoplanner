<template>
	<div class="application container-fluid display-none position-relative z-index-0">
		<application-header></application-header>
		<application-content></application-content>
	</div>
</template>

<script>
	import ApplicationHeader from '../components/ApplicationHeader.vue';
	import ApplicationContent from '../components/ApplicationContent.vue';

	export default {
		components: {
			ApplicationHeader
			, ApplicationContent
		}
	}
</script>
