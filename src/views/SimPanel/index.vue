<template>
    <div id="simulation-detail">
        <aside>
            <BackBtn></BackBtn>
            <div class="detail card">
                <img src="@/assets/share.png" alt="分享" class="share">
                <img :src="simulation.sim_img_url" alt="图标" class="icon">
                <span class="name">{{ simulation.sim_ename }}</span>
                <span class="title">特点</span>
                <p class="desc">{{ simulation.sim_desc }}</p>
            </div>
            <div class="recipe-menu card">
                <img src="@/assets/list-view-50-grey.png" alt="list">
                <span>Recipe list</span>
                <ul>
                    <li class="recipe-item" tabindex="1" v-for="item in recipes" :key="item.name">
                        <a @click="switchRecipe(item.name)">{{ item.name }}</a>
                    </li>                  
                </ul>
            </div>
            <AdCard></AdCard>
        </aside>
        <Section :recipe="recipe"></Section>
    </div>
</template>

<script setup>
import Section from './Section'
import { reactive, computed, onBeforeMount, onMounted, ref } from "vue"
import { useRoute } from "vue-router";
import store from '@/store';

const route = useRoute();
onBeforeMount(()=>{
    store.dispatch("fujifilm/getSimulations");
    store.dispatch("fujifilm/getRecipes",route.params.simid);    
})
const simulations = computed(()=>{
    return store.state.fujifilm.simulations;
})
const recipes = computed(()=>{
    return store.state.fujifilm.recipes
})
let sim_id = route.params.simid;
const simulation = computed(()=>{
    return simulations.value.find(s => s.simulation_id == sim_id);
})
onMounted(()=>{

})
//页面加载进来展示第一个recipe
let index = ref(0)
const recipe = computed(()=>{
    let r = recipes.value[index.value]
    return r||{};   //加上{}避免因为网络问题而获取不到数据出现undefined而报错
})


// 单层reactive没有使页面进行更新，再嵌套一层就ok
// let showingRecipe = reactive({
//     s:recipes.value[index]
// });
// 选择看哪个recipe点击之后切换 数据更新
const switchRecipe = (name) => {
    let arr = recipes.value;
    // 查找对应的recipe.name
    index.value = arr.findIndex(item => item.name === name);
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


</style>
