<!-- 抽离 搜索框 SearchBox 组件 -->
<template>
    <div class="search-bar">
        <img src="./images/search.png" alt="" class="search-img">
        <input type="text" :placeholder="placeholderValue" v-model="searchValue">
        <div class="filter-button" @click="showOptions">
          <img src="./images/sorting-options.png" alt="" srcset="" class="filter-img">
        </div>
    </div>
</template>

<script setup>
    import { defineProps, ref, defineEmits } from 'vue';
    // 父传子 定义placeholder的值
    const props = defineProps(['placeholderValue'])
    const searchValue = '';
    const isShowSelector = ref(false);
    // 子传父， 触发父组件的getIsShowSelector来修改父组件中的isShowOptions值
    const emit = defineEmits(["showSelector"]);
    function showOptions (){
      emit("showSelector");
    }
</script>

<style scoped lang="less">
    .search-bar{
      position: relative;
      transition: all .2s ease;
      .search-img{
        position: absolute;
        top: 12px;
        width: 20px;
        opacity: .4;
        color: #d4d3d3;
        left: 20px;
        cursor: pointer;
      }
      input{
        width: 360px;
        height: 43px;
        margin-bottom: 55px;
        border-radius: 4px;
        border: none;
        font-size: 1em;
        text-align: center;
        font-weight: 500;
        font-family: Montserrat;
        color: #3c3c3c;
        box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
        transition: all .4s ease;
      }
      .filter-button{
        cursor: pointer;
        background-color: rgb(162, 194, 223, 0.7);
        position: absolute;
        top: 9px;
        right: 11px;
        font-size: 1.1em;
        z-index: 99;
        // background-color: rgba(162,194,223,.7);
        box-shadow: 4px 4px 50px -12px hsl(0deg 0% 61% / 40%);
        width: 26px;
        height: 26px;
        border-radius: 4px;
        // 图片水平垂直居中
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        transition: background-color .4s ease;
        .filter-img{
          width: 15px;

        }
      }
      .filter-button:hover{
        transform: scale(1.1);
        background-color: rgb(162, 194, 223);
      }
    }
</style>