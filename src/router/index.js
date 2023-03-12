import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Home from '@/views/Home'
import Film from '@/views/Film'
import Fujifilm from '@/views/FujiFilm'
import Explore from '@/views/Explore'
import { getToken, getUserId } from "@/utils";
import store from "@/store";
import Toast from "@/components/Toast";

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: {
            show: true
        }
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        name: 'explore',
        path: '/explore',
        component: Explore,
        children: [
            {
                name: 'card1',
                path: 'card/:id',
                component: () => import('@/views/Card')
            }
        ]
    },
    {
        name: 'film',
        path: '/film',
        component: Film,
        meta: {
            show: false
        }
    },
    {
        name: 'filmInfo',
        path: '/film/:id',
        component: () => import('@/views/FilmPanel'),
        children: [
            {
                name: 'card2',
                path: 'card/:card_id',
                component: () => import('@/views/Card')
            }
        ]
    },
    {
        name: 'fujifilm',
        path: '/fujifilm',
        component: Fujifilm
    },
    {
        name: 'simulation',
        path: '/fujifilm/:simid',
        component: () => import('@/views/SimPanel'),
    },
    {
        name: 'camera',
        path: '/camera',
        component: () => import("@/views/Camera")
    },
    {
        name: 'cameraInfo',
        path: '/camera/:cameraname',
        component: () => import("@/views/CameraPanel"),
        children: [
            {
                name: 'card3',
                path: 'card/:card_id',
                component: () => import('@/views/Card')
            }
        ]
    },
    {
        name: 'create',
        path: '/create',
        component: () => import("@/views/Create"),
        beforeEnter: (to, from, next) => {
            if(!store.state.user.userInfo.username){
                Toast({ message: '请先登录', type: 'info', duration: 3000 })
            }else{
                next()
            }
        }
    },
    {
        name: 'account',
        path: '/account',
        component: () => import('@/views/Account'),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            let token = getToken();
            let _id = getUserId();
            // 已经登录了就不需要请求信息，直接放行
            if (store.state.user.userInfo.username) {
                console.log("没有请求");
                next()
            } else {
                if (token && _id) {
                    console.log("请求了");
                    //查询用户信息
                    store.dispatch("user/getUserInfo", _id)
                        .then(() => {
                            // 获取之后跳转
                            next();
                        })
                } else {
                    // 登录，渲染出登录页面
                }
            }
        },
        children: [
            {
                name: 'card4',
                path: 'card/:card_id',
                component: () => import('@/views/Card')
            }
        ]
    },
    {
        name: 'user',
        path: '/user/:username',    //通过username找到用户的主页
        component: () => import('@/views/Account'),
        // 在导航完成前获取数据
        beforeEnter: (to, from, next) => {
            store.dispatch("user/getOtherUserInfo", to.params.username)
            .then(() => {
                next();
            })
        }
    }
];
// createWebHistory() 路径不带'#'号
// createWebHashHistory() 路径带'#'号
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;