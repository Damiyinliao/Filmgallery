import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { ElSelect } from 'element-plus'
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
// 引入图片查看器
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'  

// 创建应用实例对象
const app = createApp(App);
// 配置全局请求API
app.config.globalProperties.$API = API;
app.use(router);
app.use(store);
app.use(VueViewer);
app.component(ElSelect.name, ElSelect);
app.component(SearchBox);
app.component(SCard);
app.component(AdCard);
app.component(BuyCard);
app.component(BackBtn);
app.component(Editor);
app.component(Comment);
app.mount('#app')
