const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { config } = require('process');
const { parseSync } = require('@babel/core');

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
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

const jsLoaders = () => {
    let loaders = 
    {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
    }

    return loaders;
};

const plugins = () => {
    const base = [
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
            filename: filename('css')
        }),
        new ESLintPlugin()
    ];

    if (!isDev) {
        base.push(new BundleAnalyzerPlugin);
    };

    return base;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['./index.js']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
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
    devtool: isDev ? 'source-map' : 'hidden-source-map',
    plugins: plugins(),
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ]
    }
}