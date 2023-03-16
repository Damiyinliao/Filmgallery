<template>
  <section>
    <div class="photo-wrapper card">
      <div class="photo-title">
        <img src="./images/screenshot.png">
        <span>Example Photos</span>
      </div>
      <div class="photo-grid">
        <div v-for="item in props.card_id">
          <SCard :card_id="item._id" @click="toInfoCard(item._id)"></SCard>
        </div>
      </div>
    </div>
    <div class="review-wrapper card">
      <div class="review-title">
        <img src="./images/speech-bubble-with-dots.png">
        <span>用户评论</span>
      </div>
      <div class="review-submit">
        <p>留下你对 <span style="font-weight: 700;">{{ props.fname }}</span> 的看法!!!</p>
        <p style="font-size: 0.8em; opacity: 0.8;">提交你自己的照片</p>
      </div>
      <div class="review-box">
        <!-- <div class="comment-box"> -->
        <Comment 
          :config="config" 
          :show-size="2" 
          @submit="submit" 
          @like="like" 
          @remove="remove" 
          @report="report">
        </Comment>
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, inject } from "vue"
import { submit, like, remove, report, commentData } from '@/utils/comment';
const props = defineProps({
  card_id: Array,
  fname: String
});
const toInfoCard = inject('showInfoCard')
// 虚假评论信息数据
const config = reactive(commentData);

</script>

<style lang="less" scoped>
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
    width: 800px;

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
      // font-weight: 600;
      text-align: center;
      font-size: 1.1em;
    }

    .review-box {
      margin: auto;
      max-width: 100%;
    }
  }
}
</style>
