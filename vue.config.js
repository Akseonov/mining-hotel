const path = require( "path" );
const SpriteLoaderPlugin = require( 'svg-sprite-loader/plugin' );
const glob = require( 'glob' );
const PurgeCssPlugin = require( 'purgecss-webpack-plugin' );
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

const { NODE_ENV, HOST, PORT } = process.env;
const isDev = NODE_ENV === "development";
const host = HOST || "localhost";
const port = PORT || 3000;

const paths = {
	src: path.resolve( __dirname, "src" ),
	html: path.resolve( __dirname, "src", "assets", "html" ),
	build: path.resolve( __dirname, "build" ),
};

const configure = {
	publicPath: isDev
		? '/'
		: '/production-sub-path/', // поменять для production
	outputDir: paths.build,
	productionSourceMap: false,

	devServer: {
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
			new CleanWebpackPlugin(),
		],
		optimization: {
			splitChunks: {
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
		resolve: {
			alias: {
				'@': paths.src,
			},
		},
	},
	chainWebpack: config => {
		config.module
			.rule( 'svg' )
			.test( /\.(svg)(\?.*)?$/ )
			.use( 'file-loader' )
			.loader( 'svg-sprite-loader' )
			.options( {
				extract: true,
				spriteFilename: 'img/my-sprite.svg',
			} );
		config.module
			.rule( 'images' )
			.test( /\.(gif|png|jpe?g)$/i )
			.use( 'url-loader' )
			.loader( 'url-loader' )
			.options( {
				limit: 4096,
				fallback: {
					loader: 'file-loader',
					options: { name: 'img/[name].[ext]' },
				},
			} );
		config.module
			.rule( 'fonts' )
			.test( /\.(woff2?|eot|ttf|otf)(\?.*)?$/i )
			.use( 'url-loader' )
			.loader( 'url-loader' )
			.options( {
				limit: 4096,
				fallback: {
					loader: 'file-loader',
					options: { name: 'fonts/[name].[ext]' },
				},
			} );
		config.module
			.rule( 'media' )
			.test( /\.(mov|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/ )
			.use( 'url-loader' )
			.loader( 'url-loader' )
			.options( {
				limit: 4096,
				fallback: {
					loader: 'file-loader',
					options: { name: 'media/[name].[ext]' },
				},
			} );
	},
};

if ( isDev ) {
	configure.configureWebpack.plugins.push(
		new BundleAnalyzerPlugin( {
			openAnalyzer: false,
		} ),
	);
} else {
	configure.configureWebpack.plugins.push(
		new PurgeCssPlugin( {
			paths: glob.sync( `${ paths.src }/**/*`, {
				nodir: true,
			} ),
		} ),
	);
}

module.exports = configure;
