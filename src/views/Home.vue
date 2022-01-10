<template>
	<hello-world/>
</template>

<script lang="ts">
	import { defineComponent, defineAsyncComponent } from 'vue';

	const HelloWorld = defineAsyncComponent( () => import( /* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld.vue' ) );

	export default defineComponent( {
		name: 'Home',

		components: {
			HelloWorld,
		},
	} );
</script>
