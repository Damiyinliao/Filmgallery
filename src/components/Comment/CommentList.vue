<template>
    <div class="comment-list" v-if="data">
        <ContentBox v-for="(comment, index) in data" :key="index" :parent-id="str(comment.id)" :data="comment">
            <template #userInfo>
                <slot name="userInfo"></slot>
            </template>
            <ReplyBox :parent-id="str(comment.id)" :data="comment.reply">
                <template #userInfo>
                    <slot name="userInfo"></slot>
                </template>
            </ReplyBox>
        </ContentBox>
    </div>
</template>

<script setup>
import { onBeforeMount } from "vue"
import ContentBox from './ContentBox.vue'
import ReplyBox from './ReplyBox.vue'
import { str } from '@/utils'
const props = defineProps({
    data: {
        type: Array
    }
})
onBeforeMount(() => {
    console.log(props.data);
})
</script>

<style lang="less" scoped></style>
