const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./src/server/index.tsx",
  target: "node",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "server_build"),
  },
});

//需要创建两个配置文件， webpack.base.js 和 webpack.server.js，其中 webpack.base.js 是通用的 Webpack 配置，因为后期还会新增对客户端的打包，其中有部分配置是相似的，所以这里我们抽出通用配置，用 merge 来进行合并。