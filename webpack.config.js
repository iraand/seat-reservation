const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { config } = require('process');

const isDev = process.env.NODE_ENV === 'development';
const optimization = () => {
    const config = {
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    }
}

if (!isDev){
    config.minimizer = [
        new CssMinimizerPlugin(),
        new TerserPlugin()
    ]
}
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/webpack-demo/",
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 3000,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
               collapseWhitespace: !isDev 
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]    
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        
                      },
                    },
                    "css-loader",
                  ],
            },
            {
                test: /\.(ttf | woff | woff2 | eot)$/,
                use: ['file-loader']
            }
        ]
    }
}