<template>
	<v-container class="px-4 py-0 mt-5 d-flex banners__gap mb-7">
		<v-row class="ma-0 banners__gap banners__row flex-column">
			<v-col class="pa-0 bg-base-1dp rounded-4 d-flex flex-column justify-end banners__col">
				<div>
					<div class="pa-4 d-flex flex-column justify-space-between">
						<svg v-svg symbol="miner" size="37%"></svg>
						<h3 class="text-base-86 text-subtitle-2">Купите свой первый майнер</h3>
					</div>
				</div>
			</v-col>
			<v-col class="pa-0 bg-yellow-300 rounded-t-4 rounded-r-4 d-flex flex-column justify-end
			banners__col">
				<div>
					<div class="py-4 d-flex flex-column justify-space-between">
						<div class="banners__calc">
							<v-img aspect-ratio="1"
								src="@/assets/img/calc.png"
								max-width="45%"
								max-height="100%"
								class="ml-auto" />
						</div>
						<h3 class="px-4 text-base-black text-subtitle-2">Калькулятор
							<br class="hidden-sm-and-up"> доходности </h3>
					</div>
				</div>
			</v-col>
		</v-row>
		<v-row class="ma-0 banners__row">
			<v-col class="pa-4 bg-base-1dp rounded-b-4 rounded-l-4 d-flex flex-column
				justify-space-between">
				<div class="banners__wrapper-two">
					<div>
						<img class="banners__sun" src="@/assets/img/sun.png" alt="sun">
						<img class="banners__satellite" src="/img/icons/satellite.svg" alt="satellite">
					</div>
				</div>

				<div>
					<h3 class="text-base-86 text-subtitle-2 mb-4">Майнинг отель</h3>
					<p class="text-base-60 text-overline-4 mb-4">
						Передайте оборудование любой удобной для Вас транспортной компанией.
					</p>
					<p class="text-base-60 text-overline-4">
						Либо можете привезти оборудование сами, если находитесь в Москве.
					</p>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "TheBanners",
	// TODO: передаелать картинку калькулятора на обычную img с ссылкой на svg (как и спутник)
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

	&__calc {
		width: 100%;
		height: 60%;
		display: flex;
		justify-content: flex-end;
	}

	&__wrapper-two {
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

	&__sun {
		position: absolute;
		top: -16px;
		right: -16px;
		width: 75%;
		height: 75%;
	}

	&__satellite {
		position: absolute;
		bottom: 10px;
		left: -16px;
		width: 160px;
		height: 106px;
	}
}
</style>
