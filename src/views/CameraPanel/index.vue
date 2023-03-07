<template>
    <div id="camera">
        <aside>
            <BackBtn></BackBtn>
            <div class="detail card">
                <div class="type">
                    <span>胶片相机</span>
                    <span>{{ camera.type }}</span>
                </div>
                <img :src="camera.pic_url_big" alt="相机图片大图" class="camera-img">
                <div class="title" v-show="camera.brand == 'canon'">
                    <div class="names">
                        <p>{{ camera.eur_name }}<img src="https://global.canon/ja/c-museum/common/img/icon_09.png"
                                alt="亚洲名称">
                        </p>
                        <p>{{ camera.jap_name }}<img src="https://global.canon/ja/c-museum/common/img/icon_07.png"
                                alt="日本名称">
                        </p>
                        <p>{{ camera.ame_name }}<img src="https://global.canon/ja/c-museum/common/img/icon_08.png"
                                alt="美洲名称">
                        </p>
                    </div>
                </div>
                <ul class="explain">
                    <li><img src="https://global.canon/ja/c-museum/common/img/icon_09.png">亚洲名称 / 欧洲名称 / 大洋洲名称</li>
                    <li><img src="https://global.canon/ja/c-museum/common/img/icon_08.png" alt="">美洲名称</li>
                    <li><img src="https://global.canon/ja/c-museum/common/img/icon_07.png" alt="">日本名称</li>
                </ul>
            </div>
            <div class="desc card">
                <div class="tab-nav">
                    <ul>
                        <li @click="showOutline = true" :class="{ active: showOutline }">概要</li>
                        <li @click="showOutline = false" :class="{ active: !showOutline }">规格</li>
                    </ul>
                </div>
                <div class="outline" v-show="showOutline">
                    <ul>
                        <li>
                            <span>上市时间</span>
                            <span>{{ camera.ttm }}</span>
                        </li>
                        <li>
                            <span>原始价格</span>
                            <span>{{ camera.price }}</span>
                        </li>
                        <li>
                            <span>描述</span>
                            <span>{{ camera.desc }}</span>
                        </li>
                    </ul>
                </div>
                <div class="spec" v-show="!showOutline">
                    <ul>
                        <li v-for="item in camera.spec" :key="item.name">
                            <span>{{ item.name }}</span>
                            <span>{{ item.value }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <Section>
            <div v-for="item in camera.intro_card_id">
                <SCard :card_id="item._id" @click="toInfoCard(item._id)"></SCard>
            </div>
        </Section>
    </div>
    <router-view v-slot="{ Component }">
        <transition name="bounce">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup>
import { reactive, ref, computed, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import Section from './section';
const showOutline = ref(true);
const store = useStore();
const router = useRouter()
const route = useRoute()
onBeforeMount(() => {
    store.dispatch("camera/getCameraInfo", route.params.cameraname)
})
const camera = computed(() => {
    return store.state.camera.cameraInfo;
})
const toInfoCard = (card_id) => {
    router.push({
        name: 'card3',
        params: { card_id }
    })
}
</script>

<style lang="less" scoped>
.bounce-enter-active {
    animation: bounce-in 0.4s;
}
.bounce-leave-active{
    animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
#camera {
    display: flex;
    justify-content: space-around;
    margin-top: 120px;
    position: relative;
    margin-bottom: 60px;
    height: 1820px;
}

.active {
    border-bottom: 1px solid #b7b7b7;
}

aside {
    width: 400px;
    // height: 700px;
    .detail {
        padding-top: 80px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .camera-img {
        // margin-top: 30px;
        width: 200px;
        // margin-bottom: 40px;
    }

    .type {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        padding-left: 20px;
    }

    .type span:first-child {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 3px;
        color: #333;
    }

    .type span:last-child {
        font-size: 16px;
        color: #777;
    }

    .title {

        // height: 100px;
        .names {
            // width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 3px;
            }

            img {
                width: 20px;
            }
        }
    }

    .explain {
        display: inline-block;
        margin-top: 50px;
        text-align: center;

        li {
            float: left;
            margin-right: 16px;
            font-size: 0.85em;
            margin-bottom: 2px;
            color: #b5b4b4;
            font-weight: 300;

            img {
                width: 10px;
            }
        }
    }

    .explain li:last-child {
        margin-right: 0;
    }

    .desc {
        // height: 800px;
        margin-top: 30px;
        padding: 30px 20px 20px;
    }

    .tab-nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #141414;
        font-weight: 500;
        font-size: 1.1em;
        cursor: pointer;
        padding: 20px 0;
    }

    .tab-nav li {
        width: 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        // border-bottom: 1px solid #000;
        transition: all .5s ease;
    }

    .tab-nav li:last-child {
        margin-left: 5px;
    }

    .tab-nav ul>li:hover {
        transform: scale(1.04);
        background-color: #b7b7b7;
    }

    .outline ul>li,
    .spec ul>li {
        color: #141414;
        font-size: 0.95em;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #777;

        span {
            width: 150px;
            // height: 30px;
            line-height: 30px;

        }
    }

    .outline ul>li,
    .spec ul>li span:first-child {
        text-align: center;
    }
}

section {
    width: 800px;
    // height: 700px;
}</style>
