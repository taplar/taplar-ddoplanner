<template>
	<section class="disclaimer background-color-dark-gray-1 border border-color-dark-gray-2 border-radius-4 border-width-2 font-color-gray-0 font-size-3 layout-row">
		<div class="padding-4">
			<p class="no-margin">
				<em class="font-color-yellow font-style-normal">DDO Planner</em> is a fan site for the <a href="http://www.ddo.com/" target="_new" class="external-link">MMORPG Dungeons &amp; Dragons Online</a>.
			</p>

			<p>
				<em class="font-color-yellow font-style-normal">DDO Planner</em> claims no copyright with regard to the information provided within, nor any affiliation with any company holding a copyright of, or related to, the information provided within.  The accuracy, and completeness, of the information provided within is not guaranteed, and by interacting with <em class="font-color-yellow font-style-normal">DDO Planner</em> the user agrees that <em class="font-color-yellow font-style-normal">DDO Planner</em> is not responsible for any negative outcome that may result from using the information provided.
			</p>

			<div class="close-container font-size-5 text-center">
				<button class="close border-radius-4 font-color-inherit font-size-inherit line-height-3-5"
						aria-label="Continue.  Click this button to continue to the application."
						@click="closeTheDisclaimer">Continue</button>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		methods: {
			closeTheDisclaimer: function () {
				this.$store.commit( 'hideTheDisclaimer' );
			}
		}
	}
</script>
