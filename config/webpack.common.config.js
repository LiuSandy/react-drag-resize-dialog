module.exports = {
  module: {
    noParse: /node_modules\/(jquery\.js)/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ]
  }
}