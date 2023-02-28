// 对axios进行二次封装
import axios from "axios";
import { useStore } from 'vuex';
const store = useStore();
// 引入进度条
import nprogress from "nprogress";
//引入进度条的样式
import "nprogress/nprogress.css";
// 创建axios实例
const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    // 请求开始，进度条开始
    nprogress.start();
    // if(store.state.user.token){
    //     config.headers.Authorization = 'Bearer ' + store.state.token;
    // }
    return config
});

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('request failed'))
})

// 对外暴露
export default requests;