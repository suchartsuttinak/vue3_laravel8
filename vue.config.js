//โค๊ดเดิน--------------
// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
// });

//โค๊ดขึ้น production
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/demovuejs/" : "/",
  configureWebpack: {
    devtool: "source-map",
  },
});

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/demovuejs/' : '/',
//   configureWebpack: {
//       devtool: 'source-map'
//   }
// }
