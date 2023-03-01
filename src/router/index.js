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
        children:[
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
        children:[
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
        path: '/fujifilm/:id',
        component: () => import('@/views/SimPanel'),
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