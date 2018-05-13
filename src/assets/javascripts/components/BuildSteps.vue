<template>
	<menu class="build-steps">
		<li class="step"><i class="fa" :class="classesIcon"></i> Classes</li>
		<li class="step"><i class="fa" :class="abilitiesIcon"></i> Abilities</li>
		<li class="step"><i class="fa" :class="enhancementsIcon"></i> Enhancements</li>
		<li class="step"><i class="fa" :class="featsIcon"></i> Feats</li>
		<li class="step"><i class="fa" :class="spellsIcon"></i> Spells</li>
		<li class="step"><i class="fa" :class="summaryIcon"></i> Summary</li>
	</menu>
</template>

<script>
	export default {
		computed: {
			abilitiesIcon: function () {
				if ( this.$store.getters.abilitiesStepLocked ) {
					return 'fa-lock build-step-locked';
				} else {
					return 'fa-unlock build-step-unlocked';
				}
			}
			, classesIcon: function () {
				if ( this.$store.getters.classesStepLocked ) {
					return 'fa-lock build-step-locked';
				} else {
					return 'fa-unlock build-step-unlocked';
				}
			}
			, enhancementsIcon: function () {
				if ( this.$store.getters.enhancementsStepLocked ) {
					return 'fa-lock build-step-locked';
				} else {
					return 'fa-unlock build-step-unlocked';
				}
			}
			, featsIcon: function () {
				if ( this.$store.getters.featsStepLocked ) {
					return 'fa-lock build-step-locked';
				} else {
					return 'fa-unlock build-step-unlocked';
				}
			}
			, spellsIcon: function () {
				if ( this.$store.getters.spellsStepLocked ) {
					return 'fa-lock build-step-locked';
				} else {
					return 'fa-unlock build-step-unlocked';
				}
			}
			, summaryIcon: function () {
				if ( this.$store.getters.summaryStepLocked ) {
					return 'fa-lock build-step-locked';
				} else {
					return 'fa-unlock build-step-unlocked';
				}
			}
		}
	}
</script>
