<template>
    <div class="back-top" @click="backTop" v-if="btnShow">
        <img src="@/assets/toTop.svg" alt="去顶部">
    </div>
</template>

<script setup>
import {onMounted, onBeforeUnmount, ref } from "vue"
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
// 监听页面
const scrollToTop = () => {
  let pageLookHeight = document.documentElement.clientHeight || document.body.clientHeight
  let scroll = document.documentElement.scrollTop
  if (scroll >= pageLookHeight) {
    btnShow.value = true
  } else {
    btnShow.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollToTop)
})
onBeforeUnmount(()=>{
  window.removeEventListener('scroll', scrollToTop)
})
</script>

<style lang="less" scoped>
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
