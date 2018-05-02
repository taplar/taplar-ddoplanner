<template>
	<div class="application">
		<application-header></application-header>
<!--
		<application-header></application-header>
		<application-body></application-body>
		<spinner></spinner>
		<main-menu></main-menu>
		<sub-menu v-for="(submenu, index) in submenus" :key="index" :submenu="submenu"></sub-menu>
-->
	</div>
</template>

<script>
	import ApplicationHeader from '../components/ApplicationHeader.vue';

	export default {
		components: {
			ApplicationHeader
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
	@import url( '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
	@import url( '//fonts.googleapis.com/css?family=Open+Sans' );
</style>

<style lang="less">
	@import '../../styles/application.less';
</style>
