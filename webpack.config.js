'use strict';

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development',
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

const APP = path.join(__dirname, '/src');

module.exports = {

    context: APP,

    entry: {
        app: './app'
    },

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap') },
            { test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, loader: 'file?name=[path][name].[ext]' }
        ],
        noParse: [
            /[\/\\]node_modules[\/\\]angular[\/\\]angular/,
            /[\/\\]node_modules[\/\\]angular-ui-router/
        ]
    },

    plugins: [
        new ExtractTextPlugin("style.css")
    ],

    //watch: true,

    devtool: 'cheap-inline-module-source-map',

    devServer: {
        contentBase: __dirname + '/public',
        host: '0.0.0.0',
        port: 8080,
        hot: true
    }

};
if (NODE_ENV == 'product') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}