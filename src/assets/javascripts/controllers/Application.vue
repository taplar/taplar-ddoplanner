<template>
	<div class="application">
		<application-header></application-header>
		<application-content></application-content>
<!--
		<application-header></application-header>
		<application-body></application-body>
		<spinner></spinner>
		<main-menu></main-menu>
		<sub-menu v-for="(submenu, index) in submenus" :key="index" :submenu="submenu"></sub-menu>
-->
<!--
	@import url( '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
-->
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
		, data: function () {
			return {
			}
		}
		, methods: {
		}
	}
</script>

<style>
	@import url( '//fonts.googleapis.com/css?family=Open+Sans' );
</style>

<style lang="less">
	@import '../../styles/application.less';
</style>
