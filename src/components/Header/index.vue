<template>
    <header id="header">
        <!-- 头部第一块，Logo展示 -->
        <div class="logo">
            <img src="http://img.filmgallery.cn/logo/film-logo.png" alt="胶片社区网">
            <!-- <span>Filmgallery</span> -->
        </div>
        <!-- 头部第二块，主要导航点 -->
        <div class="right">
            <div class="menu">
                <div class="menu-item"><router-link to="/home">首页</router-link></div>
                <div class="menu-item"><router-link to="/explore">发现</router-link></div>
                <div class="menu-item"><router-link to="/film">胶片</router-link></div>
                <div class="menu-item"><router-link to="/fujifilm">胶片模拟</router-link></div>
                <div class="menu-item"><router-link to="/camera">胶片机</router-link></div>
                <div class="menu-item"><router-link to="/create">创作中心</router-link></div>
            </div>
            <div class="login">
                <a @click="checkStatus">
                    <img :src="headPortraitUrl">
                </a>
                <!-- <div class="user-menu-wrapper">
                    <div>退出登录</div>
                </div> -->
            </div>
        </div>
    </header>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'
import emitter from '@/utils/eventBus'
import { useRouter } from 'vue-router';
import RenderLogin from '../Login';
import { removeGlobalNode } from "@/utils/dom";
const store = useStore();
const router = useRouter();
const headPortraitUrl = computed(() => {
    return store.state.user.userInfo.avatar;
});
// 检查状态，是否有账户信息，没有就登录，有就跳到账户页
const checkStatus = () => {
    if (store.state.user.userInfo._id) {
        router.push({
            name: 'account'
        })
    } else {
        Login();
    }
};
let loginDiv;
// 登录按钮 点击开始全局渲染登录组件
const Login = () => {
    const { vnode, div } = RenderLogin(store);
    loginDiv = div;
};
// 全局事件总线，监听事件，移除Login页面
emitter.on("closeLogin1", () => {
    removeGlobalNode(loginDiv);
})
emitter.on("getLoginInfo", (info) => {
    store.dispatch("user/getUserInfo", info);
})
</script>

<style scoped lang="less">
#header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    min-width: 960px;
    padding: 0 80px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 2px rgb(0 0 0 / 26%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

    .logo {
        height: 70px;
        width: 140px;
        line-height: 70px;

        img {
            height: 70px;
            vertical-align: middle;
        }
    }

    .right {
        display: flex;
        justify-content: space-between;

        .menu {
            display: flex;
            justify-content: space-between;

            .menu-item {
                position: relative;
                margin: 0 20px;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: all 0.1s ease;

                // 所有“单词”一律不拆分换行，注意，我这里的“单词”包括连续的中文字符（还有日文、韩文等），或者可以理解为只有空格可以触发自动换行
                // word-break: keep-all;
                a {
                    padding: 5px 10px;
                    color: #000;
                }
            }

            .menu-item:hover {
                transform: scale(1.04);
            }
        }

        .login {
            position: relative;
            margin-left: 20px;
            display: flex;
            width: 36.5px;
            height: 36.5px;
            border: 0.5px solid #ebebeb;
            border-radius: 100%;

            img {
                width: 35.5px;
                height: 35.5px;
                cursor: pointer;
                border-radius: 100%;
            }
        }
    }
}
</style>