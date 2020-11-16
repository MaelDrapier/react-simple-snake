var nodeExternals = require('webpack-node-externals');
var path = require('path')

module.exports = {
    mode: 'production',
    target: 'node',
    // externals: [nodeExternals()],
    entry: './src/SnakeGame.jsx',
	output: {
        path: path.resolve('dist'),
        filename: 'react-snake.js',
        libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
			},
			{
                test: /\.css/,
                use: ['style-loader', 'css-loader']
			},
		]
    },
}