<template>
    <div class="card-detail-mask has-pre-route">
        <div class="card-container">
            <div class="media-container">
                <div class="slider-container">
                    <Swiper :modules="modules" :pagination="{ type: 'fraction' }" :navigation="true" class="swiper-wrapper">
                        <SwiperSlide class="swiper-slider" v-for="item in cardInfo.photos" :key="item._id">
                            <img style="width:450px;" :src="item.url" alt="" srcset="">
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div class="interaction-container">
                <div class="author">
                    <div class="info">
                        <a href=""><img :src="cardInfo.user_avatar" alt="头像" class="avatar"></a>
                        <a href="" class="name">{{ cardInfo.nickname }}</a>
                    </div>
                    <div class="follow">关注</div>
                </div>
                <div class="card-scroller">
                    <div class="card-content" v-if="cardInfo.isSimulation">
                        <h2 class="title">{{ cardInfo.card_title }}</h2>
                        <p class="desc"><span>胶片模式：{{ cardInfo.film_simulation }}</span> | <span>颗粒效果：{{
                            cardInfo.grain_effect }}</span></p>
                        <p class="desc"><span>色彩效果：{{ cardInfo.color_effect }}</span> | <span>彩色FX蓝色：{{
                            cardInfo.color_effect_blue }}</span></p>
                        <p class="desc"><span>白平衡：{{ cardInfo.white_balance }}</span> | <span>动态范围：{{ cardInfo.dynamic_range }}
                            </span></p>
                        <p class="desc"><span>色彩曲线：{{ cardInfo.highlight + ',' + cardInfo.shadow }}</span> | <span>色彩：{{
                            cardInfo.color }}</span></p>
                        <p class="desc"><span>锐度：{{ cardInfo.sharpening }} </span> | <span>高iso降噪： {{
                            cardInfo.noise_reduction }}</span> | <span>清晰度：{{ cardInfo.clarity }}</span></p>
                        <div class="date" v-show="cardInfo.equipment"> shot by {{ cardInfo.equipment }}</div>
                    </div>
                    <div class="card-content" v-else>
                        <h2 class="title">{{ cardInfo.card_title }}</h2>
                        <div class="film-type" v-show="cardInfo.film_type"><img style="height: 20px;" src="./images/film-icon.png" alt="胶片图标">：{{ cardInfo.film_type }}</div>
                        <p class="desc">{{ cardInfo.desc }}</p>
                        <div class="date" v-show="cardInfo.equipment"> shot by {{ cardInfo.equipment }}</div>
                    </div>
                    <div class="comments-container">
                        <div class="total">共42评论</div>
                        <div class="list-container">
                            <!-- 评论部分 -->
                        </div>
                    </div>
                </div>
                <div class="interactions">
                    <div class="buttons">
                        <div class="left">
                            <span class="like-wrapper">
                                <svg style="width: 28px;" t="1676210652014" class="icon" viewBox="0 0 1024 1024"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1582" width="28" height="28"
                                    data-spm-anchor-id="a313x.7781069.0.i3">
                                    <path
                                        d="M695.30624 143.44192c-41.85088 7.28576-76.5184 20.25472-105.76384 40.01792l-30.00832 24.2944-47.16544 47.16544C445.07648 203.27936 416.09728 139.9808 290.83648 142.00832l-52.87936 8.576c-45.00992 13.68064-88.192 39.87456-114.33984 72.89344-15.35488 19.38944-30.36672 42.7008-40.01792 67.1744-56.9856 144.5376 41.74848 234.69056 108.6208 301.568l117.1968 115.7632 144.35328 142.9248c17.43872 14.08512 30.55616 38.17984 68.60288 31.44704 45.5424-8.064 93.2608-74.69056 122.91072-104.33536a2629899.9808 2629899.9808 0 0 1 170.07616-168.64768c52.47488-52.46976 111.60064-96.25088 134.3488-178.65216 43.14112-156.30336-101.55008-313.90208-254.40256-287.27808z m184.36608 314.42432c-22.13888 37.94432-57.02656 65.60256-87.17312 95.75936-56.68864 56.2176-113.38752 112.44032-170.08128 168.64768-15.55968 15.55456-95.83104 104.43776-110.04928 102.90688-14.14656 1.25952-33.00352-27.35616-42.88-37.16096l-114.33472-112.91136c-46.68928-46.19776-93.38368-92.42624-140.0576-138.63424-27.06944-27.06432-59.50976-52.54144-75.76064-90.0352-28.83072-66.52928-7.79264-149.32992 30.01856-190.09024 21.36576-23.04 51.52256-43.21792 85.75488-52.87936 12.38016-1.90464 24.76544-3.8144 37.15584-5.71392 71.44448 0.31232 87.64928 26.24512 131.48672 47.16032l88.61184 88.61184c45.78816-35.10784 76.7488-89.99424 130.05824-117.1968 116.6592-59.52 231.63392 24.5248 254.40256 121.48736 9.91232 42.18368-1.33632 92.96384-17.152 120.04864z"
                                        fill="#d81e06" p-id="1583"></path>
                                </svg>
                                <span class="count">{{ cardInfo.like }}</span>
                            </span>
                            <span class="chat-wrapper">
                                <svg style="width: 25px;" t="1676262700613" class="icon" viewBox="0 0 1024 1024"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4736" width="25" height="25">
                                    <path
                                        d="M512 64c259.2 0 469.333333 200.576 469.333333 448s-210.133333 448-469.333333 448a484.48 484.48 0 0 1-232.725333-58.88l-116.394667 50.645333a42.666667 42.666667 0 0 1-58.517333-49.002666l29.76-125.013334C76.629333 703.402667 42.666667 611.477333 42.666667 512 42.666667 264.576 252.8 64 512 64z m0 64C287.488 128 106.666667 300.586667 106.666667 512c0 79.573333 25.557333 155.434667 72.554666 219.285333l5.525334 7.317334 18.709333 24.192-26.965333 113.237333 105.984-46.08 27.477333 15.018667C370.858667 878.229333 439.978667 896 512 896c224.512 0 405.333333-172.586667 405.333333-384S736.512 128 512 128z m-157.696 341.333333a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z m159.018667 0a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z m158.997333 0a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z"
                                        fill="#333333" p-id="4737"></path>
                                </svg>
                                <span class="count">114</span>
                            </span>
                        </div>
                        <div class="share-wrapper">
                            <svg style="width: 28px;" t="1676262775258" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5685" width="28" height="28">
                                <path
                                    d="M874.9 459.4c-18.8 0-34 15.2-34 34v355.7c0 18.6-15.5 33.7-34.5 33.7H181.5c-19 0-34.5-15.1-34.5-33.7V232.3c0-18.6 15.5-33.7 34.5-33.7H541c18.8 0 34-15.2 34-34s-15.2-34-34-34H181.5C125 130.6 79 176.2 79 232.3v616.8c0 56 46 101.7 102.5 101.7h624.9c56.5 0 102.5-45.6 102.5-101.7V493.4c0-18.8-15.2-34-34-34z"
                                    fill="" p-id="5686"></path>
                                <path
                                    d="M885.5 82.7H657.1c-18.8 0-34 15.2-34 34s15.2 34 34 34h169.7L358.5 619.1c-13.3 13.3-13.3 34.8 0 48.1 6.6 6.6 15.3 10 24 10s17.4-3.3 24-10l470-470v169.7c0 18.8 15.2 34 34 34s34-15.2 34-34V141.5c0.1-32.4-26.4-58.8-59-58.8z"
                                    fill="" p-id="5687"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="comment-wrapper">
                        <div class="input-wrapper">
                            <input type="text" class="comment-input" placeholder="说点什么">
                            <div class="input-buttons">
                                <svg style="width: 24px" t="1676263032780" class="icon" viewBox="0 0 1024 1024"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6634" width="200" height="200">
                                    <path
                                        d="M511.5 958.9c-60.3 0-118.9-11.8-174-35.1-53.2-22.5-101-54.7-142.1-95.8-41-41-73.3-88.8-95.8-142.1-23.3-55.1-35.1-113.7-35.1-174s11.8-118.9 35.1-174c22.5-53.2 54.7-101 95.8-142.1 41-41 88.8-73.3 142.1-95.8 55.1-23.3 113.7-35.1 174-35.1s118.9 11.8 174 35.1c53.2 22.5 101 54.7 142.1 95.8 41 41 73.3 88.8 95.8 142.1 23.3 55.1 35.1 113.7 35.1 174s-11.8 118.9-35.1 174c-22.5 53.2-54.7 101-95.8 142.1-41 41-88.8 73.3-142.1 95.8-55.1 23.3-113.6 35.1-174 35.1z m0-838c-52.8 0-104 10.3-152.2 30.7-46.6 19.7-88.4 47.9-124.3 83.8s-64.1 77.7-83.8 124.3c-20.4 48.2-30.7 99.4-30.7 152.2s10.3 104 30.7 152.2c19.7 46.6 47.9 88.4 83.8 124.3s77.7 64.1 124.3 83.8c48.2 20.4 99.4 30.7 152.2 30.7s104-10.3 152.2-30.7c46.6-19.7 88.4-47.9 124.3-83.8 35.9-35.9 64.1-77.7 83.8-124.3 20.4-48.2 30.7-99.4 30.7-152.2s-10.3-104-30.7-152.2c-19.7-46.6-47.9-88.4-83.8-124.3-35.9-35.9-77.7-64.1-124.3-83.8-48.2-20.3-99.4-30.7-152.2-30.7z"
                                        fill="" p-id="6635"></path>
                                    <path d="M652.2 423.3m-54.7 0a54.7 54.7 0 1 0 109.4 0 54.7 54.7 0 1 0-109.4 0Z" fill=""
                                        p-id="6636"></path>
                                    <path d="M370.5 423.3m-54.7 0a54.7 54.7 0 1 0 109.4 0 54.7 54.7 0 1 0-109.4 0Z" fill=""
                                        p-id="6637"></path>
                                    <path
                                        d="M511.5 775.9c-42.6 0-84.9-10.4-122.4-30.1-27-14.1-51.5-33.1-72.1-55.5-11.4-12.4-9.5-32 4.2-41.8 11.5-8.2 27.3-6.7 36.9 3.7 16.3 17.8 35.7 32.8 57.1 44 29.9 15.7 62.4 23.6 96.4 23.6 34 0 66.5-8 96.4-23.6 21.4-11.2 40.8-26.2 57.1-44 9.5-10.4 25.4-11.9 36.9-3.7 13.7 9.8 15.6 29.4 4.2 41.8-20.6 22.5-45.1 41.4-72.1 55.5-37.7 19.7-80 30.1-122.6 30.1z"
                                        fill="" p-id="6638"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="close" @click="router.go(-1)">
                <svg t="1676270031128" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="8066" width="32" height="32">
                    <path
                        d="M853.8 215.4l-45.2-45.2L512 466.7 215.4 170.2l-45.2 45.2L466.7 512 170.2 808.6l45.2 45.2L512 557.3l296.6 296.5 45.2-45.2L557.3 512z"
                        fill="#CCCCCC" p-id="8067"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
// 引入Swiper组件进行照片的显示
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { useRouter } from 'vue-router'
import { onBeforeMount, computed, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const router = useRouter();
const modules = [Navigation, Pagination];
let card_id = router.currentRoute.value.params.card_id;
if(card_id){
    onBeforeMount(() => {
        store.dispatch("card/getCardInfo", card_id)
    })
}
// 获取卡片详细信息
const cardInfo = computed(() => {
    return store.state.card.cardInfo
})
</script>

<style lang="less" scoped>
.active {
    background: hsla(0, 0%, 97.6%, .98);
}

.card-detail-mask {
    // position: relative;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // // width: 100vw;
    // // height: 100vh;
    // background: hsla(0, 0%, 100%, 0);
    // transition: all .4s;
    // z-index: 20;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: hsla(0,0%,97.6%,.98);
    // background: hsla(0,0%,100%,0);
    transition: all .4s;
    z-index: 20;

    .card-container {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(428.5px, 150px) scale(1);
        width: 850px;
        overflow: visible;
        display: flex;
        border: 0.5px solid rgba(0, 0, 0, .08);
        box-shadow: 0 0 100px rgb(0 0 0 / 10%);
        border-radius: 24px;
        background: #fff;
        transform-origin: left top;
        transition: transform .4s, width .4s;

        .media-container {
            width: 450px;
            height: 600px;
            position: relative;
            background: #f9f9f9;
            flex-shrink: 0;
            flex-grow: 0;
            -webkit-user-select: none;
            user-select: none;
            overflow: hidden;
            border-radius: 24px 0 0 24px;
            transition: all .3s;
            transform: translateZ(0);

            .slider-container {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .swiper-wrapper {
                    width: 100%;
                    // height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .swiper-slider {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }

        .interaction-container {
            height: 600px;
            width: 400px;
            flex-shrink: 0;
            flex-grow: 0;
            border-left: 0.5px solid rgba(0, 0, 0, .1);

            .author {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 80px;
                padding: 20px 30px;
                transition: all .2s;
                border-bottom: 0.5px solid transparent;

                .info {
                    display: flex;
                    align-items: center;

                    .avatar {
                        width: 40px;
                        height: 40px;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        cursor: pointer;
                        border-radius: 100%;
                        border: 0.5px solid #ebebeb;
                    }

                    .name {
                        margin-left: 12px;
                        font-weight: 500;
                        font-size: 16px;
                        color: #333;
                    }
                }

                .follow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 18px;
                    width: 68px;
                    height: 36px;
                    background: #ff2442;
                    font-weight: 500;
                    font-size: 14px;
                    color: #fff;
                    cursor: pointer;
                    transition: all .2s;
                }
            }

            .card-scroller {
                height: 378px;
                transition: all .3s;
                overflow-y: scroll;

                .card-content {
                    padding: 10px 0 20px;
                    margin: 0 30px;
                    color: #333;
                    border-bottom: 0.5px solid rgba(0, 0, 0, .1);

                    .title {
                        margin-bottom: 20px;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 32px;
                    }
                    .film-type{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        height: 30px;
                        line-height: 30px;
                    }

                    .desc {
                        margin: 0;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 28px;
                        color: #333;
                        white-space: pre-wrap;
                        overflow-wrap: break-word;
                    }

                    .date {
                        margin-top: 10px;
                        font-size: 12px;
                        line-height: 24px;
                        color: rgba(51, 51, 51, .6);
                    }
                }

                .comments-container {
                    padding: 20px 30px;
                }
            }

            .interactions {
                padding: 20px 30px 0;
                height: 142px;
                border-top: 0.5px solid rgba(0, 0, 0, .1);

                .buttons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .count {
                        margin-left: 6px;
                        margin-right: 12px;
                        font-weight: 500;
                        font-size: 12px;
                    }

                    .left {
                        display: flex;

                        .like-wrapper {
                            position: relative;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                        }

                        .chat-wrapper {
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                        }
                    }

                    .share-wrapper {
                        cursor: pointer;
                        position: relative;
                    }
                }

                .comment-wrapper {
                    display: flex;
                    margin-top: 20px;
                    font-size: 14px;
                    overflow: hidden;

                    .input-wrapper {
                        position: relative;
                        width: 100%;
                        flex-shrink: 0;
                        height: 44px;
                        transition: all .3s;

                        .comment-input {
                            padding-left: 20px;
                            padding-right: 92px;
                            width: 100%;
                            height: 100%;
                            line-height: 18px;
                            background: #f5f5f5;
                            caret-color: #5b92e1;
                            border-radius: 22px;
                        }

                        .comment-input:placeholder-shown {
                            padding-left: 36px;
                            background-image: url(./images/search.png);
                            background-repeat: no-repeat;
                            background-size: 16px 16px;
                            background-position: 16px 14px;
                        }

                        .input-buttons {
                            position: absolute;
                            right: 0;
                            top: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 92px;
                            height: 100%;
                            color: rgba(51, 51, 51, .3);
                        }
                    }
                }
            }
        }

        .close {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: -86px;
            width: 44px;
            height: 44px;
            border-radius: 44px;
            background: #fff;
            border: 0.5px solid rgba(0, 0, 0, .06);
            box-shadow: 0 1px 12px rgb(0 0 0 / 6%);
            cursor: pointer;
            transition: all .3s;
        }
    }
}</style>

