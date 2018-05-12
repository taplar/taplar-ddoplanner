<template>
	<div class="disclaimer">
		<p>
			<em>DDO Planner</em> is a fan site for the <a href="http://www.ddo.com/" target="_new" class="external-link">MMORPG Dungeons &amp; Dragons Online</a>.
		</p>

		<p>
			<em>DDO Planner</em> claims no copyright with regard to the information provided within, nor any affiliation with any company holding a copyright of or related to the information provided within.  The accuracy and completeness of the information provided within is not guaranteed and by interacting with <em>DDO Planner</em> the user agrees that <em>DDO Planner</em> is not responsible for any negative outcome that may result from using the information provided.
		</p>

		<div class="close-container">
			<label class="close" @click="closeTheDisclaimer">Continue</label>
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
