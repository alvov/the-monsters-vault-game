var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    resolve: {
        modules: [__dirname + '/src', 'node_modules'],
        extensions: ['', '.js', '.css']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    'presets': ['react'],
                    'plugins': [
                        'syntax-object-rest-spread',
                        'transform-object-rest-spread',
                        'syntax-export-extensions',
                        'transform-export-extensions'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: /node_modules/
            },
            {
                test: /\.(svg|jpg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('[name].css')
    ]
};
