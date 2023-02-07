<template>
    <header class="header">
        <!-- 头部第一块，Logo展示 -->
        <div class="logo">
            <img src="./images/film-logo.png" alt="胶片社区网">
        </div>
        <!-- 头部第二块，主要导航点 -->
        <div class="nav">
            <ul>
                <li><a class="nav-item" href="">首页</a></li>
                <li><a class="nav-item" href="">富士模拟胶片</a></li>
                <li><a class="nav-item" href="">发现</a></li>
                <li><a class="nav-item" href="">胶片机</a></li>
            </ul>
        </div>
        <!-- 头部第三块：搜索框，收藏，个人登录模块  -->
        <div class="right">
            <div class="search"><input type="text" value="搜索"></div>
            <div class="favorite"><a href="">收藏</a></div>
            <div class="account"><a href="">账户</a></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    setup() {

    }

}
</script>

<style scoped lang="less">
.header {
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
        width: 400px;
    }

    .nav>ul {
        display: flex;
        justify-content: space-between;
        height: 35px;
        align-items: center;

        .nav-item {
            position: relative;
            // margin: 10px;
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
    }
}
</style>