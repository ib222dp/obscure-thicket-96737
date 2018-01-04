const path = require("path")
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

const config = require('./webpack.base.config.js')

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/assets/bundles/'

// Add BundleTracker plugin
config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats.json'}),
])

// Add a loader for JSX files
config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',  query  :{
                presets:['react','es2015']
            } }
)

module.exports = config