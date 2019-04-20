const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    open: true,
    openPage: "husky-corner/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      { test: /\.(ico|png)$/, use: ["file-loader"] }
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/husky-corner/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "src/favicon.ico",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      title: "Husky Corner"
    }),
    new MiniCssExtractPlugin()
  ]
};
