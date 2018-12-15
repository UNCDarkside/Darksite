// Built in modules
var path = require('path');

// Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');


var DIST_DIR = path.resolve(__dirname, 'dist');
var SOURCE_DIR = path.resolve(__dirname, 'src');


// Set up Plugins
var plugins = [];
plugins.push(new HtmlWebpackPlugin({
    appMountId: 'app',
    inject: false,
    template: require('html-webpack-template'),
}));


module.exports = {
    mode: 'development',
    entry: path.resolve(SOURCE_DIR, 'index.tsx'),
    output: {
        filename: "bundle.js",
        path: DIST_DIR,
    },

    devServer: {
        contentBase: DIST_DIR,
        port: 8000
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },

    plugins: plugins,
};
