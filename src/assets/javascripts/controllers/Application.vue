<template>
	<section class="application display-none">
		<application-header></application-header>
		<application-content></application-content>
	</section>
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
