var path = require('path');

var config = {
	entry: './src/components/index.js',
	output: {
		path: path.join(__dirname, 'output'),
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