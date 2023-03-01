<template>
    <div id="simulation-detail">
        <aside>
            <div class="back-btn" @click="$router.go(-1)">
                <img src="@/assets/back-filled.png" style="margin-right: 5px; width: 12px; opacity: 0.8;">
                返回
            </div>
            <div class="detail card">
                <img src="@/assets/share.png" alt="分享" class="share">
                <img :src="simulation.sim_icon" alt="CC" srcset="" class="icon">
                <span class="name">{{ simulation.name }}</span>
                <span class="title">特点</span>
                <p class="desc">{{ simulation.desc }}</p>
            </div>
            <div class="recipe-menu card">
                <img src="@/assets/list-view-50-grey.png" alt="list">
                <span>Recipe list</span>
                <ul>
                    <li class="recipe-item" tabindex="1" v-for="(item,index) in simulation.recipes" :key="item.name">
                        <a @click="switchRecipe(item.name)">{{ item.name }}</a>
                    </li>                  
                </ul>
            </div>
            <AdCard></AdCard>
        </aside>
        <Section :recipe="showingRecipe.s"></Section>
    </div>
</template>

<script setup>
import Section from './Section'
import { reactive, ref } from "vue"

const simulation = reactive({
    sim_icon: "http://img.filmgallery.cn/fujifilms/cc.png",
    name: "Classic Chrome",
    desc: "暗部色彩强烈，高光色彩柔和，加强阴影对比度，呈现平静画面。",
    recipes: [
        {
            name: "Kodachrome 64",
            chip: "X-Trans V",
            formula: [                
                { name: "颗粒效果", grain: "Weak Small", value: "Weak Small",icon:"http://img.filmgallery.cn/icons/grain.png" },
                { name: "色彩效果", color_effect: "Strong", value: "Strong",icon:"http://img.filmgallery.cn/icons/color-effect.png" },
                { name: "彩色FX蓝色", color_effect_blue: "Weak", value: "Weak",icon:"http://img.filmgallery.cn/icons/color_fx_blue.png" },
                { name: "白平衡", white_balance: "Daylight,+2Red,-5Blue", value: "Daylight,+2R,-5B",icon:"http://img.filmgallery.cn/icons/whitebalance.png" },
                { name: "动态范围", dr: "DR200", value: "DR200",icon:"http://img.filmgallery.cn/icons/dr.png" },
                { name: "D范围优先级", drp:"off", value:"关",icon:"http://img.filmgallery.cn/icons/drp.png"},
                { name: "高光", highlight: 0, value: "0" ,icon:"http://img.filmgallery.cn/icons/highlight.png"},
                { name: "阴影", shadow: 0, value: "0" ,icon:"http://img.filmgallery.cn/icons/shadow.png"},
                { name: "色彩", color: 2, value: "2" ,icon:"http://img.filmgallery.cn/icons/color.png"},
                { name: "锐度", acutance: 1, value: "1" ,icon:"http://img.filmgallery.cn/icons/sharp.png"},
                { name: "高ISO降噪", denoise: -4, value: "-4" ,icon:"http://img.filmgallery.cn/icons/denoise.png"}, 
                { name: "清晰度", clarity: 3, value: "3" ,icon:"http://img.filmgallery.cn/icons/clarity.png"},                               
                { name: "ISO", iso: "up to ISO 6400", value: "up to ISO 6400",icon:"http://img.filmgallery.cn/icons/iso.png" },
                { name: "曝光", exposure: "0~2/3", value: "0~2/3",icon:"http://img.filmgallery.cn/icons/exposure.png" }
            ],
            photos: [
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_1.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_2.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_3.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_4.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_5.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome64_6.jpg" }
            ]
        },
        {
            name: "Kodachrome 1",
            chip: "X-Trans IV",
            formula: [
                { name: "颗粒效果", grain: "Strong Small", value: "Strong Small",icon:"http://img.filmgallery.cn/icons/grain.png" },
                { name: "色彩效果", color_effect: "Strong", value: "Strong",icon:"http://img.filmgallery.cn/icons/color-effect.png" },
                { name: "彩色FX蓝色", color_effect_blue: "Weak", value: "Weak",icon:"http://img.filmgallery.cn/icons/color_fx_blue.png" },
                { name: "白平衡", white_balance: "Auto,+2Red,-4Blue", value: "Auto,+2Red,-4Blue",icon:"http://img.filmgallery.cn/icons/whitebalance.png" },
                { name: "动态范围", dr: "DR400", value: "DR400",icon:"http://img.filmgallery.cn/icons/dr.png" },
                { name: "D范围优先级", drp:"off", value:"关",icon:"http://img.filmgallery.cn/icons/drp.png"},
                { name: "高光", highlight: 4, value: "4" ,icon:"http://img.filmgallery.cn/icons/highlight.png"},
                { name: "阴影", shadow: -2, value: "-2" ,icon:"http://img.filmgallery.cn/icons/shadow.png"},
                { name: "色彩", color: 4, value: "4" ,icon:"http://img.filmgallery.cn/icons/color.png"},
                { name: "锐度", acutance: -2, value: "-2" ,icon:"http://img.filmgallery.cn/icons/sharp.png"},
                { name: "高ISO降噪", denoise: -4, value: "-4" ,icon:"http://img.filmgallery.cn/icons/denoise.png"}, 
                { name: "清晰度", clarity: 1, value: "1" ,icon:"http://img.filmgallery.cn/icons/clarity.png"},                               
                { name: "ISO", iso: "up to ISO 6400", value: "up to ISO 6400",icon:"http://img.filmgallery.cn/icons/iso.png" },
                { name: "曝光", exposure: "-1/3~-1", value: "-1/3~-1",icon:"http://img.filmgallery.cn/icons/exposure.png" }
            ],
            photos: [
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome1_1.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome1_2.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome1_3.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome1_4.jpg" },
                { url: "http://img.filmgallery.cn/recipes/recipe_cc_kodachrome1_6.jpg" },
            ]
        },
        {
            name:"Kodak Ultramax 400"
        },
        {
            name:"Kodak Portra 400 v2"
        },
        {
            name:"Mystery Chrome"
        },
        {
            name:"classic Kodak"
        }
    ]
})
//页面加载进来展示第一个recipe
let index = 0;
// 单层reactive没有使页面进行更新，再嵌套一层就ok
let showingRecipe = reactive({
    s:simulation.recipes[index]
});
// 选择看哪个recipe点击之后切换 数据更新
const switchRecipe = (name) => {
    let arr = simulation.recipes;
    // 查找对应的recipe.name
    index = arr.findIndex(item => item.name === name);
    showingRecipe.s = simulation.recipes[index];
}
</script>

<style lang="less" scoped>
#simulation-detail {
    display: flex;
    justify-content: center;
    margin-top: 120px;
    padding-bottom: 100px;
}

.card {
    background-color: #fff;
    box-shadow: 0 2px 9px rgb(0 0 0 / 10%);
    border-radius: 5px;
}

aside {
    width: 335px;
    // height: 700px;
    position: relative;

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

    .detail {
        height: auto;
        padding-top: 18px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .share {
            position: absolute;
            color: #d5d5d5;
            font-size: 1.2em;
            top: -2px;
            right: 0;
            transition: all .1s linear;
            transform: scale(.3);
            cursor: pointer;
            opacity: .3;
        }
        .icon {
            height: 80px;
            margin-left: 12px;
            margin-bottom: 20px;
        }

        .name {
            font-size: 18px;
            color: #3C3C3C;
        }

        .title {
            margin-top: 20px;
            color: #141414;
            font-weight: 300;
            font-size: 1.05em;
            margin-bottom: 10px;
        }

        .desc {
            border-top: .5px solid #b7b7b7;
            padding-top: 15px;
            margin: 0 20px 20px;
            font-size: 14px;
            color: #545454;
            text-align: center;
        }
    }

    .recipe-menu {
        margin-top: 30px;
        height: auto;
        padding: 30px 20px 15px 30px;
        margin-bottom: 20px;
        color: #141414;
        font-weight: 400;
        position: relative;

        img {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 20px;
            cursor: pointer;
        }

        span {
            position: absolute;
            top: 22px;
            left: 44px;
            color: #919191;
        }

        li {
            position: relative;
            text-align: center;
            // border-left: 5px solid #b7b7b7;
            margin: 20px;
            color: #464646;
            transition: all .5s ease;
            padding: 10px;
            font-size: 20px;
        }
    }

    .recipe-menu ul>li:hover {
        transform: scale(1.04);
        background-color: #b7b7b7;
    }

    .recipe-menu ul>li:focus {
        background-color: #b7b7b7;
    }
}

section {
    padding-left: 80px;


}
</style>
