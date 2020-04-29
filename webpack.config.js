const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.wasm', '.mjs']
    },
    entry: path.resolve(__dirname, './examples/app.js'),
    module: {
        noParse: /node_modules\/(jquery\.js)/,
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules:{
                                mode: 'local',
                                exportGlobals: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './examples/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true
    }
}