require('dotenv').config()
const { resolve } = require('path')
const webpack = require('webpack')
// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = env => {
    const isProd = env && env.production
    return {
        devtool: isProd ? 'source-map' : 'eval',
        entry: './src/index.js',
        output: {
            path: resolve(__dirname, './public'),
            filename: isProd ? 'assets/scripts/bundle.[hash:4].js' : 'assets/scripts/bundle.js'
        },
        resolve: {
            extensions: ['.js', '.json'],
            alias: {
                '@': resolve(__dirname, './src')
            }
        },
        devServer: {
            contentBase: './public',
            compress: isProd ? true : false,
            port: process.env.APP_PORT,
            host: process.env.APP_HOST,
            hot: true,
            watchContentBase: true,
            stats: 'errors-only'
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                {
					test: /\.(sass|scss)$/,
					exclude: /node_modules/,
					loader: isProd ?  ExtractTextWebpackPlugin.extract({
						// fallback: 'style-loader',
						use: 'css-loader!sass-loader'
					}) : 'style-loader!css-loader!sass-loader'
				}
            ]
        },
        plugins: [
            new CleanPlugin(['public/assets', 'public/favicon.ico'], { dist: resolve(__dirname, './public/') }),
            new HtmlPlugin({
                template: resolve(__dirname, './src/index.html'),
                minify: {
                    collapseWhitespace: isProd,
                    removeComments: isProd,
                    removeRedundantAttributes: isProd
                }
            }),
            new ExtractTextWebpackPlugin({
                filename: './assets/styles/main.css',
                allChunks: true
            }),
            ...(
                isProd ? [
                    new UglifyJsPlugin(),
                    new StyleExtHtmlWebpackPlugin({
                        minify: true
                    }),
                    new ScriptExtHtmlWebpackPlugin({
                        async: 'bundle',
                        defer: 'bundle',
                        defaultAttribute: 'defer'
                    })
                ] :
                []
            )
        ]
    }
}