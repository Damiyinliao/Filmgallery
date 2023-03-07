<template>
    <section>
        <div class="head">
            <img src="@/assets/icons8-cookbook-50.png" alt="配方清单">
            <span>配方清单</span>
        </div>
        <Formula :formula="formula"></Formula>
        <Photo :photos="photos"></Photo>
    </section>
</template>

<script setup>
import { computed } from "vue"
import Formula from './formula.vue';
import Photo from './photo.vue';
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
</style>
