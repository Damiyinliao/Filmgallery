<template>
    <section>
        <div class="head">
            <img src="@/assets/icons8-cookbook-50.png" alt="配方清单">
            <span>配方清单</span>
        </div>
        <Formula :formula="formula"></Formula>
        <Photo :photos="photos"></Photo>
        <!-- <div class="comment"> -->
             <Comment 
                :config="config" 
                :show-size="2" 
                @submit="submit" 
                @like="like" 
                @remove="remove" 
                @report="report">
            </Comment>
        <!-- </div>        -->
    </section>
</template>

<script setup>
import { computed, reactive } from "vue"
import Formula from './formula.vue';
import Photo from './photo.vue';
import { submit, like, remove, report, commentData } from '@/utils/comment';
// 虚假评论信息数据
const config = reactive(commentData);
const props = defineProps(['recipe'])
const formula = computed(()=>{
    return props.recipe.formula || []
})
const photos = computed(()=>{
    return props.recipe.photos || []
})

</script>

<style lang="less" scoped>
section {
    padding-left: 80px;
}
.head {
    display: flex;
    align-items: center;

    img {
        width: 30px;
    }

    span {
        margin-left: 10px;
        font-size: 20px;
    }
}
.comment{
    padding: 20px;
}
</style>
