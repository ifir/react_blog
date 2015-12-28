var path = require('path');

var config = {
	entry: './src/components/main.js',
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