import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
// 引入mock数据
// import '@/mock'
// 引入所有请求API
import * as API from '@/api'
// 引入SearchBox组件将其注册为全局组件
import SearchBox from '@/components/SearchBox'
// 广告卡片
import AdCard from'@/components/AdCard'
// 引入Card组件
import SCard from '@/components/SCard'
// 返回按钮
import BackBtn from '@/components/BackBtn'
// 购物卡片
import BuyCard from '@/components/BuyCard'
// 编辑器组件
import Editor from '@/components/Editor'
// 评论组件
import Comment from '@/components/Comment'
// 返回顶部组件
import BackTop from '@/components/BackBtn'
// 引入图片查看器
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'  

// 创建应用实例对象
const app = createApp(App);
// 配置全局请求API 方法一，不推荐
// app.config.globalProperties.$API = API;
// 配置全局请求API 方法二，推荐
app.provide('$API', API);
app.use(router);
app.use(store);
app.use(VueViewer);
app.component(SearchBox);   //搜索框组件
app.component(SCard);       //小卡片组件
app.component(AdCard);      //广告卡片组件
app.component(BuyCard);     //购买卡片组件
app.component(BackBtn);     //返回按钮
app.component(Editor);      //编辑输入框
app.component(Comment);     //评论组件
app.component(BackTop);     //返回顶部组件
app.mount('#app')
