<template>
    <div class="card-detail-mask">
        <div class="card-container">
            <div class="media-container">
                <div class="slider-container">
                    <Swiper :modules="modules" :pagination="{ type: 'fraction' }" :navigation="true" class="swiper-wrapper">
                        <SwiperSlide class="swiper-slider" v-for="item in cardInfo.photos" :key="item.url" v-viewer>
                            <img style="width:450px;" :src="item.url" alt="图片">
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div class="interaction-container">
                <div class="author">
                    <div class="info" @click="toUserPage(cardInfo.username)">
                        <img :src="cardInfo.user_avatar" alt="头像" class="avatar">
                        <span class="name">{{ cardInfo.nickname }}</span>
                    </div>
                    <div class="follow">关注</div>
                </div>
                <div class="card-scroller">
                    <div class="card-content" v-if="cardInfo.isSimulation">
                        <h2 class="title">{{ cardInfo.card_title }}</h2>
                        <p class="desc">
                            <span>胶片模式：{{ cardInfo.film_simulation }}</span>
                            |
                            <span>颗粒效果：{{ cardInfo.grain_effect }}</span>
                        </p>
                        <p class="desc">
                            <span>色彩效果：{{ cardInfo.color_effect }}</span>
                            |
                            <span>彩色FX蓝色：{{ cardInfo.color_effect_blue }}</span>
                        </p>
                        <p class="desc">
                            <span>白平衡：{{ cardInfo.white_balance }}</span>
                            |
                            <span>动态范围：{{ cardInfo.dynamic_range }}</span>
                        </p>
                        <p class="desc">
                            <span>色彩曲线：{{ cardInfo.highlight + ',' + cardInfo.shadow }}</span>
                            |
                            <span>色彩：{{ cardInfo.color }}</span>
                        </p>
                        <p class="desc">
                            <span>锐度：{{ cardInfo.sharpening }} </span>
                            |
                            <span>高iso降噪： {{ cardInfo.noise_reduction }}</span>
                            |
                            <span>清晰度：{{ cardInfo.clarity }}</span>
                        </p>
                        <div class="date" v-show="cardInfo.equipment"> shot by {{ cardInfo.equipment }}</div>
                    </div>
                    <div class="card-content" v-else>
                        <h2 class="title">{{ cardInfo.card_title }}</h2>
                        <div class="film-type" v-show="cardInfo.film_type">
                            <img style="height: 20px;" src="@/assets/card/film-icon.png" alt="胶片图标">：{{ cardInfo.film_type
                            }}
                        </div>
                        <p class="desc">{{ cardInfo.desc }}</p>
                        <div class="date" v-show="cardInfo.equipment"> shot by {{ cardInfo.equipment }}</div>
                    </div>
                    <div class="comments-container">
                        <div class="total">共3条评论</div>
                        <div class="list-container">
                            <!-- 评论部分 -->
                            <Comment :config="config" :show-size="2" @submit="submit" @like="like" @remove="remove"
                                @report="report">
                            </Comment>
                        </div>
                    </div>
                </div>
                <div class="interactions">
                    <div class="buttons">
                        <div class="left">
                            <span class="like-wrapper">
                                <img src="@/assets/card/empty-heart.svg" alt="喜欢">
                                <span class="count">{{ cardInfo.like }}</span>
                            </span>
                            <span class="chat-wrapper">
                                <img src="@/assets/card/comment.svg" alt="留言">
                                <span class="count">3</span>
                            </span>
                        </div>
                        <div class="share-wrapper">
                            <img src="@/assets/card/share.svg" alt="分享">
                        </div>
                    </div>
                    <!-- <div class="comment-wrapper">
                        <div class="input-wrapper">
                            <input type="text" class="comment-input" placeholder="说点什么">
                            <div class="input-buttons">
                                <img src="@/assets/card/smile.svg" alt="表情">
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="close" @click="router.go(-1)">
                <img src="@/assets/card/close.svg" alt="点击关闭">
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
import { useRouter, useRoute } from 'vue-router'
import { onBeforeMount, computed, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { submit, like, remove, report, commentData } from '@/utils/comment';
const store = useStore()
const router = useRouter();
const route = useRoute();
const modules = [Navigation, Pagination];

// 获取卡片详细信息
const cardInfo = computed(() => {
    if(route.name == 'card1'){
        let card_id = route.params.id;
        return store.getters['explore/getOneCardInfo'](card_id)
    }else{
        return store.state.card.cardInfo
    }    
})
onBeforeMount(()=>{
    // if(route.name != 'card1'){
    //     let card_id = route.params.card_id;
    //     console.log(card_id);
    //     store.dispatch("card/getCardInfo", card_id);
    // }
})
const toUserPage = (username) => {
    router.push({
        name: 'user',
        params: {
            username
        }
    })
}

// 虚假评论信息数据
const config = reactive(commentData);
</script>

<style lang="less" scoped>
.active {
    background: hsla(0, 0%, 97.6%, .98);
}

.card-detail-mask {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: hsla(0, 0%, 97.6%, .98);
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
                    cursor: pointer;

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
                height: 460px;
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

                    .film-type {
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
                // height: 142px;
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
                            background-image: url(@/assets/card/write.png);
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
}
</style>

