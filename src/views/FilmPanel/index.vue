<template>
    <div class="wrapper">
        <aside>
            <div class="back-btn" @click="router.go(-1)">
                <img src="@/assets/back-filled.png" style="margin-right: 5px; width: 12px; opacity: 0.8;">
                返回
            </div>
            <div class="film-card card">
                <img src="@/assets/share.png" alt="" srcset="" class="share">
                <img :src="filmInfo.film_icon" style="height: 80px;margin-left: 12px;margin-bottom: 20px;">
                <span style="font-size: 14px; color: #3C3C3C;">{{ filmInfo.film_name }}</span>
                <div class="film-info">
                    <div>
                        <img src="./images/movie.png">
                        <span>{{ filmInfo.film_type }}</span>
                    </div>
                    <div>
                        <img src="./images/organization.png">
                        <span>{{ filmInfo.film_brand }}</span>
                    </div>
                    <div>
                        <img src="./images/photo-reel.png">
                        <span>{{ filmInfo.film_formats }}</span>
                    </div>
                    <div>
                        <img src="./images/globe.png">
                        <span>{{ filmInfo.film_country }}</span>
                    </div>
                </div>
            </div>
            <div class="film-details card">
                <div class="details-head">
                    <span>Details</span>
                    <img src="./images/help.png" >
                </div>
                <ul>
                    <li>
                        <img src="./images/test-tube.png" >
                        <span>{{ filmInfo.film_process }}</span>
                    </li>
                    <li>
                        <img src="./images/iso.png" >
                        <span>{{ filmInfo.film_iso }}</span>
                    </li>
                    <li>
                        <img src="./images/fill-color.png">
                        <span>{{ filmInfo.film_color_tone }}</span>
                    </li>
                    <li>
                        <img src="./images/new-moon.png">
                        <span>{{ filmInfo.film_grain }}</span>
                    </li>
                    <li>
                        <img src="./images/contrast.png">
                        <span>{{ filmInfo.film_contrast }}</span>
                    </li>
                    <li>
                        <img src="./images/picture.png">
                        <span>
                            {{ filmInfo.film_use_case }}
                        </span>
                    </li>
                    <li>
                        <img src="./images/info.png" alt="" srcset="">
                        <span>{{ filmInfo.film_desc }}</span>
                    </li>
                </ul>
            </div>
            <div class="buy card">
                <span class="card-title">Buy</span>
                <a href="">
                    <div class="buy-btn">
                        <img src="./images/淘宝.png" alt="">
                        <span>Buy from taobao</span>
                    </div>
                </a>
                <p>With the click on the affiliate link you help me to keep the website running.</p>
            </div>
            <AdCard></AdCard>
        </aside>
        <section>
            <div class="photo-wrapper card">
                <div class="photo-title">
                    <img src="./images/screenshot.png">
                    <span>Example Photos</span>
                </div>
                <div class="photo-grid">
                    <div v-for="item in filmInfo.example_card_id">
                        <SCard :card_id="item.id" @click="toInfoCard(item.id)"></SCard>
                    </div>
                </div>
            </div>
            <div class="review-wrapper card">
                <div class="review-title">
                    <img src="./images/speech-bubble-with-dots.png">
                    <span>用户评论</span>
                </div>
                <div class="review-submit">
                    <p>What do you think about the <span style="font-weight: 700;">Fuji C200</span>?</p>
                    <p style="font-size: 0.8em; opacity: 0.8;"> 🖼️ Want to submit a photo?</p>
                </div>
                <div class="review-box">
                    <div class="comment-box">

                    </div>
                </div>
            </div>
        </section>
    </div>
    <router-view v-slot="{ Component }">
        <transition name="bounce">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup>
import { computed, onBeforeMount, reactive} from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore(); 
const key = computed(()=>{
    route.fullPath;
})
onBeforeMount(()=>{
    let filmId = route.params.id;
    store.dispatch("film/getFilmInfo", filmId);
})
const filmInfo = computed(()=>{
    return store.state.film.filmInfo
})
const toInfoCard = (card_id) => {
    router.push({
        name: 'card2',
        params: { card_id }
    })
}
</script>

<style scoped lang="less">
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
.wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 120px;
    position: relative;

    .card {
        background-color: #fff;
        box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
        border-radius: 5px;
    }
}

aside {
    width: 335px;
    margin-bottom: 50px;

    .back-btn {
        position: absolute;
        top: -45px;
        display: flex;
        align-items: center;
        padding: 5px 10px;
        opacity: .4;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        cursor: pointer;

        &:active {
            background-color: grey;
        }
    }

    .film-card {
        height: auto;
        padding-top: 18px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--grey-dark);
        position: relative;

        .share {
            position: absolute;
            color: #d5d5d5;
            font-size: 1.2em;
            top: -2px;
            right: 0;
            transition: all .1s linear;
            transform: scale(.3);
            cursor: pointer;
            opacity: .3;
        }

        .film-info {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            width: 100%;
            margin-left: 45px;
            margin-top: 8px;
        }

        .film-info div {
            color: #141414;
            font-size: .95em;
            margin-bottom: -15px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
                width: 22px;
                height: auto !important;
                margin-right: 8px;
                opacity: .7;
                margin-top: 20px;
                margin-left: 12px;
                margin-bottom: 20px;
            }

            span {
                color: #141414;
                font-weight: 300;
                font-size: 1.05em;
                margin-left: 5px;
            }
        }
    }

    .film-card span:first-child {
        color: #3C3C3C;
    }

    .film-details {
        margin-top: 30px;
        height: auto;
        padding: 30px 20px 15px 30px;
        margin-bottom: 20px;
        color: #141414;
        font-weight: 400;

        .details-head {
            display: flex;
            flex-direction: row;

            // span{
            //     font-size: 1.2em;
            // }
            img {
                width: 18px;
                height: 100%;
                margin-left: auto;
                margin-right: 5px;
                opacity: .5;
                cursor: pointer;
            }
        }

        ul {
            margin-top: 30px;

            li {
                color: #141414;
                font-size: .95em;
                margin-bottom: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img {
                    width: 22px;
                    margin-right: 8px;
                    opacity: .7;
                }

                span {
                    color: #141414;
                    font-weight: 300;
                    font-size: 1em;
                    margin-left: 5px;
                }
            }

            .picture-tag {
                color: #858585;
                font-weight: 300;
                font-size: .94em;
                border: 1px solid #e7e7e7;
                background-color: #f4f4f4;
                border-radius: 10px;
                padding: 0 10px;
                height: 20px;
                display: inline-block;
                margin-right: 5px;
                margin-bottom: 10px;
            }
        }
    }

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
}

section {
    // height: 700px;
    // width: 670px;
    overflow: auto;

    .photo-wrapper {
        margin-top: 0px;
        padding-bottom: 25px;
        height: auto;
        // width: 670px;
        padding: 30px 20px 15px 30px;
        margin-bottom: 20px;
        color: #141414;
        font-weight: 400;

        .photo-title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #141414;
            font-weight: 400;

            img {
                width: 23px;
                margin-right: 10px;
                opacity: 0.8;
            }

            span {
                font-size: 1.2em;
            }
        }

        .photo-grid {
            margin-top: 20px;
            display: grid;
            grid-column-gap: 50px;
            grid-row-gap: 30px;
            grid-template-columns: repeat(3, 1fr);
            justify-content: space-between;
        }
    }

    .review-wrapper {
        margin-top: 30px;
        height: auto;
        padding: 30px 20px 15px 30px;
        margin-bottom: 80px;
        color: #141414;
        font-weight: 400;

        .review-title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 15px;

            img {
                width: 23px;
                margin-right: 10px;
                opacity: 0.8;
            }

            span {
                font-size: 1.2em;
            }
        }

        .review-submit {
            font-weight: 600;
            text-align: center;
            font-size: 1.1em;
        }

        .review-box {
            margin: auto;
            max-width: 100%;

            .comment-box {
                border-radius: 20px;
                box-shadow: 0px 2px 10px 1px rgb(0 52 102 / 11%);
                border: 0px solid #aaaaaa;
                background-color: #ffffff;
                color: #111111;
                margin: auto;
                margin-top: 20px;
            }
        }
    }
}</style>