<template>
    <header id="header">
        <!-- 头部第一块，Logo展示 -->
        <div class="logo">
            <img src="./images/film-logo.png" alt="胶片社区网">
            <!-- <span>Filmgallery</span> -->
        </div>
        <!-- 头部第二块，主要导航点 -->
        <ul class="nav">
            <li><router-link to="/home" class="nav-item" >首页</router-link></li>
            <li><router-link to="/film" class="nav-item" >胶片</router-link></li>
            <li><router-link to="/fujifilm" class="nav-item" >胶片模拟</router-link></li>
            <li><router-link to="/camera" class="nav-item" >胶片机</router-link></li>
        </ul>
        <!-- 头部第三块：搜索框，收藏，个人登录模块  -->
        <!-- 考虑到小屏幕上看，ul 分为两块，小屏幕时，第二块ul不展示 -->
        <ul class="right">
            <li class="search">
                <input type="text" value="搜索" class="search-query" >
            </li>
            <li class="favorite"><router-link to="/like" href=""><img src="./images/heart1.png" alt="喜欢"></router-link></li>
            <li class="account"><router-link to="/account"><img src="./images/account.png" alt="账户"></router-link></li>
        </ul>
    </header>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import router from '@/router';
export default {
    name: 'Header',
    setup() {
        // onMounted(()=>{
        //     console.log(router);
        // })
    },
}
</script>

<style scoped lang="less">
#header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    padding: 0 80px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 2px rgb(0 0 0 / 26%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

    .logo {
        height: 70px;
        width: 70px;
        line-height: 70px;

        img {
            height: 40px;
            vertical-align: middle;
        }
    }

    .nav {
        display: flex;
        justify-content: space-between;
        height: 35px;
        align-items: center;
        width: 400px;
        .nav-item {
            position: relative;
        }

        .nav-item:after {
            content: '';
            position: absolute;
            bottom: -26px;
            left: 0;
            background-color: #a2c2df;
            width: 0;
            height: 3px;
            transition: all 0.5s;
        }

        .nav-item:hover:after {
            width: 100%
        }
    }

    .right {
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .search-query{
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            padding: 0 15px 0 30px;
            border: 1px solid #e3e3e3;
            color: #273849;
            outline: none;
            border-radius: 15px;
            margin-right: 10px;
            transition: border-color 0.2s ease;
            background: #fff url(./images/search2.png) 8px 5px no-repeat;
            background-size: 20px;
            vertical-align: middle !important;
        }
        .favorite{
            margin-right: 10px;
            img{
                height: 30px;
            }
        }
        .account{
            img{
                height: 25px;
            }
        }
    }
}
</style>