import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Home from '@/views/Home'
import Film from '@/views/Film'
import Fujifilm from '@/views/FujiFilm'
import Explore from '@/views/Explore'
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
        name: 'explore',
        path: '/explore',
        component: Explore,  
    },
    {
        name:'infocard',
        path: '/explore/:id',
        component: () => import('@/views/Card')
    },
    {
        name: 'films',
        path: '/films',
        component: Film,
        meta: {
            show: false
        },
        children:[
            {
                name: 'filmpanel',
                path: ':id',
                component: () => import('@/views/Panel')        
            },
        ]            
    },
    // {
    //     name: 'filmpanel',
    //     path: '/films/:id',
    //     component: () => import('@/views/Panel')        
    // },
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
        name: 'create',
        path: '/create',
        component: () => import("@/views/Create")
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