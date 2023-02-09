import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import { ElSelect } from 'element-plus'
import store from './store'
// 引入mock数据
import '@/mock'

//引入所有请求API
import * as API from '@/api'


const app = createApp(App);
app.config.globalProperties.$API = API;
app.use(router);
app.use(store);
app.component(ElSelect.name, ElSelect)
app.mount('#app')
