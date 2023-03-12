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
                    <Card v-for="item in columnOneData" :key="item._id" @click="getCardInfo(item._id)" :info="item"
                        @showCard="toInfoCard"></Card>
                </div>
                <!-- 第二列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnTwoData" :key="item._id" @click="getCardInfo(item._id)" :info="item"
                        @showCard="toInfoCard"></Card>
                </div>
                <!-- 第三列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnThreeData" :key="item._id" @click="getCardInfo(item._id)" :info="item"
                        @showCard="toInfoCard"></Card>
                </div>
                <!-- 第四列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnFourData" :key="item._id" @click="getCardInfo(item._id)" :info="item"
                        @showCard="toInfoCard"></Card>
                </div>
                <!-- 五列 -->
                <div class="column">
                    <!-- <div class="item"></div> -->
                    <Card v-for="item in columnFiveData" :key="item._id" @click="getCardInfo(item._id)" :info="item"
                        @showCard="toInfoCard"></Card>
                </div>
            </div>
            <BackTop></BackTop>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="bounce">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { onBeforeMount, computed, ref, onMounted} from "vue";
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import Card from "./section.vue";
import { data } from "dom7";
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
let columnOneData = ref([]),
        columnTwoData = ref([]),
        columnThreeData = ref([]),
        columnFourData = ref([]),
        columnFiveData = ref([]);
       
onMounted(() => {
    let i = 0;
    while (i < cardList.value.length) {
        columnOneData.value.push(cardList.value[i++]);// 一
        if (i < cardList.value.length) {
            columnTwoData.value.push(cardList.value[i++]);// 二
        }
        if (i < cardList.value.length) {
            columnThreeData.value.push(cardList.value[i++]);// 三
        }
        if (i < cardList.value.length) {
            columnFourData.value.push(cardList.value[i++]);// 四
        }
        if (i < cardList.value.length) {
            columnFiveData.value.push(cardList.value[i++]);// 五
        }
    }
})

// 呼出Card
const toInfoCard = (id) => {
    router.push({
        name: 'card1',
        params: { id }
    })
}
// 点击 跳转前派发获取Card的详细信息
const getCardInfo = (id) => {
    store.dispatch("card/getCardInfo", id)
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

        .feeds-wrapper {
            display: grid;
            grid-column-gap: 20px;
            grid-row-gap: 30px;
            grid-template-columns: repeat(5, 1fr);
            justify-content: space-between;
            transition: width .5s;
            margin: 0 auto;
        }
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
}</style>
