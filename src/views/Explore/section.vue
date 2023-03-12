<template>
    <section class="card-item">
        <el-image :src=card.photos[0].url :key="card.photos[0].url" @click="emit('showCard', card._id)" lazy fit="contain" />
        <div class="footer">
            <a href="" class="title">
                <span>{{ card.card_title }}</span>
            </a>
            <div class="author-wrapper">
                <router-link class="author" :to="{ name: 'user', params: { username: card.username }}">
                    <img :src=card.user_avatar class="author-avator">
                    <span class="name">{{ card.nickname }}</span>
                </router-link>
                <span class="like-wrapper" @click="giveALike(card._id)">
                    <img src="@/assets/empty-heart.svg" v-show="!isLiked">
                    <img src="@/assets/red-heart.svg" v-show="isLiked">
                    <span class="like-count">{{ card.like }}</span>
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from "vue"
import { ElImage } from "element-plus";
import 'element-plus/es/components/image/style/css'
const props = defineProps({
    info:Object
})
const card = computed(()=>{
    return props.info
})
const emit = defineEmits(['showCard']);

const isLiked = ref(false);

const giveALike = (id) => {
    isLiked.value = !isLiked.value;
    // 点赞成功，
    if(isLiked.value == true){
        card.value.like ++;
        console.log("点赞", id);
    }
    if(isLiked.value == false){
        card.value.like --;
        console.log("取消点赞");
    }
}
// 通过nickname查找用户并去他的个人页
const toAuthorPage = (nickname) => {
    
}
</script>

<style lang="less" scoped>
.card-item {
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
    width: 216px;
    // height: 384px;
    // position: absolute;
    overflow: hidden;
    border-radius: 10px;
    transition: all .5s ease;

    .el-image {
        width: 216px;
        // height: 288px;
        display: block;
        cursor: pointer;
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
            // height: 38px;
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

.card-item:hover {
    transform: scale(1.04);
}
</style>
