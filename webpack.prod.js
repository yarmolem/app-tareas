const htmlPlugins = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()],
    },
    output:{
        filename:'main.[contentHash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    'babel-loader',
                ]
            },
            {
                test:/\.css$/,
                exclude:/style\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test:/style\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize:false},
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options :{ 
                            esModule: false,
                            name: 'assets/[name].[ext]',
                        },
                    },
                    ],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /(ngfactory|ngstyle).js$/,
                use: 'source-map-loader'
            },
        ]
    },
    plugins:[
        new htmlPlugins({
           template: './src/index.html',
           filename: './index.html'
        }),
        new miniCssExtractPlugin({
            filename: 'main.[contentHash].css',
            ignoreOrder: false,
         }),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
    ]

}