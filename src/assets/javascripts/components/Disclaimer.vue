<template>
	<div class="row">
		<div class="font-size-3 disclaimer">
			<p class="col-xs-12 no-margin-top">
				<em>DDO Planner</em> is a fan site for the <a href="http://www.ddo.com/" target="_new" class="external-link">MMORPG Dungeons &amp; Dragons Online</a>.
			</p>

			<p class="col-xs-12">
				<em>DDO Planner</em> claims no copyright with regard to the information provided within, nor any affiliation with any company holding a copyright of or related to the information provided within.  The accuracy and completeness of the information provided within is not guaranteed and by interacting with <em>DDO Planner</em> the user agrees that <em>DDO Planner</em> is not responsible for any negative outcome that may result from using the information provided.
			</p>

			<div class="center col-xs-12 font-size-5 close-container">
				<label class="close" @click="closeTheDisclaimer">Continue</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			closeTheDisclaimer: function () {
				this.$store.commit( 'closeTheDisclaimer' );
			}
		}
	}
</script>
