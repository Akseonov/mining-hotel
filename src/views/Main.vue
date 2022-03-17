<template>
	<the-purse></the-purse>
	<the-exchange-rates></the-exchange-rates>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

const TheExchangeRates = defineAsyncComponent( () => import( '@/components/TheExchangeRates.vue' ) );
const ThePurse = defineAsyncComponent( () => import( '@/components/ThePurse.vue' ) );

export default defineComponent( {
	name: "MainView",

	components: {
		TheExchangeRates,
		ThePurse,
	},
} );
</script>

<!--<style scoped>-->

<!--</style>-->
