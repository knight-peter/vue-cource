const path = require("path");

const resolve = dir => path.join(__dirname, dir);
/* 根据环境不同修改BASE_URL,"procution"是生产环境 */
const BASE_URL = process.env.NOOE_ENV === "procution" ? "/iview-admin/" : "/";

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  /* 配置路径的简写 */
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        // 将主机头的原点更改为目标URL
        changeOrigin: true,
        // 如果您想代理websockets
        // ws:true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
