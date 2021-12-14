<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/img/logo.png" @click="myComponent" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, defineAsyncComponent } from "vue";
	// import HelloWorld from "@/components/HelloWorld.vue";

	const HelloWorld = defineAsyncComponent( () => import( "../components/HelloWorld.vue" ) );

	export default defineComponent( {
		name: "Home",
		components: {
			HelloWorld,
		},
		methods: {
			myComponent() {
				setTimeout( () => {
					console.log( '1' );
				} );
			},
		},
	} );
</script>

<style lang="scss">
	.home {
		img {
			width: 100px;
			height: 100px;
		}
	}
</style>
