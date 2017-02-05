const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'babel-loader',
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
        }
    ]
};

module.exports = [
    {
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
                jsRule,
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 2,
                                    localIdentName: '[name]-[local]-[hash:base64:5]'
                                }
                            }
                        ]
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
    },
    {
        entry: './src/level-test.js',
        output: {
            path: './dist',
            filename: 'level.js'
        },
        module: {
            rules: [jsRule]
        }
    }
];
