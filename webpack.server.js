const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {

	// not building for browser so target node
	target: 'node',

	// for ssr entry is the main server file i.e. index.js in this case
	entry: './src/index.js',

	// bundle location for server
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);