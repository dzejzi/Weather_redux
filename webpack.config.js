const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {

        rules: [
         
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],              

                loader: "babel-loader",             

            }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

   
}