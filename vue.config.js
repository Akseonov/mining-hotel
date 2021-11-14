// const path = require( 'path' );

const { NODE_ENV, HOST, PORT } = process.env;
const isDev = NODE_ENV === "development";
const mode = isDev ? "development" : "production";
const host = HOST || "localhost";
const port = PORT || 3000;

// const paths = {
// 	src: path.resolve( __dirname, 'src' ),
// 	html: path.resolve( __dirname, 'src', 'assets', 'html' ),
// 	build: path.resolve( __dirname, 'build' ),
// };

module.exports = {
  // mode,
  // entry: {
  // 	'legacy-main': './src/index.js',
  // },
  // output: {
  // 	filename: '[name].js',
  // 	path: paths.build,
  // 	// publicPath: '/', // криво работает с build
  // 	// clean: true, // не работает вместе с devServer writeToDisk, баг не устранен на 27.09.2021, поставил clean-webpack-plugin
  // },
  // stats: {
  // 	assets: true,
  // 	modules: false,
  // },
  // target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  // devtool: isDev
  // 	? 'eval-cheap-module-source-map'
  // 	: false,
  devServer: {
    // static: {
    // 	publicPath: '/',
    // },
    // devMiddleware: {
    // 	index: true,
    // 	writeToDisk: true,
    // 	publicPath: '/',
    // 	stats: 'minimal',
    // },
    // client: {
    // 	overlay: {
    // 		errors: true,
    // 		warnings: true,
    // 	},
    // },
    hot: false,
    host: "localhost",
    port: 3000,
    writeToDisk: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    stats: "errors-only",
    // host,
    // port,
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
