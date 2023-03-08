<template>
    <!-- 折叠组价 -->
    <div class="fold">
        <div class="txt-box" :class="{'over-hidden': fold}">
            <div ref="divBox">
                <slot></slot>
            </div>
        </div>
        <div class="action-box select-none">
            <div v-if="isOver && unfold" class="expand-btn" @click="fold = !fold">
                {{ fold ? '展开' : '收起' }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue"
// defineOptions({
//     name: 'Fold'
// })
const props = defineProps({
    line: {
        type: Number,
        default: 5
    },
    unfold: Boolean
})
const line = computed(()=>{
    // Math.trunc 取出一个小数的小数部分
    let line = Math.trunc(Number(props.line));
    return line > 0 ? line : 1
})

// 文本是否是展开状态 默认为收起
const fold = ref(true);
// 文本是否超出五行，默认否
const isOver = ref(false)
const divBox = ref()
let observer;
onMounted(()=>{
    // ResizeObserver 接口监视 Element 内容盒(边框盒减去内边距和边框的宽度)或边框盒或者 SVGElement 边界尺寸的变化。
    observer = new ResizeObserver(entry => {
        // 对element监视时所需要执行的回调函数
        if(fold.value && divBox.value) {
            //offsetHeight：包括内容可见部分的高度，border，可见的padding，水平方向的scrollbar（如果存在）；不包括margin。
            // clientHeight：包括内容可见部分的高度，可见的padding；不包括border，水平方向的scrollbar，margin。
            //scrollHeight：包括内容的高度（可见与不可见），padding（可见与不可见）；不包括border，margin。
            // 内容盒高度小于滚动的高度，那么就展开
            isOver.value = divBox.value.offsetHeight < divBox.value.scrollHeight;
        }
    })
    // 开始对指定 Element 的监听。
    observer.observe(divBox.value);
})
onUnmounted(()=>{
    // 取消特定观察者目标上所有对 Element 的监听
    observer.disconnect();
})
</script>

<style lang="less" scoped>
@line: 5 ;

.fold {
  font-size: 14px;
  line-height: 2rem;
  color: inherit;

  .txt-box {
    margin-top: 0.5rem;
    // 会对过长的单词做词内断词处理，这样单词始终会在容器中，不会溢出容器
    word-wrap: break-word;
  }

  .action-box {
    margin-bottom: 0.5rem;
    .expand-btn {
      display: inline-block;
      line-height: 22px;
      cursor: pointer;
      color: #409eff;
    }
  }

  .over-hidden {
    //象作为弹性伸缩盒子模型显示。
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    //设置或检索伸缩盒对象的子元素的排列方式。
    -webkit-box-orient: vertical;
    //用来限制在一个块元素显示的文本的行数。
    -webkit-line-clamp: @line;
  }
}
</style>
