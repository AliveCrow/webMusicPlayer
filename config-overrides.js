const { override, addWebpackAlias, adjustStyleLoaders,fixBabelImports } = require('customize-cra');
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)


module.exports = override(
  fixBabelImports('import',
    { 
      "libraryName": "shineout", 
      "libraryDirectory": "css", // 引入 css 
      "style": false,
      "camel2DashComponentName": false,
      "camel2UnderlineComponentName": false
    }),
  addWebpackAlias({
    "@": resolve("src"),
    "@components":resolve("src/components"),
    "@pages":resolve("src/pages"),
    "@router":resolve("src/router"),
    "@store":resolve("src/store"),
    "@libs":resolve("src/libs")
  }),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "./src/common/variable.scss" //这里是你自己放公共scss变量的路径
        }
      });
    }
  })
)