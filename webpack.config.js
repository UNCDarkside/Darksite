// Built in modules
var path = require("path");

// Plugins
var CopyWebpackPlugin = require("copy-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var PUBLIC_DIR = path.resolve(__dirname, "public");
var SOURCE_DIR = path.resolve(__dirname, "src");

// Set up Plugins

var plugins = [];

// Copy over static files to publish directory
plugins.push(new CopyWebpackPlugin([PUBLIC_DIR]));

module.exports = {
  mode: "development",
  entry: path.resolve(SOURCE_DIR, "index.tsx"),
  output: {
    chunkFilename: "[name].chunk.js",
    filename: "[name].bundle.js",
    path: DIST_DIR,
    publicPath: "/"
  },

  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    port: 8000
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: ["*", ".mjs", ".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        include: SOURCE_DIR,
        test: /\.js$/,
        loader: "source-map-loader"
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  plugins: plugins
};
