<template>
    <i class="icon" :style="style">
        <slot v-if="$slots.default" />
        <svg v-else aria-hidden="true">
            <use :xlink:href="name"></use>
        </svg>
    </i>
</template>

<script setup>
import { computed } from 'vue'
import { isNumber } from '@/utils'

// defineOptions({
//     name: 'Icon'
// })
const props = defineProps({
    name: String,
    size: String,
    color: String
});   
const name = computed(()=> '#' + props.name);
const style = computed(()=>{
    return {
        fontSize: isNumber(props.size) ? props.size + 'px' : props.size,
        color: props.color
    }
})
</script>

<style lang="less" scoped>
.icon {
  display: inline-flex;
  fill: currentColor;
  font-size: inherit;
  color: inherit;
  vertical-align: -0.15em;
  // deep深度选择器
  /deep/ svg {
    width: 1em;
    height: 1em;
  }
}
</style>
