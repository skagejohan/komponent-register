const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/bootstrap.js'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()        
    ]
};