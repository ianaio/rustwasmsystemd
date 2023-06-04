const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
 
// module.exports = {
//   entry: {
//     app: './src/index.js',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Production',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
// };

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
    clean: true,
  },
//  mode: "development",
  experiments: {
  asyncWebAssembly: true,
  syncWebAssembly: true,
  },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
        {
          from: path.resolve(__dirname, "index.html"),
	},
	]
      }),
    ],
};

