<template>
  <div id="film-camera">
    <SearchBox placeholderValue="查找你想看的胶片机"></SearchBox>
    <div class="cameras-container">
      <div class="camera">
        <div class="camera-wrapper">
          <!-- 每个相机卡片 -->
          <div class="camera-card" 
            v-for="item in cameras" 
            @click="toCameraPanel(item.full_name)"
          >
            <span :class="{tag:true, blue:item.brand=='konica', pink:item.brand=='canon'}">{{ item.brand }}</span>
            <img class="camera-img" :src="item.pic_url_small" alt="相机">
            <span class="camera-title">{{ item.name }}</span>
            <div class="camera-intro">
              <div class="camera-type">
                <span>类型</span>
                <span>傻瓜相机</span>
              </div>
              <div class="camera-time">
                <span>上市时间</span>
                <span>{{ item.ttm }}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, computed } from "vue"
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
onBeforeMount(()=>{
  store.dispatch("camera/getAllCameras");
});
const cameras = computed(()=>{
  return store.state.camera.cameras
});
const toCameraPanel = (name) => {
  router.push({
    name: 'cameraInfo',
    params: {
      cameraname: name
    }
  })
}
</script>

<style lang="less" scoped>
#film-camera {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  padding-left: 80px;
  padding-right: 80px;
}
.blue{
  background-color: rgb(97, 136, 181);
}
.pink{
  background-color: pink;
}
.camera {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.camera-wrapper {
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
}

.camera-card {
  width: 200px;
  height: 210px;
  margin-bottom: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: all .1s ease;
  background-color: #fff;
  box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
  border-radius: 5px;
  .tag{
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }

  .camera-img {
    height: 90px;
    margin-bottom: 8px;
  }

  .camera-title {
    margin-top: 12px;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 1.1em;
  }

  .camera-intro {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid #e3e3e3;

    .camera-type {
      width: 50%;
      height: 40px;
      font-size: .7em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .camera-time {
      border-left: 1px solid #e3e3e3;
      width: 50%;
      font-size: .7em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .camera-type span:first-child,
    .camera-time span:first-child {
      font-size: .85em;
      margin-bottom: 2px;
      color: #b5b4b4;
      font-weight: 300;
    }

    .camera-type span:last-child,
    .camera-time span:last-child {
      font-size: 1em;
    }
  }
}

.camera-card:hover {
  cursor: pointer;
  transform: scale(1.04);
}
</style>