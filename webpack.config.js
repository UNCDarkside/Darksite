// Built in modules
var path = require("path");

// Plugins
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SOURCE_DIR = path.resolve(__dirname, "src");

// Set up Plugins

var plugins = [];

// Copy over files to publish directory
plugins.push(
  new CopyWebpackPlugin([
    // Netlify redirects
    path.resolve(SOURCE_DIR, "_redirects")
  ])
);

// HTML template for rendering the app
plugins.push(
  new HtmlWebpackPlugin({
    appMountId: "app",
    inject: false,
    links: ["https://fonts.googleapis.com/css?family=Open+Sans|Roboto"],
    template: require("html-webpack-template")
  })
);

module.exports = {
  mode: "development",
  entry: path.resolve(SOURCE_DIR, "index.tsx"),
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },

  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    port: 8000
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".json"]
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
        test: /\.css$/,
        include: SOURCE_DIR,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
              modules: true,
              namedExport: true
            }
          }
        ]
      }
    ]
  },

  plugins: plugins
};
