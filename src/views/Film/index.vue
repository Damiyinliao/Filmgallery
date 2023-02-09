<template>
  <div id="film">
    <div class="search-bar">
      <img src="./images/search.png" alt="" class="search-img">
      <input type="text" placeholder="搜索你想看的胶片类型" v-model="searchValue">
      <div class="filter-button" @click="showOptions = !showOptions">
        <img src="./images/sorting-options.png" alt="" srcset="" class="filter-img">
      </div>
    </div>
    <div class="search-options" v-show="showOptions">
      <Selector></Selector>
    </div>
    <div class="films-wrapper" style="margin-top: 20px;">
      <div class="film-card" v-for="item in filmList" :key="item.id">
        <img class="film-img" :src='item.imgurl'>
        <span class="film-title">{{ item.title }}</span>
        <div class="film-intro">
          <div class="film-type">
            <span>类型</span>
            <span>{{ item.type }}</span>
          </div>
          <div class="film-iso">
            <span>ISO</span>
            <span>{{ item.iso }}</span>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { computed, getCurrentInstance, onMounted, reactive, ref } from 'vue';
import Selector from './Selector'
import { useStore } from 'vuex';
export default {
  name: 'Film',
  components:{
    Selector
  },
  setup(){
    const store = useStore();
    const searchValue = ref('');
    const showOptions = ref(false);
    // const filmList = ref([
    //   {
    //     id: 1,
    //     imgurl:'/film-images/fuji-c200.jpg',
    //     title:'富士C200',
    //     type:'彩负',
    //     iso: 200
    //   },
    //   {
    //     id: 2,
    //     imgurl:'/film-images/fuji-100.png',
    //     title:'富士业务100',
    //     type: '彩负',
    //     iso: 100,
    //   }
    // ]);
    // 使用全局API来获取数据，计算得出，没有成功
    // const globalProperties = getCurrentInstance().appContext.config.globalProperties; // 获取全局挂载
    // const $API = globalProperties.$API;
    // const filmList = computed(async ()=>{
    //   let result = await $API.reqFilmList();
    //   // console.log(result.data);
    //   if(result.code == 200){
    //     return result.data;
    //   }
    // });
    onMounted(()=>{
      store.dispatch("getFilmList");
    });
    const filmList = computed(()=>{
      return store.state.filmList;
    });
    function searchFilm(searchValue){
    };
    return {
      searchValue,
      showOptions,
      filmList
    }
  }
}
</script>

<style scoped lang="less">
  #film{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    padding-left: 80px;
    padding-right: 80px;
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
        transition: all .1s ease;
        // border: 1px solid skyblue;
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
        }
      }
      .film-card:hover{
        cursor: pointer;
        transform: scale(1.04);
      }
    }
  }
</style>