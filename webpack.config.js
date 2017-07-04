const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
    build: path.join(__dirname, 'build'),
    main: path.join(__dirname, 'app/main.js'),
};

const plugin = new ExtractTextPlugin({
    filename: '[name].css',
    ignoreOrder: true,
});

module.exports = {
    entry: {
        main: PATHS.main,
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    devtool: 'source-map',
    devServer: {
        host: process.env.HOST,
        port: 9095,
        overlay: {
            errors: true,
            warnings: true,
        },
        // colors: true,
        // hotOnly: true,  // HMR
    },
    // performance: {
    //     hints: 'warning',   // 'error'
    //     maxEntrypointSize: 500000, // bytes
    //     maxAssetSize: 450000,   // bytes
    // },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    emitWarning: true,
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
        ],
    },
    plugins: [
        new BabiliPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'main',
        // }),
        // new webpack.HotModuleReplacementPlugin(),   // HMR --hot
        new HtmlWebpackPlugin({
            title: 'React Demo',
            template: './app/index.html',
        }),
    ],
};
