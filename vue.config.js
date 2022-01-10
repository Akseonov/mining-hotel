const { defineConfig } = require( '@vue/cli-service' );
const path = require( 'path' );
const SpriteLoaderPlugin = require( 'svg-sprite-loader/plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const StyleLintPlugin = require('stylelint-webpack-plugin');

const { NODE_ENV, HOST, PORT } = process.env;
const isDev = NODE_ENV === "development";
const host = HOST || "localhost";
const port = PORT || 3000;

const paths = {
	src: path.resolve( __dirname, 'src' ),
	html: path.resolve( __dirname, 'src', 'assets', 'html' ),
	build: path.resolve( __dirname, 'build' ),
};

module.exports = defineConfig( {
	publicPath: isDev
		? '/'
		: '/production-sub-path/', // поменять для production
	outputDir: paths.build,
	transpileDependencies: true,
	lintOnSave: process.env.NODE_ENV !== 'production',
	devServer: {
		static: {
			publicPath: '/',
		},
		hot: false,
		host,
		port,
		client: {
			overlay: {
				errors: true,
				warnings: true,
			},
		},
		devMiddleware: {
			index: true,
			writeToDisk: true,
			publicPath: '/',
			stats: 'minimal',
		},
		proxy: {
			'/api': {
				target: 'http://localhost:4000',
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},

	pluginOptions: {
		vuetify: {
			// customVariables: ['@/assets/scss/variables.scss'],
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
	},
	css: {
		sourceMap: true,
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/scss/vuetify.scss";`,
				sourceMap: true,
			},
			sass: {
				additionalData: `@import "@/assets/scss/vuetify.sass";`,
				sourceMap: true,
			},
		}
	},
	configureWebpack: {
		devtool: process.env.NODE_ENV === 'development'
			? 'inline-source-map'
			: false,
		plugins: [
			new SpriteLoaderPlugin( {
				plainSprite: true,
			} ),
			new CleanWebpackPlugin(),
			new StyleLintPlugin({
				files: ['src/**/*.{vue,scss}'],
			}),
		],
		resolve: {
			alias: {
				'@': paths.src,
			},
		},
		optimization: {
			splitChunks: {
				hidePathInfo: true,
				cacheGroups: {
					vendors: {
						test: /node_modules/,
						chunks: 'all',
						name: 'my-vendors',
						enforce: true,
					},
				},
			},
		},
	},

	chainWebpack: config => {
		config.module
			.rule( 'vue' )
			.use( 'vue-loader' )
			.loader( 'vue-loader' )
			.tap( options => {
				return {
					babelParserPlugins: [
						'jsx',
						'classProperties',
						'decorators-legacy'
					],
					transformAssetUrls: {
						video: [ 'src', 'poster' ],
						source: 'src',
						img: 'src',
						image: [ 'xlink:href', 'href' ],
						use: [ 'xlink:href', 'href' ],
						'v-app-bar': 'src',
						'v-carousel-item': [
							'src',
							'lazy-src'
						],
						'v-img': [
							'src',
							'lazy-src'
						],
						'v-navigation-drawer': 'src',
						'v-parallax': 'src',
						'v-toolbar': 'src'
					}
				}
			} );
		config.module
			.rule( 'svg' )
			.type( 'javascript/auto' )
			.delete( 'generator' )
			.test( /\.(svg)(\?.*)?$/ )
			.use( 'file-loader' )
			.loader( 'svg-sprite-loader' )
			.options( {
				extract: true,
				spriteFilename: 'img/my-sprite.svg',
			} );
		config.module
			.rule( 'images' )
			.type( 'asset' )
			.set( 'generator', {
				filename: 'img/[name][ext]',
			} )
			.set( 'parser', {
				dataUrlCondition: {
					maxSize: 10 * 1024,
				},
			} );
		config.module
			.rule( 'fonts' )
			.type( 'asset' )
			.set( 'generator', {
				filename: 'fonts/[name][ext]',
			} );
		config.module
			.rule( 'media' )
			.type( 'asset' )
			.set( 'generator', {
				filename: 'media/[name][ext]',
			} );
	}
} );
