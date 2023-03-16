<template>
    <el-skeleton style="width: 216px" :loading="loading" animated>
        <template #template>
            <el-skeleton-item variant="image" style="width: 216px;" ></el-skeleton-item>
            <div
                style="
                display: flex;
                align-items: center;
                justify-items: space-between;
                margin-top: 16px;
                height: 16px;
                "
            >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
            </div>
        </template>
        <template #default>
            <slot></slot>
        </template>
    </el-skeleton>
</template>

<script setup>
import {} from "vue"
import { ElSkeleton, ElSkeletonItem } from "element-plus";
import 'element-plus/es/components/skeleton/style/css'
import 'element-plus/es/components/skeleton-item/style/css'
import { ref } from 'vue'

const loading = ref(true)
</script>

<style lang="less" scoped>

</style>
