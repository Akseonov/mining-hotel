<template>
	<the-purse></the-purse>
	<the-exchange-rates></the-exchange-rates>
	<the-banners></the-banners>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

const TheBanners = defineAsyncComponent( () => import( '@/components/TheBanners.vue' ) );
const TheExchangeRates = defineAsyncComponent( () => import( '@/components/TheExchangeRates.vue' ) );
const ThePurse = defineAsyncComponent( () => import( '@/components/ThePurse.vue' ) );

export default defineComponent( {
	name: "MainView",

	components: {
		ThePurse,
		TheExchangeRates,
		TheBanners,
	},
} );
</script>

<!--<style scoped>-->

<!--</style>-->
