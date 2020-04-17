const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin"); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin')
module.exports = {
      // mode: "development",
        mode:"production",
         //入口文件
        entry: './src/index.js',
         //出口文件
        output: {      
                path: path.resolve(__dirname, 'dist'),
                filename: "bundle.[hash].js",  
    },
   module: {    
      rules: [{
               test: /\.jsx$/,
               loader: "babel-loader"
              },
              {          
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                   presets: [["env"], ["react"]],
                   plugins: ["transform-class-properties"]            
                }        
              },
              {
                 test: /\.css$/,
                 use: ['style-loader','css-loader']
              },
              {
                 test: /\.(jgp|png|jpeg)$/,
                 use: 'file-loader'
               }
         ]
    },
    devServer: {
        // host: '0.0.0.0',
        port: '8888',
        //本地服务路径
        contentBase: path.join(__dirname, "./dist"),
        //实时刷新 
        inline: true,
        //自动更新修改部分
        hot: true,
        //代码压缩，加快开发流程
        compress: true,
        //出错显示
        overlay: {
            errors: true
        }
    },
        plugins: [
          new ExtractTextPlugin('./css/[name].css'),
          new HTMLWebpackPlugin({
        //指定加载文件
              template: "./index.html",
              favicon:'./favicon.ico',
              minify: {
                  removeAttributeQuotes: true,
                  //去除引号
                  removeComments: true,
                  //去除注释
                  collapseWhitespace: true,
                  //去除空格
                  removeEmptyAttributes: true //去除空属性
              }

          }),
          new BrotliGzipPlugin({
                asset: '[path].br[query]',
                algorithm: 'brotli',
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8,
                quality: 11,
            }),
            new BrotliGzipPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8,
            }),

          ]
};