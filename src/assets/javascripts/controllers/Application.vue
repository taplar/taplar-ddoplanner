<template>
	<div class="application container z-index-0" :class="[showTheBuildSteps, showTheDisclaimer]">
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
		, computed: {
			showTheBuildSteps: function () {
				if ( this.$store.getters.theBuildStepsShouldBeShown ) {
					return 'showTheBuildSteps';
				}
			}
			, showTheDisclaimer: function () {
				if ( this.$store.getters.theDisclaimerShouldBeShown ) {
					return 'showTheDisclaimer';
				}
			}
		}
	}
</script>

<style lang="less">

//COLORS
@color-dark-gray-0: rgb(40, 40, 40);
@color-dark-gray-1: lighten(@color-dark-gray-0, 4%);
@color-dark-gray-2: lighten(@color-dark-gray-0, 8%);
@color-dark-gray-3: lighten(@color-dark-gray-0, 12%);
@color-gray-0: rgb(192, 192, 192);
@color-green-0: rgb(0, 192, 0);
@color-light-black: rgb(16, 16, 16);
@color-light-blue-1: rgb(135, 206, 235);
@color-light-blue-2: lighten(@color-light-blue-1, 4%);
@color-red-0: rgb(192, 0, 0);
@color-white: rgb(224, 224, 224);
@color-yellow: rgb(160, 160, 0);

//FONT SIZES
@base-font-size: 12px;

// ======================================================================================
body {
	background-color: @color-light-black;
	font-family: 'Open Sans', sans-serif;
	font-size: @base-font-size;
}

.application {
	&.showTheBuildSteps {
		.content {
			top: @base-font-size * 6.5;
		}
	}

	&:not(.showTheBuildSteps) {
		.header {
			.build-steps { display: none; }
		}
	}

	&:not(.showTheDisclaimer) {
		.content {
			.disclaimer { display: none; }
		}
	}

	.content {
		top: @base-font-size * 3.5;
		left: 0;

		.disclaimer {
			background-color: @color-dark-gray-1;
			border: 2px solid @color-dark-gray-2;
			border-radius: 4px;
			color: @color-gray-0;
			margin: 2px;
			padding: 4px;

			em {
				color: @color-yellow;
				font-style: normal;
			}

			.close-container {
				.close {
					background-color: @color-dark-gray-2;
					border: 1px solid @color-light-black;
					border-radius: 4px;
					display: inline-block;
					line-height: @base-font-size * 3.5;
					min-width: 240px;
					text-decoration: none;

					&:active, &:hover {
						background-color: @color-dark-gray-3;
					}
				}
			}

			.external-link {
				color: @color-light-blue-1;
				text-decoration: none;

				&:active, &:hover {
					color: @color-light-blue-2;
					font-weight: bold;
				}
			}
		}
	}

	.header {
		background-color: @color-dark-gray-0;
		color: @color-white;
		line-height: @base-font-size * 3.5;

		.build-steps {
			background-color: @color-dark-gray-2;
			line-height: @base-font-size * 3;
			list-style-type: none;
			overflow-x: auto;

			.step {
				border-right: 2px solid @color-dark-gray-1;
				display: inline-block;
				padding: 0 12px 0 8px;

				.build-step-locked {
					color: @color-red-0;
				}

				.build-step-unlocked {
					color: @color-green-0;
				}
			}
		}
	}
}

.center { text-align: center; }
.col-xs-12 { min-width: 360px; width: 100%; max-width: 100%; }
.container { position: absolute; top: 0; left: 0; min-width: 360px; width: 100%; max-width: 100%; }
.fixed-top-left { position: fixed !important; top: 0; left: 0; }
.font-size-1 { font-size: @base-font-size; }
.font-size-2 { font-size: @base-font-size * 1.25; }
.font-size-3 { font-size: @base-font-size * 1.5; }
.font-size-4 { font-size: @base-font-size * 1.75; }
.font-size-5 { font-size: @base-font-size * 2; }
.no-margin { margin: 0; }
.no-margin-top { margin-top: 0; }
.no-padding { padding: 0; }
.no-wrap { white-space: nowrap; }
.row { position: relative; min-width: 360px; width: 100%; max-width: 100%; }
.z-index-0 { z-index: 0; }
.z-index-100 { z-index: 100; }
.z-index-200 { z-index: 200; }

</style>
