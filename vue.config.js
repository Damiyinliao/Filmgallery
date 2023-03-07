const { defineConfig } = require('@vue/cli-service')
// 引入element-plus之后需在webpack.config.js中配置
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api" :{                             //表示前端发起请求时，请求路径中带有/api就进行转发，找服务器要数据
        target: "http://localhost:3000/v1",     //目标服务器
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''  
        }
      }
    }
  },
  //关闭语法检查
  lintOnSave: false,
  // 我们通过Vue CLI创建项目时，会自动生成public文件夹包含index.html文件，
  // 其中的title是<%= htmlWebpackPlugin.options.title %>表示，这是一种jsp语法，
  // 那么在使用当前表达式情况下如何修改title呢？下面写出两种方法:
  // 一、可以使用 pages 字段来定义的标题。首先要有vue.config.js文件，没有的话在根目录创建，并将 pages 字段添加到exports中，如下所示：
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: '胶片社区网|filmgallery'
    }
  },
  configureWebpack: {
    // element-plus
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      require('unplugin-vue-define-options/webpack')(),
    ],
  }
})
