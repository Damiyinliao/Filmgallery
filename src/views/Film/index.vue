<template>
  <div id="film">
    <SearchBox
      placeholderValue="搜索你想看的胶片类型"
      @showSelector="getIsShowSelector"
    ></SearchBox>
    <!-- 使其过渡效果更加自然 -->
    <Transition>
      <div class="search-options" v-show="isShowOptions">
        <Selector></Selector>
      </div>
    </Transition>
    
    <div class="films-wrapper" style="margin-top: 20px;">
      <!-- 每个胶片卡片 -->
      <div class="film-card" v-for="item in filmList" :key="item.id" @click="toInfoPanel(item.film_id)">
        <img class="film-img" :src='item.film_icon'>
        <span class="film-title">{{ item.film_name }}</span>
        <div class="film-intro">
          <div class="film-type">
            <span>类型</span>
            <span>{{ item.film_type }}</span>
          </div>
          <div class="film-iso">
            <span>ISO</span>
            <span>{{ item.film_iso }}</span>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script setup>
  import { computed, onBeforeMount, onMounted, reactive, ref } from 'vue';
  import Selector from './Selector'
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const searchValue = ref('');
    // isShowOptions 需要使用 let 修饰， const修饰会报错 Uncaught TypeError: Assignment to constant variable.
    let isShowOptions = ref(false);
    // 子传父 子组件emit父组件中的getIsShowSelector来改变isShowOptions的值来决定是否展示Selector组件
    const getIsShowSelector = (value) => {
      // 记住 ref包裹的值，需要.value 才能被修改
      isShowOptions.value = !isShowOptions.value;
      // 测试
      // console.log("getIsShowSelector", value, isShowOptions);
    };
    onBeforeMount(()=>{
      store.dispatch("film/getFilmList");
    });
    const filmList = computed(()=>{
      return store.state.film.filmList;
    });
    const toInfoPanel = (id) => {
      router.push({
        name: 'filmInfo',
        params: {
          id: id
        }
      })
    }
</script>

<style scoped lang="less">
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  #film{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    padding-left: 80px;
    padding-right: 80px;
    .search-options{

    }
    .films-wrapper{
      display: grid;
      grid-column-gap: 50px;
      grid-row-gap: 30px;
      grid-template-columns: repeat(4, 1fr);
      justify-content: space-between;
      .film-card{
        width: 200px;
        height: 210px;
        margin-bottom: 25px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        transition: all .2s ease;
        background-color: #fff;
        box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
        border-radius: 5px;
        .film-img{
          height: 80px;
          margin-bottom: 8px;
        }
        .film-title{
          margin-top: 12px;
          margin-bottom: 20px;
          font-weight: 400;
          font-size: 1.1em;
        }
        .film-intro{
          display: flex;
          flex-direction: row;
          width: 100%;
          border-top: 1px solid #e3e3e3;
          .film-type{
            width: 50%;
            height: 40px;
            font-size: .7em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .film-iso{
            border-left: 1px solid #e3e3e3;
            width: 50%;
            font-size: .7em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .film-type span:first-child,
          .film-iso span:first-child{
            font-size: .85em;
            margin-bottom: 2px;
            color: #b5b4b4;
            font-weight: 300;
          }
          .film-type span:last-child,
          .film-iso span:last-child{
            font-size: 1em;
          }
        }
      }
      .film-card:hover{
        cursor: pointer;
        transform: scale(1.04);
      }
    }
  }
</style>