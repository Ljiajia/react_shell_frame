const path = require("path");
module.exports = {
    mode: "development",
    //打包出来的东西使用在哪个环境中
    target: 'node',
         //入口文件
        entry: './src/servercon.js',
         //出口文件
        output: { 
            path: path.resolve(__dirname, 'dist'),
            filename: "server.entry.js",
            libraryTarget: 'commonjs2'    
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
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jgp|png|jpeg)$/,
            use: 'file-loader'
        }

            ]
    }
};