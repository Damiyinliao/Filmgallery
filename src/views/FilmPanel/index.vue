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
           
            <AdCard></AdCard>
        </aside>
        <Section :card_id="filmInfo.example_card_id"></Section>
    </div>
    <router-view v-slot="{ Component }">
        <transition name="bounce">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup>
import Section from './Section.vue'
import { computed, onBeforeMount, reactive, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore(); 
const key = computed(()=>{
    route.fullPath;
})
onMounted(()=>{
    let filmId = route.params.id;
    store.dispatch("film/getFilmInfo", filmId);
})
const filmInfo = computed(()=>{
    return store.state.film.filmInfo
})
// const toInfoCard = (card_id) => {
//     router.push({
//         name: 'card2',
//         params: { card_id }
//     })
// }
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

     
}
</style>