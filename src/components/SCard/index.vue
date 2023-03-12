<template>
  <!-- 展示小卡片组件 -->
  <div class="card-item">
    <el-image :src="cardInfo.photo_url" :key="cardInfo.photo_url" lazy fit="contain" />
    <div class="footer">
      <a href="" class="title"><span>{{ cardInfo.card_title }}</span></a>
      <div class="author-wrapper">
        <a href=""><img :src="cardInfo.user_avatar"><span class="name">{{ cardInfo.nickname }}</span></a>
        <span class="like-wrapper">
          <img src="@/assets/empty-heart.svg">
          <span class="count">{{ cardInfo.like }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onBeforeMount, reactive, inject, watch } from "vue"
import { ElImage } from "element-plus";
import 'element-plus/es/components/image/style/css'
const $API = inject("$API");
const props = defineProps(['card_id']);
// 默认数据
let cardInfo = reactive({
  photo_url: "http://img.filmgallery.cn/avatar/default_film.png",
  card_title: "好运连连",
  nickname: "Ddo",
  user_avatar: "http://img.filmgallery.cn/avatar/63f588fba1ed9e504406a03c.webp",
  like: 99
})
function getCardInfo( c ) {
  let res = $API.reqCardInfo(c);
  return res;
}
onBeforeMount(async () => {
  let res = await getCardInfo(props.card_id);
  cardInfo.photo_url = res.data.photos[0].url || null;
  cardInfo.card_title = res.data.card_title;
  cardInfo.nickname = res.data.nickname;
  cardInfo.user_avatar = res.data.user_avatar;
  cardInfo.like = res.data.like
})
// watch(() => props.card_id,
//   (newValue, oldValue) => {
//     let data = getCardInfo(newValue);
//     cardInfo.photo_url = data.photos[0].url || null;
//     cardInfo.card_title = data.card_title;
//     cardInfo.nickname = data.nickname;
//     cardInfo.user_avatar = data.user_avatar;
//     cardInfo.like = data.like
//   }, { immediate: true })
</script>

<style lang="less" scoped>
.card-item {
  width: 216px;
  height: 384px;
  background-color: #fff;
  box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
  border-radius: 5px;
  transition: all .1s ease;
  overflow: hidden;
  .el-image {
    cursor: pointer;
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
      height: 44px;
    }

    .author-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 20px;
      color: #666;
      font-size: 12px;
      transition: color 1s;

      a {
        display: flex;
        align-items: center;
        color: inherit;

        img {
          margin-right: 6px;
          width: 20px;
          height: 20px;
          border-radius: 20px;
          border: 0.5px solid #e6e6e6;
        }
      }

      .like-wrapper {
        height: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
  }
}

.card-item:hover {
  transform: scale(1.04);
}
</style>
