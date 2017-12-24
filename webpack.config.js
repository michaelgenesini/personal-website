require('dotenv').config()
const { resolve } = require('path')
const webpack = require('webpack')
// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
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
            filename: isProd ? 'assets/scripts/[name].[hash:4].js' : 'assets/scripts/[name].js'
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
					test: /\.(ttf|woff|otf|png|svg|jpg)$/,
					use: isProd
					? 'file-loader?context=src/static/&name=[path][name].[ext]&outputPath=../../public/assets/'
					: 'file-loader'
				},
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
						fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: (loader) => [
                                        require('autoprefixer')()
                                    ],
                                    // config: {
                                    //     ctx: {
                                    //         autoprefixer: {}
                                    //     }
                                    // }
                                }
                            },
                            {
                                loader: 'sass-loader',
                            }
                        ]
                    }) : 'style-loader!css-loader!sass-loader'
				}
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.HAS_CREATIVE': JSON.stringify(!isProd)
            }),
            new CleanPlugin(['public/assets', 'public/favicon.ico'], { dist: resolve(__dirname, './public/') }),
            new CopyPlugin([{ context: 'src/static', from: '**/*.*', to: resolve(__dirname, './public/assets') }]),
            new ServiceWorkerWebpackPlugin({
                entry: resolve(__dirname, 'src/sw.js'),
            }),
            new webpack.optimize.CommonsChunkPlugin({name: 'main', async: true}),
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