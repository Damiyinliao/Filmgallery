<template>
    <section>
        <div class="head">
            <img src="@/assets/icons8-cookbook-50.png" alt="配方清单">
            <span>配方清单</span>
        </div>
        <Formula :formula="props.recipe.formula"></Formula>
        <Photo :photos="props.recipe.photos"></Photo>
    </section>
</template>

<script setup>
import { onMounted } from "vue"
import Formula from './formula.vue';
import Photo from './photo.vue';
const props = defineProps(['recipe'])
// onMounted(()=>{
//     console.log(props.recipe);
// })
// const test = {
//     name: "Kodachrome 64",
//     chip: "X-Trans V",
//     formula: [
//         { name: "颗粒效果", grain: "Weak Small", value: "Weak Small", icon: "http://img.filmgallery.cn/icons/grain.png" },
//         { name: "色彩效果", color_effect: "Strong", value: "Strong", icon: "http://img.filmgallery.cn/icons/color-effect.png" },
//         { name: "彩色FX蓝色", color_effect_blue: "Weak", value: "Weak", icon: "http://img.filmgallery.cn/icons/color_fx_blue.png" },
//         { name: "白平衡", white_balance: "Daylight,+2Red,-5Blue", value: "Daylight,+2R,-5B", icon: "http://img.filmgallery.cn/icons/whitebalance.png" },
//         { name: "动态范围", dr: "DR200", value: "DR200", icon: "http://img.filmgallery.cn/icons/dr.png" },
//         { name: "D范围优先级", drp: "off", value: "关", icon: "http://img.filmgallery.cn/icons/drp.png" },
//         { name: "高光", highlight: 0, value: "0", icon: "http://img.filmgallery.cn/icons/highlight.png" },
//         { name: "阴影", shadow: 0, value: "0", icon: "http://img.filmgallery.cn/icons/shadow.png" },
//         { name: "色彩", color: 2, value: "2", icon: "http://img.filmgallery.cn/icons/color.png" },
//         { name: "锐度", acutance: 1, value: "1", icon: "http://img.filmgallery.cn/icons/sharp.png" },
//         { name: "高ISO降噪", denoise: -4, value: "-4", icon: "http://img.filmgallery.cn/icons/denoise.png" },
//         { name: "清晰度", clarity: 3, value: "3", icon: "http://img.filmgallery.cn/icons/clarity.png" },
//         { name: "ISO", iso: "up to ISO 6400", value: "up to ISO 6400", icon: "http://img.filmgallery.cn/icons/iso.png" },
//         { name: "曝光", exposure: "0~2/3", value: "0~2/3", icon: "http://img.filmgallery.cn/icons/exposure.png" }
//     ],
//     photos: [
//         { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_1.jpg" },
//         { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_2.jpg" },
//         { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_3.jpg" },
//         { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_4.jpg" },
//         { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_5.jpg" },
//         { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_6.jpg" }
//     ]
// }
</script>

<style lang="less" scoped>
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
