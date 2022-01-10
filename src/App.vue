<template>
	<v-app>
		<v-main>
			<v-container class="text-center">
				<v-row>
					<v-col>
						<div id="nav">
							<router-link to="/">Home</router-link>
							|
							<router-link to="/about">About</router-link>
							|
							<svg v-svg symbol="like" size="14"></svg>
							|
							<svg v-svg symbol="play" size="14"></svg>
						</div>
					</v-col>
				</v-row>
			</v-container>
			<router-view />
		</v-main>
	</v-app>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent( {
		name: 'App',

		data() {
			return {
				//
			};
		},
	} );
</script>

<style lang="scss">
	.cls-1 {
		fill: #1697f6;
	}

	.cls-2 {
		fill: #7bc6ff;
	}

	.cls-3 {
		fill: #1867c0;
	}

	.cls-4 {
		fill: #aeddff;
	}
</style>
