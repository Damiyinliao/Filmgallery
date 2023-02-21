import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import { ElSelect } from 'element-plus'
import store from './store'
// 引入mock数据
import '@/mock'

// 引入所有请求API
import * as API from '@/api'
// 引入undraw-ui以及相关样式
// import UndrawUi from 'undraw-ui'
// import 'undraw-ui/dist/style.css'

// 引入SearchBox组件将其注册为全局组件
import SearchBox from '@/components/SearchBox'
// 引入Card组件
import Card from '@/components/Card'
const app = createApp(App);
// 配置全局请求API
app.config.globalProperties.$API = API;
app.use(router);
app.use(store);
app.component(ElSelect.name, ElSelect);
app.component(SearchBox, SearchBox);
app.component(Card, Card);
// app.use(UndrawUi)
app.mount('#app')
