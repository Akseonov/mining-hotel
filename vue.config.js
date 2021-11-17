const path = require( "path" );

const { NODE_ENV, HOST, PORT } = process.env;
const isDev = NODE_ENV === "development";
// const mode = isDev ? "development" : "production";
const host = HOST || "localhost";
const port = PORT || 3000;

const paths = {
	src: path.resolve( __dirname, "src" ),
	html: path.resolve( __dirname, "src", "assets", "html" ),
	build: path.resolve( __dirname, "build" ),
};

module.exports = {
	// mode,
	publicPath: "/",
	outputDir: paths.build,
	lintOnSave: isDev,
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
};
