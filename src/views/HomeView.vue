<template>
	<v-container>
		<v-row class="text-center">
			<v-col>
				<img alt="Vue logo" src="@/assets/img/logo.png">
			</v-col>
		</v-row>
		<v-row class="text-center">
			<v-col>
				<v-img src="@/assets/img/logo.png" width="200" class="mx-auto"  />
			</v-col>
			<v-col>
				<v-img src="@/assets/img/logo.png" width="200" class="mx-auto"  />
			</v-col>
		</v-row>
	</v-container>
	<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	<div class="home">
	</div>
</template>

<script lang="ts">
	import { defineComponent, defineAsyncComponent } from 'vue';

	const HelloWorld = defineAsyncComponent( () => import( /* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld.vue' ) );

	export default defineComponent( {
		name: 'HomeView',
		components: {
			HelloWorld,
		},
	} );
</script>
