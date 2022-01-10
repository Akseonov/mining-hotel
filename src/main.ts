import { createApp } from 'vue';
import { svgSpriteDirectivePlugin } from 'vue-svg-sprite';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import loadFonts from './plugins/webfontloader';
import '@/plugins/svg-import';

loadFonts();

createApp( App )
	.use( svgSpriteDirectivePlugin, {
		url: './img/my-sprite.svg',
	} )
	.use( router )
	.use( store )
	.use( vuetify )
	.mount( '#app' );
