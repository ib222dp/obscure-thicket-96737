var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	context: __dirname,
	
	entry: './hello/static/js/index',
	output: {
		path: path.resolve('./hello/static/bundles/'),
		filename: "[name]-[hash].js"
	},
	plugins: [
		new BundleTracker({filename: './webpack-stats.json'}),
		new webpack.ProvidePlugin({ 
			$: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin()
	],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: [["env", {"modules": false}], "react", "stage-1"] } },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: [["env", {"modules": false}], "react", "stage-1"] } },
	  { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.css']
  }


};