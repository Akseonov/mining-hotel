// Styles
/* eslint-disable */
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/scss/vuetify/vuetify.scss';
import myCustomTheme from './theme';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify(
	{
		theme: {
			defaultTheme: 'myCustomTheme',
			themes: {
				myCustomTheme,
			}
		}
	}
	// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
);
