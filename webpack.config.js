const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: "production",
  entry: "./js-generated/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  target: "node",
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
    ],
  },
  resolve: {
    fallback: {
      fsevents: false,
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /express[/\\]lib/,
      path.resolve(__dirname, "node_modules")
    ),
    new webpack.ContextReplacementPlugin(
      /nunjucks[/\\]src/,
      path.resolve(__dirname, "node_modules")
    ),
  ],
};
