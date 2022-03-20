<template>
	<v-container class="px-4 py-0 mt-5 d-flex banners__gap">
		<v-row class="ma-0 banners__gap banners__row flex-column">
			<v-col class="pa-0 bg-base-1dp rounded-4 d-flex flex-column justify-end banners__col">
				<div>
					<div class="pa-4 d-flex flex-column justify-space-between">
						<svg v-svg symbol="miner" size="49"></svg>
						<h3 class="text-base-86 text-subtitle-2">Купите свой первый майнер</h3>
					</div>
				</div>
			</v-col>
			<v-col class="pa-0 bg-yellow-300 rounded-t-4 rounded-r-4 d-flex flex-column justify-end
			banners__col">
<!--				<svg v-svg symbol="clock" size="20"></svg>-->
				<div>
					<div class="py-4 d-flex flex-column justify-space-between">
						<v-img src="/img/icons/calc.svg" width="130" height="70" class="mx-auto"  />
						<h3 class="px-4 text-base-black text-subtitle-2">Калькулятор доходности </h3>
					</div>
				</div>
			</v-col>
		</v-row>
		<v-row class="ma-0 banners__row">
			<v-col class="pa-4 bg-base-1dp rounded-4 d-flex flex-column justify-end">
				<svg v-svg symbol="clock" size="20"></svg>
				<svg v-svg symbol="clock" size="20"></svg>
				<h3 class="text-base-86 text-subtitle-2 mb-4">Майнинг отель</h3>
				<p class="text-base-60 text-overline mb-4">
					Передайте оборудование любой удобной для Вас транспортной компанией.
				</p>
				<p class="text-base-60 text-overline">
					Либо можете привезти оборудование сами, если находитесь в Москве.
				</p>
			</v-col>
		</v-row>
<!--		<div class="d-flex flex-column banners__gap">-->
<!--			<div class="bg-base-1dp rounded-4">-->
<!--				<svg v-svg symbol="clock" size="20"></svg>-->
<!--				<h3 class="text-base-86 text-subtitle-2">Купите свой первый майнер</h3>-->
<!--			</div>-->
<!--			<div class="bg-yellow-300 rounded-t-4 rounded-r-4">-->
<!--				<svg v-svg symbol="clock" size="20"></svg>-->
<!--				<h3 class="text-base-black text-subtitle-2">Калькулятор доходности </h3>-->
<!--			</div>-->
<!--		</div>-->
<!--		<div>-->
<!--			<div class="bg-base-1dp rounded-4">-->
<!--				<svg v-svg symbol="clock" size="20"></svg>-->
<!--				<svg v-svg symbol="clock" size="20"></svg>-->
<!--				<h3 class="text-base-86 text-subtitle-2">Майнинг отель</h3>-->
<!--				<p class="text-base-60 text-overline">-->
<!--					Передайте оборудование любой удобной для Вас транспортной компанией.-->
<!--				</p>-->
<!--				<p class="text-base-60 text-overline">-->
<!--					Либо можете привезти оборудование сами, если находитесь в Москве.-->
<!--				</p>-->
<!--			</div>-->
<!--		</div>-->
	</v-container>
</template>

<script>
export default {
	name: "TheBanners",
};
</script>

<style scoped lang="scss">
.banners {
	&__gap {
		gap: 16px
	}

	&__row {
		width: 50%;
	}

	&__col {
		width: 100%;

		& > div {
			position: relative;
			padding-bottom: 100%;
			height: 0;

			& > div {
				position: absolute;
				left: 0;
				top: 0;
				height: 100%;
				width: 100%;
			}
		}
	}
}
</style>
