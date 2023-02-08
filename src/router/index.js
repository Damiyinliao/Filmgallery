import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Home from '@/views/Home'
import Film from '@/views/Film'
import Fujifilm from '@/views/FujiFilm'
const routes = [
    {
        name:'home',
        path: '/',
        component: Home,
        meta:{
            show: true
        }
    },
    {
        path: '/home',
        redirect: '/'
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
        name: 'fujifilm',
        path: '/fujifilm',
        component: Fujifilm
    },
    {
        name: 'camera',
        path: '/camera',
        component: () => import("@/views/Camera")
    },
    {
        name: 'like',
        path: '/like',
        component:() => import('@/views/Like')
    },
    {
        name: 'account',
        path: '/account',
        component: () => import('@/views/Account')
    }
];
// createWebHistory() 路径不带'#'号
// createWebHashHistory() 路径带'#'号
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;