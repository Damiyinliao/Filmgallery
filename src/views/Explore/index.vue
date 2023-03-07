<template>
    <div id="explore">
        <div class="feeds-page">
            <div class="feeds-wrapper">
                <section class="note-item" v-for="item in cardList" :key="item._id" @click="getCardInfo(item._id)">
                    <img :src=item.photos[0].url @click="toInfoCard(item._id)">
                    <div class="footer">
                        <a href="" class="title">
                            <span>{{ item.card_title }}</span>
                        </a>
                        <div class="author-wrapper">
                            <a href="" class="author">
                                <img :src=item.user_avatar class="author-avator">
                                <span class="name">{{ item.nickname }}</span>
                            </a>
                            <span class="like-wrapper">
                                <!-- <span class="like-lottie"></span> -->
                                <svg style="width: 15px;" t="1676210652014" class="icon" viewBox="0 0 1024 1024"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1582" width="200" height="200"
                                    data-spm-anchor-id="a313x.7781069.0.i3">
                                    <path
                                        d="M695.30624 143.44192c-41.85088 7.28576-76.5184 20.25472-105.76384 40.01792l-30.00832 24.2944-47.16544 47.16544C445.07648 203.27936 416.09728 139.9808 290.83648 142.00832l-52.87936 8.576c-45.00992 13.68064-88.192 39.87456-114.33984 72.89344-15.35488 19.38944-30.36672 42.7008-40.01792 67.1744-56.9856 144.5376 41.74848 234.69056 108.6208 301.568l117.1968 115.7632 144.35328 142.9248c17.43872 14.08512 30.55616 38.17984 68.60288 31.44704 45.5424-8.064 93.2608-74.69056 122.91072-104.33536a2629899.9808 2629899.9808 0 0 1 170.07616-168.64768c52.47488-52.46976 111.60064-96.25088 134.3488-178.65216 43.14112-156.30336-101.55008-313.90208-254.40256-287.27808z m184.36608 314.42432c-22.13888 37.94432-57.02656 65.60256-87.17312 95.75936-56.68864 56.2176-113.38752 112.44032-170.08128 168.64768-15.55968 15.55456-95.83104 104.43776-110.04928 102.90688-14.14656 1.25952-33.00352-27.35616-42.88-37.16096l-114.33472-112.91136c-46.68928-46.19776-93.38368-92.42624-140.0576-138.63424-27.06944-27.06432-59.50976-52.54144-75.76064-90.0352-28.83072-66.52928-7.79264-149.32992 30.01856-190.09024 21.36576-23.04 51.52256-43.21792 85.75488-52.87936 12.38016-1.90464 24.76544-3.8144 37.15584-5.71392 71.44448 0.31232 87.64928 26.24512 131.48672 47.16032l88.61184 88.61184c45.78816-35.10784 76.7488-89.99424 130.05824-117.1968 116.6592-59.52 231.63392 24.5248 254.40256 121.48736 9.91232 42.18368-1.33632 92.96384-17.152 120.04864z"
                                        fill="#d81e06" p-id="1583"></path>
                                </svg>
                                <span class="like-count">{{ item.like }}</span>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="bounce">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { onBeforeMount, computed } from "vue";
import { useStore } from 'vuex';
import { useRouter, useRoute} from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute()
// 获取所有Card的数据
onBeforeMount(() => {
    store.dispatch("explore/getAllCards");
});
const cardList = computed(() => {
    return store.state.explore.allCards;
})
// 呼出Card
const toInfoCard = (id) => {
    router.push({
        name: 'card1',
        params: { id }
    })
}
// 点击 跳转前派发获取Card的详细信息
const getCardInfo = (id) => {
    store.dispatch("card/getCardInfo", id)
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

#explore {
    .feeds-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-top: 88px;
        min-height: 100vh;
        width: 100vw;
        min-width: 960px;
        max-width: 100%;
        padding-bottom: 150px;
        .feeds-wrapper {
            display: grid;
            grid-column-gap: 20px;
            grid-row-gap: 30px;
            grid-template-columns: repeat(5, 1fr);
            justify-content: space-between;
            // position: relative;
            transition: width .5s;
            margin: 0 auto;

            .note-item {
                background-color: #fff;
                box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
                width: 216px;
                height: 384px;
                // position: absolute;
                overflow: hidden;
                border-radius: 10px;
                transition: all .5s ease;

                img {
                    width: 216px;
                    height: 288px;
                }

                .footer {
                    padding: 12px;

                    .title {
                        margin-bottom: 8px;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                        color: #333;
                        height: 38px;
                    }

                    .author-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 20px;
                        color: #666;
                        font-size: 12px;
                        transition: color 1s;

                        .author {
                            display: flex;
                            align-items: center;
                            color: inherit;

                            .author-avator {
                                margin-right: 6px;
                                width: 20px;
                                height: 20px;
                                border-radius: 20px;
                                border: 0.5px solid #e6e6e6;
                            }

                            .name {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                max-width: 100px;
                            }
                        }

                        .like-wrapper {
                            position: relative;
                            cursor: pointer;
                            display: flex;
                            align-items: center;

                            .like-count {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                margin-left: 2px;
                                max-width: 40px;
                            }
                        }
                    }

                }
            }

            .note-item:hover {
                transform: scale(1.04);
            }
        }
    }
}</style>
