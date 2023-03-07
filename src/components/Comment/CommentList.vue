<template>
    <div class="comment-list" v-if="data">
        <ContentBox v-for="(comment, index) in data" :key="index" :paraent-id="str(comment.id)" :data="comment">
            <template #userInfo>
                <slot name="userInfo"></slot>
            </template>
        </ContentBox>
        <ReplyBox :paraent-id="str(comment.id)" :data="comment.reply">
            <template #userInfo>
                <slot name="userInfo"></slot>
            </template>
        </ReplyBox>
    </div>
</template>

<script setup>
import { } from "vue"
import ContentBox from './ContentBox.vue'
import ReplyBox from './ReplyBox.vue'
import { str } from '@/utils'
const props = defineProps(['data'])
</script>

<style lang="less" scoped></style>
