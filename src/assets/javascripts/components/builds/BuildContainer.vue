<template>
	<section class="build-container layout-row">
		<build-main-menu v-show="showTheBuildMainMenu"></build-main-menu>
	</section>
</template>

<script>
	import BuildMainMenu from './BuildMainMenu.vue';

	export default {
		components: {
			BuildMainMenu
		}
		, computed: {
			showTheBuildMainMenu: function () {
				return !this.$store.getters.activeBuild;
			}
		}
		, created: function () {
			this.$http.get( 'api/builds' ).then( function ( xhr ) {
				var builds = [];

				if ( xhr.status === 200 ) {
					builds = xhr.body;
				}

				this.$store.commit( 'updateTheBuilds', builds );
			} );
		}
	}
</script>
