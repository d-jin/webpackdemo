const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const dllName = require('./dll/name.json')

module.exports = {
	entry: './app/app.js',
	output: {
		path:path.resolve(__dirname,'../dist'),
		filename: 'app.[hash:8].js'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},
	plugins:[
		new CleanPlugin(['../dist'],{root: path.resolve(__dirname)}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'app/index.html',
			title: '一个wenpackdemo',
			dllName: dllName.vendor.js
		}),
		new webpack.DefinePlugin({
			__Dev__: process.env.NODE_ENV === 'dev',
			__API__: JSON.stringify(process.env.NODE.ENV === 'dev'? './api':'./api')
		}),
		new webpack.DllReferencePlugin({
			context: path.resolve('./dll'),
			manifest: require('./dll/vendor-manifest.json')
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname,'./dll/+dllName.vendor.js'),
				to: path.resolve(__dirname,'../dist/')
			}
		])
	]
}
