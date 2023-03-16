<template>
    <div id="explore">
        <div class="feeds-page">
            <!-- <div class="feeds-wrapper">
               <Card v-for="item in cardList" :key="item._id" @click="getCardInfo(item._id)" :info="item" @showCard="toInfoCard"></Card>
            </div> -->
            <!-- 瀑布流 -->
            <div class="waterfall-wrapper">
                <!-- 第一列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <!-- <Skeleton v-for="item in columnOneData">
                        <Card v-for="item in columnOneData" :key="item._id" :info="item" @showCard="toInfoCard"></Card>
                    </Skeleton> -->
                    <Card v-for="item in columnOneData" :key="item._id" :info="item" @showCard="toInfoCard"></Card>
                </div>
                <!-- 第二列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnTwoData" :key="item._id" :info="item" @showCard="toInfoCard"></Card>
                </div>
                <!-- 第三列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnThreeData" :key="item._id" :info="item" @showCard="toInfoCard"></Card>
                </div>
                <!-- 第四列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnFourData" :key="item._id" :info="item" @showCard="toInfoCard"></Card>
                </div>
                <!-- 第五列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnFiveData" :key="item._id" :info="item" @showCard="toInfoCard"></Card>
                </div>
            </div>
            <BackTop></BackTop>
            <div class="reload">
                <img src="@/assets/explore/reload.svg" alt="刷新" :class="{ go: isRefresh }" @click="refresh">
            </div>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="bounce">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { onBeforeMount, computed, ref, onMounted, watch, reactive } from "vue";
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import Card from "./section.vue";
import Skeleton from "@/components/Skeleton/skeleton.vue";
const store = useStore();
const router = useRouter();
const route = useRoute()
// 获取所有Card的数据
onBeforeMount(() => {
    store.dispatch("explore/getAllCards");
});
const cardList = computed(() => {
    return store.state.explore.allCards;
})
// 呼出Card
const toInfoCard = (id) => {
    router.push({
        name: 'card1',
        params: { id }
    })
}
let columnOneData = reactive([]),
    columnTwoData = reactive([]),
    columnThreeData = reactive([]),
    columnFourData = reactive([]),
    columnFiveData = reactive([]);
// onMounted会出现，组件挂载好了，但是数据还没有请求回来即为空就不会渲染界面，最后cardList有数据了也还是不会渲染界面，所以需要用watch监视数据来渲染界面
// onMounted(() => {
//     let i = 0;
//     while (i < cardList.value.length) {
//         columnOneData.value.push(cardList.value[i++]);// 一
//         if (i < cardList.value.length) {
//             columnTwoData.value.push(cardList.value[i++]);// 二
//         }
//         if (i < cardList.value.length) {
//             columnThreeData.value.push(cardList.value[i++]);// 三
//         }
//         if (i < cardList.value.length) {
//             columnFourData.value.push(cardList.value[i++]);// 四
//         }
//         if (i < cardList.value.length) {
//             columnFiveData.value.push(cardList.value[i++]);// 五
//         }
//     }
// })
watch(() => cardList.value, newValue => {
    columnOneData = reactive([]);
    columnTwoData = reactive([]);
    columnThreeData = reactive([]);
    columnFourData = reactive([]);
    columnFiveData = reactive([]);

    let i = 0;
    console.log("数据更新了");
    while (i < cardList.value.length) {
        columnOneData.push(cardList.value[i++]);// 一
        if (i < cardList.value.length) {
            columnTwoData.push(cardList.value[i++]);// 二
        }
        if (i < cardList.value.length) {
            columnThreeData.push(cardList.value[i++]);// 三
        }
        if (i < cardList.value.length) {
            columnFourData.push(cardList.value[i++]);// 四
        }
        if (i < cardList.value.length) {
            columnFiveData.push(cardList.value[i++]);// 五
        }
    }
}, { immediate: true, deep: true })

// 点击 跳转前派发获取Card的详细信息 已取消，直接在请求完所有card中找数据
// const getCardInfo = (id) => {
//     store.dispatch("card/getCardInfo", id)
// }

const isRefresh = ref(false);
// 刷新，图标变化，打乱数组（由于数据不多，只好打乱数组做一下刷新功能）
const refresh = () => {
    store.commit('explore/messArray');
    //刷新图标
    isRefresh.value = !isRefresh.value;
    setTimeout(() => {
        isRefresh.value = !isRefresh.value;
    }, 500)
}
</script>

<style lang="less" scoped>
.bounce-enter-active {
    animation: bounce-in 0.4s;
}

.bounce-leave-active {
    animation: bounce-in 0.4s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

#explore {
    .feeds-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-top: 88px;
        min-height: 100vh;
        width: 100vw;
        min-width: 960px;
        max-width: 100%;
        padding-bottom: 150px;
    }
}

.waterfall-wrapper {
    display: flex; // 设置为Flex容器
    flex-direction: row; // 主轴方向设置为水平方向
}

.column {
    display: flex; // 设置为Flex容器
    flex-direction: column; // 主轴方向设置为垂直方向
    padding: 10px;
}

.reload {
    width: 44px;
    height: 44px;
    background: #fff;
    border: 0.5px solid rgba(0, 0, 0, .06);
    box-shadow: 0 1px 12px rgb(0 0 0 / 4%);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 100px;
    right: 60px;
    // transition: background .2s;
    cursor: pointer;
}

.go {
    transform: rotate(360deg);
    transition: all .5s;
}
</style>
