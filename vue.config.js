const path = require( "path" );
const SpriteLoaderPlugin = require( 'svg-sprite-loader/plugin' );

const { NODE_ENV, HOST, PORT } = process.env;
const isDev = NODE_ENV === "development";
const host = HOST || "localhost";
const port = PORT || 3000;

const paths = {
	src: path.resolve( __dirname, "src" ),
	html: path.resolve( __dirname, "src", "assets", "html" ),
	build: path.resolve( __dirname, "build" ),
};

module.exports = {
	// mode,
	publicPath: isDev
		? '/'
		: '/production-sub-path/', // поменять для production
	outputDir: paths.build,
	productionSourceMap: false,

	// stats: {
	// 	assets: true,
	// 	modules: false,
	// },
	// target: 'web',
	// devtool: isDev
	// 	? 'eval-cheap-module-source-map'
	// 	: 'none',
	devServer: {
		hot: false,
		writeToDisk: true,
		overlay: {
			errors: true,
			warnings: true,
		},
		stats: "errors-only",
		host,
		port,
		proxy: {
			"/api": {
				target: "http://localhost:4000",
				pathRewrite: {
					"^/api": "",
				},
			},
		},
	},
	configureWebpack: {
		plugins: [
			new SpriteLoaderPlugin( {
				plainSprite: true,
			} ),
		],
	},
	chainWebpack: config => {
		config.module
			.rule( 'svg' )
			.test( /\.(svg)(\?.*)?$/ )
			.use( 'file-loader' )
			.loader( 'svg-sprite-loader' )
			.options( {
				extract: true,
				spriteFilename: 'my-sprite.svg',
			} );
	},
};
