<template>
	<the-purse></the-purse>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

const ThePurse = defineAsyncComponent( () => import( '@/components/ThePurse.vue' ) );

export default defineComponent( {
	name: "MainView",

	components: {
		'the-purse': ThePurse,
	},
} );
</script>

<!--<style scoped>-->

<!--</style>-->
