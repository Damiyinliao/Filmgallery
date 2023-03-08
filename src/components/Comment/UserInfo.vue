<template>
    <div>
        <el-popover v-if="isUserInfo" placement="top" :width="300" :show-after="300" @show="show">
            <slot name="userInfo"></slot>
            <template #reference>
                <slot></slot>
            </template>
        </el-popover>
        <slot v-else></slot>
    </div>
</template>

<script setup>
import { inject } from "vue"
import { ElPopover } from "element-plus";
const props = defineProps({
    isUserInfo: Boolean,
    uid: String
})
const { getUser } = inject('InjectionContentBox');
const show = () => {
    getUser(props.uid, () => { })
}
</script>

<style lang="less" scoped></style>
