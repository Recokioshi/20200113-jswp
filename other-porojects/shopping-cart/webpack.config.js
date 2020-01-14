const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function(env, argv) {
	const isProd = argv.mode === 'production';
	return {
		entry: './src/index.js',
		mode: isProd ? 'production' : 'development',
		devtool: 'inline-source-map',
		devServer: {
			hot: true,
			historyApiFallback: true
		},
		module: {
			rules: [
				{
					test: /\.html$/,
					use: [ {
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}],
				},
				{
					test: /\.css$/i,
					use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: !isProd,
						},
					}, 'css-loader'],
				}
			]
		},
		plugins: [
				new CleanWebpackPlugin(),
				new MiniCssExtractPlugin({
					filename: '[name].css',
				}),
				new HtmlWebpackPlugin({
					template: './src/index.html'
				}),
				new webpack.HotModuleReplacementPlugin()
			],
			output: {
			filename: '[name].[hash].js'
		}
	}
};
