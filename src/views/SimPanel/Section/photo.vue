<template>
    <div class="photo-wrapper card">
        <div class="photo-title">
            <img src="@/assets/screenshot.png">
            <span>Example Photos</span>
        </div>
        <div class="photo-grid">
            <div class="images" v-viewer v-for="item in props.photos" :key="item.url">
                <img :src="item.url">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const props = defineProps(['photos'])
</script>

<style lang="less" scoped>
.photo-wrapper {
    margin-top: 50px;
    padding-bottom: 25px;
    height: auto;
    // width: 670px;
    padding: 30px 20px 15px 30px;
    margin-bottom: 20px;
    color: #141414;
    font-weight: 400;
}

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
    // grid-column-gap: 50px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
}
.images{
    width: 300px;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    img{
        width: 300px;
    }
}
</style>
