var webpack = require('webpack');

//var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//var devFlagPlugin = new webpack.DefinePlugin({
//	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
//});
//
//var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080/',
		'./src/index.js'
	],
	output: {
		filename: './build/bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE.ENV': "development"
		}),
		new webpack.HotModuleReplacementPlugin(),

		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		}),
//		new webpack.optimize.UglifyJsPlugin({
//		    compress: {
//		      warnings: false
//		    }
//		}),
	],
	module: {
		loaders: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react','stage-1']
			}
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader'],
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.less$/,
			loader: "style-loader!css-loader!less-loader",
		}]
	}
};
