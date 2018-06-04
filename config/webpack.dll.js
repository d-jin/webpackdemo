const path = require("path");
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
    

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dll"),
        filename: "dll.[name].[hash].js",
        library: "[name]"
    },
    plugins: [
        new CleanPlugin(['./dll'], { root: path.resolve(__dirname) }),
        new webpack.DllPlugin({
            path: path.join("./config/dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve("./dll")
        }),
        new AssetsPlugin({
            filename: 'name.json',
            path: "./config/dll"
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // })
    ],
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true,
              }
            }
          })
        ]
      }
    //   mode: 'production'
}