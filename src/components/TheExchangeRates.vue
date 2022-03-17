<template>
	<v-container class="pa-0 pl-4 mt-5">
		<div class="d-flex" ref="slider">
			<div class="">
				<p class="text-base-86 text-caption-2">BTC/USD</p>
				<div class="d-flex">
					<p class="text-base-60 text-caption-2 d-flex align-center mr-1 text-no-wrap">58 834</p>
					<p class="text-green-300 text-caption-2 pb-1 text-no-wrap">+693 (1,19%)</p>
				</div>
			</div>
			<div class="">
				<p class="text-base-86 text-caption-2">ETH/USD</p>
				<div class="d-flex">
					<p class="text-base-60 text-caption-2 d-flex align-center mr-1 text-no-wrap">2.100,59</p>
					<p class="text-green-300 text-caption-2 pb-1 text-no-wrap">+21,05 (1,12%)</p>
				</div>
			</div>
			<div class="">
				<p class="text-base-86 text-caption-2">ZEC/USD</p>
				<div class="d-flex">
					<p class="text-base-60 text-caption-2 d-flex align-center mr-1 text-no-wrap">193,07</p>
					<p class="text-green-300 text-caption-2 pb-1 text-no-wrap">+21,05 (1,12%)</p>
				</div>
			</div>
		</div>
	</v-container>
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/src/tiny-slider.scss';

export default {
	name: "TheExchangeRates",

	data() {
		return {
			Slider: class {
				constructor( elem ) {
					this.slider = tns( {
						container: elem,
						autoWidth: true,
						controls: false,
						nav: false,
						loop: false,
						gutter: 12,
						preventScrollOnTouch: 'auto',
						mouseDrag: false,
						autoHeight: false,
					} );
				}
			},
		};
	},

	mounted() {
		new this.Slider( this.$refs.slider );
	},
};
</script>

<!--<style scoped>-->

<!--</style>-->
