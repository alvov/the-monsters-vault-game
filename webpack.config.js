var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        bundle: './src/script'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    resolve: {
        root: __dirname + '/src',
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.css']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
            }
        ]
    },
    cssnext: {
        browsers: 'last 1 version'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('[name].css')
    ]
};
