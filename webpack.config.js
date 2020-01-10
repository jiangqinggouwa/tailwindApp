const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.html',
        './src/**/*.tsx',
        './src/**/*.ts'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})
const devMode = process.env.NODE_ENV  !== 'production'
module.exports = {
    mode:"development" || "production",
    entry:"./src/index.tsx",
    output:{
        filename:devMode ? "[name].js" : "[name].[hash].js",
        chunkFilename:devMode ? '[id].js' : "[id].[hash].js",
        path:path.resolve(__dirname,"dist/"),
    },
    // watch:true,这里是监听全部
    devtool:"source-map",//可能会减慢速度
    resolve:{
        modules: ["node_modules"],
        extensions:[".ts",".tsx",".js","json" ,".d.ts"]
    },
    module:{
        rules:[
            {
                test:/\.ts(x?)$/,
                use:
                {
                    loader:'ts-loader',
                    loader:'babel-loader'
                },

            },
            {
                test: /\.css$/,
                use: [

                   devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                   'css-loader', 
                   {
                       loader:'postcss-loader',
                       options: {
                           ident: 'postcss',
                           plugins: [
                               require('postcss-import'),
                               require('tailwindcss'),
                               require('autoprefixer'),
                               ...process.env.NODE_ENV === 'production'
                               ? [purgecss]
                               : []
                           ]
                       }
                    }
                ]
               },
              
            {enforce:"pre",test:/\.js$/,loader:"source-map-loader"}
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,"dist/"),
        port:3001,
        hot:true,
        open:true,  
    },   
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLPlugin ({
            filename:'index.html',
            template:'template.html'
        }),
       new MiniCssExtractPlugin({
        filename:devMode ? "[name].js" : "[name].[hash].js",
        chunkFilename:devMode ? '[id].js' : "[id].[hash].js",
       }),
    ]
}