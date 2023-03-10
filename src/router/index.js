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
                Toast({ message: '????????????', type: 'info', duration: 3000 })
            }else{
                next()
            }
        }
    },
    {
        name: 'account',
        path: '/account',
        component: () => import('@/views/Account'),
        // ??????????????????
        beforeEnter: (to, from, next) => {
            let token = getToken();
            let _id = getUserId();
            // ??????????????????????????????????????????????????????
            if (store.state.user.userInfo.username) {
                console.log("????????????");
                next()
            } else {
                if (token && _id) {
                    console.log("?????????");
                    //??????????????????
                    store.dispatch("user/getUserInfo", _id)
                        .then(() => {
                            // ??????????????????
                            next();
                        })
                } else {
                    // ??????????????????????????????
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
        path: '/user/:username',    //??????username?????????????????????
        component: () => import('@/views/Account'),
        // ??????????????????????????????
        beforeEnter: (to, from, next) => {
            store.dispatch("user/getOtherUserInfo", to.params.username)
            .then(() => {
                next();
            })
        }
    }
];
// createWebHistory() ????????????'#'???
// createWebHashHistory() ?????????'#'???
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;