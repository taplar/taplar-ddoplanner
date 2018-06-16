<template>
	<div class="build-container">
		<span style="color:white;">This is a build container</span>
	</div>
</template>

<script>
	export default {
		components: {
		}
		, created: function () {
			this.$http.get( 'api/builds' ).then( function ( xhr ) {
				
			} );
		}
	}
</script>
