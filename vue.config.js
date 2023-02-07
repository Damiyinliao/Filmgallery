const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
  }
})
