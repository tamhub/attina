const path = require("path");

module.exports = {
  entry: "./tamtina.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
    }
}
};
