<template>
    <!-- 返回按钮组件 -->
    <div class="back-btn" @click="$router.go(-1)">
        <img src="@/assets/back-filled.png" style="margin-right: 5px; width: 12px; opacity: 0.8;">
        返回
    </div>
</template>

<script setup>
import { } from "vue"
</script>

<style lang="less" scoped>
.back-btn {
    position: absolute;
    top: -40px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    opacity: .4;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    cursor: pointer;

    &:active {
        background-color: grey;
    }
}
</style>
