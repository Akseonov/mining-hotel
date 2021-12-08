import { createApp } from "vue";
import { svgSpriteDirectivePlugin } from 'vue-svg-sprite';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import '@/plugins/svg-import';

createApp( App )
	.use( svgSpriteDirectivePlugin, {
		url: './my-sprite.svg',
	} )
	.use( store )
	.use( router )
	.mount( "#app" );
