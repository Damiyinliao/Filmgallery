<template>
  <div id="user-page">
    <div class="user">
      <div class="user-info">
        <img :src="user.avatar" alt="头像" class="user-image">
        <div class="user-nickname"><span class="user-name">{{ user.nickname }}</span></div>
        <div class="user-content"><span class="user-film-id">{{ user.id }}</span></div>
        <div class="user-desc">{{ user.desc }}</div>
        <div class="user-tags">{{ user.tag }}</div>
        <div class="user-interactions">
          <div>
            <span class="count">{{ user.follows }}</span>
            <span class="shows">关注</span>
          </div>
          <div>
            <span class="count">{{ user.fans }}</span>
            <span class="shows">粉丝</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="tabs-list">
        <div class="tab-item" :class="{ active: !showLikes }" @click="showLikes=false">发布的胶片（模拟）</div>
        <div class="tab-item" :class="{ active: showLikes }" @click="showLikes=true">喜欢的胶片（模拟）</div>
      </div>
    </div>
    <div class="recipes-container">
      <div class="recipes">
        <SCard 
          :card_id="item._id" 
          v-for="item in showCards" 
          :key="item._id"
          @click="toInfoCard(item._id)"
        ></SCard>
      </div>
    </div>
    <div class="back-top" @click="backTop" v-if="btnShow">
      <img src="@/assets/toTop.svg" alt="去顶部">
    </div>
</div>
<router-view v-slot="{ Component }">
    <transition name="bounce">
        <component :is="Component" />
    </transition>
</router-view>
</template>

<script setup>
import { ref, computed, onMounted,  onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();
const user = computed(() => {
  return store.state.user.userInfo
})
const showLikes = ref(false);
// 要展示的卡片，是自己制作的还是自己收藏喜欢的
const showCards = computed(()=>{
  let c = showLikes.value ?  user.value.LikesId : user.value.RecipesId;
  return c;
})
// 当滚动大于当前窗口高度时，出现“去顶部”按钮
const btnShow = ref(false);
let timer = null; 
const backTop = () => {
  timer = setInterval(function () {
    let backTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    let speedTop = backTop / 5;
    document.documentElement.scrollTop = backTop - speedTop; if (backTop === 0) {
      clearInterval(timer)
    }
  }, 50);
}
const scrollToTop = () => {
  let pageLookHeight = document.documentElement.clientHeight || document.body.clientHeight
  let scroll = document.documentElement.scrollTop
  if (scroll >= pageLookHeight) {
    btnShow.value = true
  } else {
    btnShow.value = false
  }
}
const toInfoCard = (card_id) => {
    router.push({
        name: 'card4',
        params: { card_id }
    })
}
onMounted(() => {
  window.addEventListener('scroll', scrollToTop)
})
onBeforeUnmount(()=>{
  window.removeEventListener('scroll', scrollToTop)
})
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
#user-page {
  background: #fff;
  overflow: hidden;
  min-height: 100vh;
  min-width: 960px;
}
.active {
    border-bottom: 2px solid #b7b7b7;
}

.user {
  padding: 124px 0 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  .user-info {
    width: 343px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }

    .user-nickname {
      width: 100%;
      height: 20px;
      margin-top: 16px;
      display: flex;
      justify-content: center;

      .user-name {
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-right: 6px;
      }
    }

    .user-content {
      width: 100%;
      font-size: 12px;
      line-height: 12px;
      color: #333;
      display: flex;
      margin-top: 12px;
      justify-content: center;
      opacity: .6;

      .user-film-id {
        padding-right: 12px;
      }
    }

    .user-desc {
      width: 100%;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: #333;
      margin-top: 16px;
    }

    .user-tags {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: #333;
      text-align: center;
    }

    .user-interactions {
      width: 100%;
      height: 36px;
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-right: 8px;
      }

      .count {
        font-weight: 600;
      }

      .shows {
        margin-top: 4px;
        color: #333;
        opacity: .8;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}

.content-box {
  height: 44px;

  .tabs-list {
    display: flex;
    justify-content: center;
    background: hsla(0, 0%, 100%, .9);
    backdrop-filter: blur(25px);
    padding: 0px 10px;

    .tab-item {
      font-size: 16px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 44px;
      text-align: center;
      cursor: pointer;
      color: var(--ThemeTertiaryLabel, rgba(51, 51, 51, .6));
      white-space: nowrap;
      transition: transform .3s cubic-bezier(.2, 0, .25, 1);
      transition: all .5s ease;
    }
    .tab-item:hover{
      transform: scale(1.04);
      background-color: #b7b7b7;
    }
    .tab-item:focus{
      background-color: #b7b7b7;
    }
  }
}

.recipes-container {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .recipes {
    width: 1160px;
    height: auto;
    display: grid;
    grid-column-gap: 50px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
  }
}

.recipe-item {
  width: 216px;
  height: 362px;
  background-color: #fff;
  box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
  border-radius: 5px;
  transition: all .1s ease;
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
.recipe-item:hover{
  transform: scale(1.04);
}
.back-top {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 164px;
  right: 60px;
  width: 44px;
  height: 44px;
  border: 0.5px solid rgba(0, 0, 0, .06);
  box-shadow: 0 1px 12px rgb(0 0 0 / 4%);
  border-radius: 44px;
  cursor: pointer;
  transition: all .3s;
  background: #fff;
  z-index: 10;
  transition: all .1s ease;
}
.back-top:hover{
  transform: scale(1.04);
}
</style>