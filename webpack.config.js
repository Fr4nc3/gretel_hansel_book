module.exports = {
  entry: "./app/main",
  output: { filename: "./www/js/bundle.js" },
  module: {
    loaders: [
      {
        test: /ts$/,
        loader: "ts-loader",
      },
      {
        test: /html$/,
        loader: "html-loader",
      },
      {
        test: /css$/,
        loader: "css-loader",
      },
    ],
  },
  resolve: {
    extensions: ["", ".ts", ".js", ".html", ".css", ".scss"],
  },
  devtool: "#inline-source-map",
};
