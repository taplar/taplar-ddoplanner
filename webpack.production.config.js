const cleanPlugin = require( 'clean-webpack-plugin' );
const copyPlugin = require( 'copy-webpack-plugin' );
const htmlPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const webpack = require( 'webpack' );
const workboxPlugin = require( 'workbox-webpack-plugin' );

module.exports = {
	entry: './src/application.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "less-loader" }
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ 'env' ]
						}
					}
				]
			},
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	performance: { hints: false },
	plugins: [
		new webpack.DefinePlugin( {
			'process.env': {
				NODE_ENV: '"production"'
			}
		} ),
		new cleanPlugin( [ 'dist' ] ),
		new htmlPlugin( {
			template: './src/index.html',
			title: 'Taplar - DDO Planner'
		} ),
		new copyPlugin( [
			{ from: './src/assets/jsons/', to: './assets/jsons' }
			, { from: './src/assets/images/icons/', to: './assets/images/icons' }
			, { from: './src/assets/styles/vendor', to: './assets/styles/vendor' }
		] ),
		new workboxPlugin.InjectManifest( {
			swSrc: './src/sw.js',
			swDest: 'sw.js'
		} )
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'vue-resource$': 'vue-resource/dist/vue-resource.min.js'
		}
	}
};
