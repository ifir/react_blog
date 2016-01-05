var path = require('path');
var webpack = require('webpack');
var config = {
	entry: './src/components/main.js',
	//压缩js
	/*plugins:[
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	],*/
	output: {
		path: path.join(__dirname, 'output/js'),
		filename: 'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.js[x]?$/,
			exclude: /node_modules/,
			loader:'babel',
			query: {
		        presets: ['react']
		   	}
		}]
	}
}

module.exports = config;