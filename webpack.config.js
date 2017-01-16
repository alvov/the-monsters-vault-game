const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-batched-actions']
    },
    output: {
        path: './dist',
        publicPath: './',
        filename: '[name].js'
    },
    resolve: {
        modules: [__dirname + '/src', 'node_modules'],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react'],
                    plugins: [
                        'syntax-object-rest-spread',
                        'transform-object-rest-spread',
                        'syntax-export-extensions',
                        'transform-export-extensions',
                        'syntax-class-properties',
                        'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        importLoaders: 2,
                        localIdentName: '[name]-[local]-[hash:base64:5]'
                    }
                })
            },
            {
                test: /\.(svg|jpg|png)$/,
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
