const { resolve } = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/bootstrap.tsx',
        './src/app.less'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less']
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
            },
            {
                test: /\.less$/,
                use: [ 
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CheckerPlugin()
    ]
};