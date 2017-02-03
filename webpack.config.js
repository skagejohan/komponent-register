const { resolve } = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/bootstrap.tsx'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ 'awesome-typescript-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CheckerPlugin()
    ]
};