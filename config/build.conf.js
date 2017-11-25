// webpack.config.js
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = ({
  entry: [
    './src/index.js'
  ],
  output: {
    path: './public/',
    filename: '/main.min.js',
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/assets/fonts/[name].[ext]'
      },
			{
          test: /\.(png|jpe?g|svg)$/,
          loader: 'file?name=src/assets/imgs/[name].[ext]?[hash]'
      },
			{
        test: /\.css$/,
        loaders: ["style?sourceMap", "css"]//?modules&importLoaders=1&localIdentName=[path]__[hash:base64:5]
      }
    ],
    noParse: /node_modules\/quill\/dist/,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.ProvidePlugin({
    //   'fetch': 'isomorphic-fetch',
    //   'Map': 'core-js/fn/map',
    //   'Symbol': 'core-js/fn/symbol',
    //   'Promise': 'core-js/fn/promise',
    //   'Object.assign': 'core-js/fn/object/assign'
    // }),
  ],
});
