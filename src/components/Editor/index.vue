<template>
    <div class="editor" :class="{ active: active }">
        <div 
            ref="editorRef" 
            class="rich-input" 
            contenteditable="true" 
            :placeholder="placeholder" 
            @focus="onFocus"
            @input="onInput" 
            @blur="onBlur" 
            @keydown.enter="keyDown" 
            v-html="text"
        ></div>
        <div class="image-preview-box" ref="imageRef">
            <div class="image-preview" v-for="(url, index) in imgList" :key="index">
                <img :src="url" alt="">
                <div class="clean-btn" @click="removeImg(index)">
                    <svg data-v-48a7e3c5="" data-v-7c7c7498="" width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="12" rx="2" fill="#86909C"></rect>
                        <path data-v-48a7e3c5="" data-v-7c7c7498="" fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.98095 5.49307L8.22012 3.25389C8.28521 3.18881 8.39074 3.18881 8.45582 3.25389L8.69153 3.4896C8.75661 3.55468 8.75661 3.66021 8.69153 3.7253L6.45235 5.96447L8.69153 8.20364C8.75661 8.26873 8.75661 8.37426 8.69153 8.43934L8.45582 8.67505C8.39074 8.74013 8.28521 8.74013 8.22012 8.67505L5.98095 6.43587L3.74178 8.67505C3.67669 8.74013 3.57116 8.74013 3.50608 8.67505L3.27037 8.43934C3.20529 8.37426 3.20529 8.26873 3.27037 8.20364L5.50954 5.96447L3.27037 3.7253C3.20529 3.66021 3.20529 3.55468 3.27037 3.4896L3.50608 3.25389C3.57116 3.18881 3.67669 3.18881 3.74178 3.25389L5.98095 5.49307Z"
                            fill="white">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick, toRefs, onMounted, computed } from "vue"
import isEmpty from '@/utils'
import Toast from "../Toast";
// defineOptions({
//     name: 'Editor'
// })
// 接受props以及设定默认值 一般props是默认可选的，除非写了required:true就不需要写？，
const props = defineProps({
    minHeight:{
        type: Number,
        default: 30
    },
    placeholder: String,
    modelValue: String,
    imgList: Array
});
const range = ref()
const editorRef = ref()
const text = ref()
const isLocked = ref(false)
const active = ref(false)
const imageRef = ref()
const { imgList } = toRefs(props)
const minHeight = computed(() => {
    props.minHeight + 'px'
})
const padding = computed(() => {
    props.minHeight == 30 ? '4px 10px' : '8px 12px'
})

const emit = defineEmits(['blur','focus','input','submit','update:modelValue']);

watch(
  () => props.modelValue,
  val => {
    if (!isLocked.value) text.value = val
  }
)

function onFocus(event){
    emit('focus', event)
    isLocked.value = true
    active.value = true
}
// 失焦事件
function onBlur(event){
    range.value = window.getSelection().getRangeAt(0);   //将选中的文本变成range对象并记录下光标的位置
    emit('blur', event);
    if(!editorRef.value.innerHtml)  active.value = false;    //如果编辑器里没有任何值，那么失去active样式
    isLocked.value = false;
}

function onInput(event){
    const { innerHtml } = event.target;
    emit('update:modelValue', innerHtml);
    emit('input', event);
}

function addText(val){
    let selection = window.getSelection(); //选中的文本
    if(selection){
        selection.removeAllRanges();
        // 为空初始化光标
        if(!range.value){
            editorRef.value.focus();
            range.value = selection.getRangeAt(0);
        }
        // 删除选中内容
        range.value.deleteContents()
        //添加内容
        range.value.insertNode(range.value.createContextualFragment(val));
        range.value.collapse(false); //折叠该range,false表示折叠到end节点
        selection.addRange(range.value);

        emit('update:modelValue', editorRef.value.innerHtml || '');
        const event = editorRef.value;
        emit('input', event);
    }
}

function clear(){
    // 有就清空
    if(editorRef.value){
        editorRef.value.innerHtml = '';
        emit('update:modelValue', editorRef.value.innerHtml);
        active.value = false;
    }
}

function focus(){
    nextTick(()=>{
        editorRef.value?.focus();
    })
}

const keyDown = (e)=>{
    if(e.ctrlKey && e.key == 'Enter'){
        // 用户点击了ctrl+enter触发
        // console.log('ctrl+enter')
        if(isEmpty(props.modelValue.replace(/&nbsp;|<br>| /g, ''))){
            Toast({ message: '内容不能为空', type: 'info' })
        } else {
            emit('submit')
        }
    } else {
        //用户点击了enter触发发成功
    }
}

// 移除图片
const removeImg = (val) => {
    imgList?.value?.splice(val, 1)
}

onMounted(()=>{
    editorRef.value?.addEventListener('keyup', (event)=>{
        const el = event.target;
        if(el.innerHtml == '<br>'){
            el.innerHtml = ''
        }
    })
})

defineExpose({
    addText,
    clear,
    focus,
    imageRef
})
</script>

<style lang="less" scoped>
@minHeight: 30;
@padding: 4px 10px;

.editor {
    transition: all 0.3s;
    background: #f2f3f5;
    border: 1px solid #f7f7f7;
    color: #606266;
    border-radius: 4px;
    font-size: 14px;

    .rich-input {
        min-height: @minHeight;
        line-height: 22px;
        padding: @padding;
        outline: none;
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        resize: both;
        background-position: 120% -10px;
        transition: background 0.3s;
    }

    .rich-input:empty::before {
        cursor: text;
        content: attr(placeholder);
        color: #a8abb2;
    }

    .image-preview-box {
        display: flex;
        padding: 0 12px;

        .image-preview {
            position: relative;

            img {
                height: 64px;
                min-width: 64px;
            }

            .clean-btn {
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;

                svg {
                    display: block;
                }
            }

            .clean-btn:hover {
                opacity: .8;
            }
        }
    }
}

.active {
    border-color: #409eff;
    background: #ffffff;
}
</style>
