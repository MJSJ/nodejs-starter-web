"use strict";
const path           = require('path');
const webpack        = require('webpack');
const runtime        = process.env.RUNTIME || 'local';
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        'index': [
            // For old browsers
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            path.join(__dirname, '../app/src/app.js'),
        ]
    },
    output: {
        filename: runtime === 'local' ? '[name].js' : '[name].[chunkhash:7].js',
        path: path.join(__dirname, '../app/dist'),
        publicPath: 'http://localhost:3000/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  loaders: {
                  }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: 'http://localhost:3000/static/'
        })
    ]
}