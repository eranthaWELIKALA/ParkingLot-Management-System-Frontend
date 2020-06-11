const path = require("path");
  const webpack = require("webpack");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var PUBLIC_DIR = path.resolve(__dirname, "public");
  
module.exports = {
entry: SRC_DIR + "/app/index.js",
mode: "development",
module: {
    rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },
    {
        test: /\.(jpeg|png|gif|jpg)$/,
        loader: "url-loader"
    }
    ]
},
resolve: { extensions: ["*", ".js", ".jsx"] },
output: {
    path: DIST_DIR + "/app",
    publicPath: DIST_DIR,
    filename: "bundle.js"
},
devServer: {
    contentBase: PUBLIC_DIR,
    port: 3000,
    publicPath: "http://localhost:3000/dist",
    hotOnly: true,
    historyApiFallback: true
},
plugins: [new webpack.HotModuleReplacementPlugin()]
};