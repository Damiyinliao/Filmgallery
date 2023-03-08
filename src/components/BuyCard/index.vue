<template>
    <div class="buy card">
        <span class="card-title">Buy</span>
        <a href="">
            <div class="buy-btn">
                <img src="@/assets/taobai.png" alt="">
                <span>Buy from taobao</span>
            </div>
        </a>
        <p>With the click on the affiliate link you help me to keep the website running.</p>
    </div>
</template>

<script setup>
import { } from "vue"
</script>

<style lang="less" scoped>
.buy {
    margin-top: 30px;
    height: auto;
    padding: 30px 20px 15px 30px;
    margin-bottom: 20px;
    color: #141414;
    font-weight: 400;

    .card-title {
        font-size: 1.2em;
    }

    .buy-btn {
        width: 100%;
        height: 31px;
        margin-top: 20px;
        margin-bottom: 10px;
        background-color: #fff;
        border: 1px solid #a4a4a4;
        border-radius: 4px;
        font-weight: 400;
        font-size: 1em;
        color: #535353;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: .8;
        cursor: pointer;
        transition: transform .1s ease-in;

        img {
            width: 17px;
            margin-right: 5px;
            opacity: 1;
        }
    }

    .buy-btn:hover {
        background-color: #c5def7;
        transform: scale(1.04);
    }

    p {
        font-size: 0.5em;
        text-align: center;
        opacity: 0.3;
        margin-top: 20px;
    }
}
</style>
