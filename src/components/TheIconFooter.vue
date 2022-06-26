<template>
	<div class="icon d-flex align-center flex-column">
		<svg v-svg :symbol="iconName" size="24 24" class="mx-auto mt-2 mb-2 icon__svg"></svg>
		<p class="text-overline-2 text-base-60 icon__text">{{ name }}</p>
	</div>
</template>

<script>
export default {
	name: "TheIconFooter",
	props: {
		iconName: {
			type: String,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
	},
};
</script>

<style scoped lang="scss">
.icon {
	width: 100%;

	&:hover {
		.icon__svg {
			fill: #FFE790;
			fill-opacity: 1;
		}

		.icon__text {
			color: #FFE790 !important;
		}
	}

	&__svg {
		fill: #ffffff;
		fill-opacity: 0.6;
		transition: fill 0.5s, fill-opacity 0.5s;
	}

	&__text {
		transition: color 0.5s;
	}
}
</style>
