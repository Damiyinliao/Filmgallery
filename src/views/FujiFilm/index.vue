<template>
  <div id="fujifilm">
    <SearchBox
      placeholderValue="搜索你想看的胶片模拟"
    ></SearchBox>
    <!-- Film Simulation Wrapper -->
    <div class="fujifilm-wrapper">
      <div class="fujifilm-card card" v-for="item in simulations" :key="item._id" @click="toSimPanel(item.simulation_id)">
        <img class="fujifilm-img" :src=item.sim_img_url alt="">
        <!-- <span class="fujifilm-ename">Classic Chrome</span> -->
        <h2>{{item.sim_ename}}</h2>
        <h3>{{item.sim_cname}}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import { onBeforeMount, computed } from 'vue';
import { useStore, mapGetters } from 'vuex';

  const store = useStore();
  // 挂载前获取信息
  onBeforeMount(()=>{
    store.dispatch("fujifilm/getSimulations");
  });
  // 得到各个胶片模拟的数据并进行排序
  const simulations = computed(()=>{
    let data = store.state.fujifilm.simulations;
    data.sort((a, b) => {
            const nameA = a.simulation_id.split("", 1);
            const nameB = b.simulation_id.split("", 1);
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1
            }
            return 0;
        });
    return data;
    // return store.getters.fujifilm.sortSimById;
  })
  // 跳转到信息面板
  const toSimPanel = (simId) => {
    router.push({
      name: 'simulation',
      params:{
        simid: simId
      }
    })
  }
</script>

<style scoped lang="less">
  #fujifilm{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    padding-left: 80px;
    padding-right: 80px;
    .fujifilm-wrapper{
      display: grid;
      grid-column-gap: 50px;
      grid-row-gap: 30px;
      grid-template-columns: repeat(4, 1fr);
      justify-content: space-between;
      .card{
        background-color: #fff;
        box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
        border-radius: 5px;
      }
      .fujifilm-card{
        width: 200px;
        height: 210px;
        margin-bottom: 25px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        transition: all .1s ease;
        .fujifilm-img{
          height: 80px;
          margin-bottom: 20px;
        }
        h2{
          margin-bottom: 20px;
          font-weight: 400;
          font-size: 1.1em;
        }
        h3{
          font-weight: 300;
          font-size: 1em;
          margin-bottom: 20px;
        }
      }
      .fujifilm-card:hover{
        cursor: pointer;
        transform: scale(1.04);
      }
    }
  }

</style>