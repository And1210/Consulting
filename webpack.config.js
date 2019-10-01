var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: path.join(__dirname, '/src/app/index.js'),
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: true
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff2?|jpe?g|png|gif|ico)$/,
		    use: 'file-loader?name=./assets/images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/src/index.html')
		})
	]
};

module.exports = config;

// (env, options) => {
// 	const isDevMode = options.mode === "development";
//
//
// };
