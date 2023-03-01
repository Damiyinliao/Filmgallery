<template>
    <div class="ad-card card">
        <div class="ad-title"><span>广告</span></div>
        <div class="ad-wrapper">
            <img src="@/assets/ad.png">
            <span><b>YOUR AD HERE</b></span>
        </div>
    </div>
</template>

<script setup>
import { } from "vue"
</script>

<style lang="less" scoped>
.ad-card {
    margin-top: 30px;
    height: auto;
    padding: 30px 20px 15px 30px;
    margin-bottom: 20px;
    color: #141414;
    font-weight: 400;

    .ad-title {
        height: auto;
        background-color: #fffced;
        color: #d1c758;
        border-radius: 4px;
        padding: 4px 10px;
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1em;
    }

    .ad-wrapper {
        border: 0.1px solid hsla(0, 0%, 50%, .094);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
        background-size: cover;
        border-radius: 4px;
        font-weight: 500;
        width: 280px;
        height: 233px;
        margin: 30px auto;
        cursor: pointer;

        img {
            width: 65%;
            margin-left: 43px;
            margin-top: 27px;
            margin-bottom: 20px;
        }

        b {
            font-weight: 500;
            font-size: 1em;
            margin-left: 75px;
            opacity: 0.8;
        }
    }
}
</style>
