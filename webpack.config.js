const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        "./src/index.js"
    ],
    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    },

    module: {

        loaders: [

            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"

            },
            {
                test: /(\.scss|\.css)$/,                
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg/, 
                loader: 'svg-url-loader'
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]


}