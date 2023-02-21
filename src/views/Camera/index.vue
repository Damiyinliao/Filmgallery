<template>
  <div id="film-camera">
    <SearchBox placeholderValue="查找你想看的胶片机"></SearchBox>
    <div class="cameras-container">
      <div class="camera">
        <div class="camera-brand">Canon</div>
        <div class="camera-wrapper">
          <!-- 每个相机卡片 -->
          <div class="camera-card">
            <img class="camera-img" src="./images/canon-prima-super-105u.jpg" alt="">
            <span class="camera-title">Prima Super 105u</span>
            <div class="camera-intro">
              <div class="camera-type">
                <span>类型</span>
                <span>傻瓜机</span>
              </div>
              <div class="camera-time">
                <span>生产日期</span>
                <span>2003</span>
              </div>
            </div>
          </div>
          <div class="camera-card"></div>
          <div class="camera-card"></div>
          <div class="camera-card"></div>
          <div class="camera-card"></div>
        </div>

      </div>

    </div>  
  </div>
</template>

<script setup>
import { } from "vue"
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

.cameras-container {}

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

  .camera-img {
    height: 80px;
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