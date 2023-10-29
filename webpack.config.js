const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        filename: "/src/js/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })

    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],

            },
            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset/resource'

            }
        ],

    },
    devServer: {
        port: 3000
    }
}