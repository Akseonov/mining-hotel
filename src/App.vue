<template>
	<v-app>
		<main-header />
		<v-main>
			<router-view />
<!--			<v-container class="text-center">-->
<!--				<v-row>-->
<!--					<v-col>-->
<!--						<div id="nav">-->
<!--							<router-link to="/" class="bg-blue-accent-3">Главная</router-link>-->
<!--							|-->
<!--							<router-link to="/about">About</router-link>-->
<!--							|-->
<!--							<svg v-svg symbol="like" size="14"></svg>-->
<!--							|-->
<!--							<svg v-svg symbol="play" size="14"></svg>-->
<!--						</div>-->
<!--					</v-col>-->
<!--				</v-row>-->
<!--			</v-container>-->
		</v-main>
		<main-footer />
	</v-app>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

const MainHeader = defineAsyncComponent( () => import( '@/components/layouts/TheMainHeader.vue' ) );
const MainFooter = defineAsyncComponent( () => import( '@/components/layouts/TheMainFooter.vue' ) );

export default defineComponent( {
	name: 'App',

	components: {
		'main-header': MainHeader,
		'main-footer': MainFooter,
	},

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
