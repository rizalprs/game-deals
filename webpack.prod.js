const {
    merge
} = require('webpack-merge');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        }],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new MiniCSSExtractPlugin(),
    ],
})