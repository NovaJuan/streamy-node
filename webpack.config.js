const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:['./client/index.js','./client/main.css'],
    output:{
        path:path.resolve('public'),
        filename: 'bundle.js',
    },
    module:{
        rules:[
            {
                test:/.js$/,
                exclude: /node_modules/,
                use:[
                    {loader:'babel-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    
                  },
                  'css-loader',
                ],
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            filename:'index.html',
            template:path.resolve('client/index.html'),
            inject:false
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            ignoreOrder: true,
        })
    ]
}