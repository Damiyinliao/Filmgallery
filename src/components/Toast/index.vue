<template>
    <!-- 提示信息Toast -->
    <div class="toast">
        <Transition name="toast">
            <div class="inner" v-show="visible">
                <div class="message">
                    <iconVue v-if="alert.icon" v-html="alert.icon"></iconVue>
                    <span class="{ normal: type != 'normal'}">
                        {{ message }}
                    </span>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import iconVue from '@/components/Icon'
import { watch, onMounted, reactive, ref } from 'vue';
import { getDefaultToastType, getToastType } from './toastTypes'

const props = defineProps({
    message: {
        type: String,
        default:''
    },
    duration: {
        type: Number,
        default: 2000
    },
    type: {
        type: String,
        default: 'normal'
    }
})
const alert = reactive(getDefaultToastType().options);
const visible = ref(false);

watch(
    () => props.type,
    val => {
        const toastType = getToastType(val);
        if (toastType) {
            alert.color = toastType.options.color;
            alert.bgColor = toastType.options.bgColor;
            alert.icon = toastType.options.icon;
        }
    },
    { immediate: true }
)
onMounted(() => {
    visible.value = true
    setTimeout(() => {
        visible.value = false
    }, props.duration)
})
</script>

<style lang="less" scoped>
.toast {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // 设置为可穿透
    pointer-events: none;

    .inner {
        position: relative;
        bottom: -20%;
        padding: 8px 18px;
        border-radius: 12px;
        font-size: 20px;
        color: v-bind('alert.color');
        background-color: v-bind('alert.bgColor');
    }

    // 设置过渡效果
    &-enter-active,
    &-leave-active {
        transition: all 0.3s;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: translateY(100%);
    }
}

.normal {
    padding: 0 8px;
}
</style>
