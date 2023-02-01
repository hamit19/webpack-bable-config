const path = require("path");

const HtmlWebPack = require("html-webpack-plugin");

const cssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

console.log(devMode);

module.exports = {
  mode: devMode ? "development" : "production",

  // watch: true,

  // watchOptions: {
  //     poll: 10000, // Check for changes every second
  //   },

  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "[name].bundle.[hash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /node_modules/,

        use: {
          loader: "babel-loader",

          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,

        use: [
          devMode ? "style-loader" : cssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(png | jpe?g | svg | gif | eot | ttf | woff | woff2)$/i,
        type: "asset",
      },
    ],
  },

  plugins: [
    new cssExtractPlugin({
      filename: "[name].[hash].css",
    }),

    new HtmlWebPack({
      title: " Web Application with Webpack ",
      filename: path.join(__dirname, "dist/index.html"),
      template: path.join(__dirname, "src/index.html"),
    }),
  ],

  devServer: {

    onListening: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      const port = devServer.server.address().port;
      console.log("Listening on port:", port);
    },

    static:{
        directory: path.join(__dirname, "dist"),
        watch:true,
      },
    
      port: 9099,

      open: true,

    
  },

};
