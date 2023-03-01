<template>
    <ul class="formula">
        <li v-for="(item, index) in props.formula" :key="index" class="card item-card">
            <div class="item-icon"><img :src="item.icon" alt="图标"></div>
            <div class="item-detail">
                <div class="item-name">{{ item.name }}</div>
                <div class="item-value">{{ item.value }}</div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { } from "vue"
const props = defineProps(['formula'])
</script>

<style lang="less" scoped>
.formula {
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    margin-top: 30px;
}

.item-card {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    transition: all .5s ease;
    cursor: pointer;
}

.item-card:hover {
    transform: scale(1.1);
}

.item-icon {
    height: 100px;
    // width: 30px;
    line-height: 100px;
    padding: 0 10px;
    border-right: 1px solid grey;

    img {
        width: 40px;
        vertical-align: middle;
    }
}

.item-detail {
    height: 100px;
    width: 140px;
}

.item-name {
    height: 49px;
    border-bottom: 1px solid grey;
    line-height: 49px;
    text-align: center;
}

.item-value {
    height: 50px;
    line-height: 50px;
    text-align: center;
}
</style>
