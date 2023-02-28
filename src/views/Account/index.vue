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
        <div class="tab-item">食谱</div>
        <div class="tab-item">喜欢</div>
      </div>
    </div>
    <div class="recipes-container">
      <div class="recipes">
        <div class="recipe-item">
          <a href=""><img src="http://img.filmgallery.cn/head-portrait/example-picture.webp" style="height:288px;"></a>
          <div class="footer">
            <a href="" class="title"><span>夏日橘子</span></a>
            <div class="author-wrapper">
              <a href=""><img src="http://img.filmgallery.cn/head-portrait/head-profile.webp" alt=""><span class="name">大米饮料</span></a>
              <span class="like-wrapper">
                <svg t="1676551860374" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="2806" width="16" height="16">
                  <path d="M695.30624 143.44192c-41.85088 7.28576-76.5184 20.25472-105.76384 40.01792l-30.00832 24.2944-47.16544 47.16544C445.07648 203.27936 416.09728 139.9808 290.83648 142.00832l-52.87936 8.576c-45.00992 13.68064-88.192 39.87456-114.33984 72.89344-15.35488 19.38944-30.36672 42.7008-40.01792 67.1744-56.9856 144.5376 41.74848 234.69056 108.6208 301.568l117.1968 115.7632 144.35328 142.9248c17.43872 14.08512 30.55616 38.17984 68.60288 31.44704 45.5424-8.064 93.2608-74.69056 122.91072-104.33536a2629899.9808 2629899.9808 0 0 1 170.07616-168.64768c52.47488-52.46976 111.60064-96.25088 134.3488-178.65216 43.14112-156.30336-101.55008-313.90208-254.40256-287.27808z m184.36608 314.42432c-22.13888 37.94432-57.02656 65.60256-87.17312 95.75936-56.68864 56.2176-113.38752 112.44032-170.08128 168.64768-15.55968 15.55456-95.83104 104.43776-110.04928 102.90688-14.14656 1.25952-33.00352-27.35616-42.88-37.16096l-114.33472-112.91136c-46.68928-46.19776-93.38368-92.42624-140.0576-138.63424-27.06944-27.06432-59.50976-52.54144-75.76064-90.0352-28.83072-66.52928-7.79264-149.32992 30.01856-190.09024 21.36576-23.04 51.52256-43.21792 85.75488-52.87936 12.38016-1.90464 24.76544-3.8144 37.15584-5.71392 71.44448 0.31232 87.64928 26.24512 131.48672 47.16032l88.61184 88.61184c45.78816-35.10784 76.7488-89.99424 130.05824-117.1968 116.6592-59.52 231.63392 24.5248 254.40256 121.48736 9.91232 42.18368-1.33632 92.96384-17.152 120.04864z" fill="#333333" p-id="2807"></path>
                </svg>
                <span class="count">16</span>
              </span>
            </div>
          </div>
        </div>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
        <SCard></SCard>
      </div>
    </div>
    <div class="back-top" @click="backTop" v-if="btnShow">
      <svg t="1676553995052" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2126" width="32" height="32">
        <path
          d="M512.631808 253.652992c7.713792-0.35328 15.543296 2.414592 21.433344 8.30464l281.726976 281.726976c11.113472 11.113472 11.113472 29.1328 0 40.246272-11.114496 11.113472-29.1328 11.113472-40.247296 0L540.971008 349.356032v518.56896c0 15.7184-12.741632 28.459008-28.459008 28.459008-15.717376 0-28.459008-12.741632-28.459008-28.459008V349.356032L249.479168 583.93088c-11.114496 11.113472-29.1328 11.113472-40.247296 0-11.113472-11.113472-11.113472-29.1328 0-40.246272l281.726976-281.726976c5.920768-5.920768 13.801472-8.686592 21.553152-8.29952zM797.099008 128c15.717376 0 28.457984 12.741632 28.457984 28.459008 0 15.717376-12.740608 28.457984-28.457984 28.457984H227.924992c-15.717376 0-28.457984-12.740608-28.457984-28.457984 0-15.7184 12.740608-28.459008 28.457984-28.459008h569.174016z"
          fill="#323233" p-id="2127"></path>
      </svg>
    </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
// const user = reactive({
//   id: 9474821122,
//   nickname: "大米饮料",
//   userdesc: "擦一擦眼睛",
//   tags: '胶片爱好者',
//   follows: 13,
//   fans: 50,
//   likes: 22
// });
const user = computed(() => {
  return store.state.user.userInfo
})
const btnShow = ref(false);
let timer = null; 
onMounted(() => {
  window.addEventListener('scroll', scrollToTop)
})
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

</script>

<style scoped lang="less">
#user-page {
  background: #fff;
  overflow: hidden;
  min-height: 100vh;
  min-width: 960px;
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
      padding: 0px 10px;
      margin-right: 0px;
      font-size: 16px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 44px;
      cursor: pointer;
      color: var(--ThemeTertiaryLabel, rgba(51, 51, 51, .6));
      white-space: nowrap;
      transition: transform .3s cubic-bezier(.2, 0, .25, 1);
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