const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dllName = require('./dll/name.json')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css"
// })

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            module: true,
                            
                        }
                    },
                    {
                        loader: "sass-loader",
                      
                    }
                ]

            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                    {
                        loader: "file-loader"
                }
            ]
            }
        ]
    },
    plugins: [
        // 复制文件到指定目录下
        // new CopyWebpackPlugin([
        //     {
        //       from: path.resolve(__dirname, "../app/index.html"),
        //       to: path.resolve(__dirname, '../dist')
        //     }
        // ]),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html',
            title: 'webpack测试',
            dllName: './config/dll/' + dllName.vendor.js
        }),
        new webpack.DefinePlugin({
            __APIROOT__: JSON.stringify(process.env.NODE__ENV==='dev'?'/api':'/api')
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve("./dll"),
            manifest: require("./dll/vendor-manifest.json")
        })
    ],
    devServer: {
        port: 9999,
        publicPath:'/',
        compress:true,
        historyApiFallback: true,
        proxy:{
            "/api/": {
                target :"http://127.0.0.1:9101/",
                pathRewrite: {"^/api":""},
                secure: false
            }
        }
    },
    mode: 'development'
}