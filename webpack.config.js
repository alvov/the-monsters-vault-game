module.exports = {
    entry: './src/scripts/script.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname + '/src',
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};
