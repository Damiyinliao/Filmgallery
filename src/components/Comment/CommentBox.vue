<template>
    <div v-click-outside:[popperRef]="onClickOutside" class="comment-box">
        <!-- 输入框 -->
        <Editor 
            ref="editorRef" 
            v-model="content" 
            :class="{ 'input-active': action }" 
            :placeholder="props.placeholder"
            :min-height="64" 
            :img-list="imgList" 
            @focus="onFocus" 
            @input="input" 
            @submit="onSubmit"
        >
        </Editor>
        <Transition name="fade">
            <div v-if="action" class="action-box">
                <!-- 表情 -->
                <Emoji :emoji="emoji" @addEmoji="val => editorRef?.addText(val)"></Emoji>
                <!-- 图片 -->
                <div class="picture" @click="inputRef?.click">  <!-- 调起input输入框执行上传文件 -->
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="icon">
                        <path data-v-48a7e3c5="" fill-rule="evenodd" clip-rule="evenodd"
                            d="M14 1.3335C14.3514 1.3335 14.6394 1.60546 14.6648 1.95041L14.6666 2.00016V14.0002C14.6666 14.3516 14.3947 14.6396 14.0497 14.665L14 14.6668H1.99998C1.64853 14.6668 1.36059 14.3949 1.33514 14.0499L1.33331 14.0002V2.00016C1.33331 1.64871 1.60527 1.36077 1.95023 1.33532L1.99998 1.3335H14ZM13.3333 2.66618H2.66664V13.3328H13.3333V2.66618ZM11.9219 6.7879C11.9719 6.83791 12 6.90574 12 6.97647V11.7993C12 11.9098 11.9104 11.9993 11.8 11.9993H6.81615C6.7975 11.9993 6.77945 11.9968 6.76232 11.992L3.91042 11.9847C3.79996 11.9844 3.71063 11.8947 3.7109 11.7842C3.71102 11.7313 3.73209 11.6807 3.76948 11.6433L6.52468 8.88807C6.62882 8.78393 6.79766 8.78393 6.9018 8.88807L8.17297 10.1593L11.5447 6.7879C11.6489 6.68376 11.8177 6.68376 11.9219 6.7879ZM5.99997 3.99951V5.99951H3.99997V3.99951H5.99997Z">
                        </path>
                    </svg>
                    <span>图片</span>
                    <input id="comment-upload" ref="inputRef" type="file" multiple @change="change" />
                </div>
                <!-- 发表评论 -->
                <el-button type="primary" :disabled="disabled" @click="onSubmit">
                    {{ props.contentBtn }}
                </el-button>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ClickOutside as vClickOutside, ElButton } from 'element-plus'
import { ref, reactive, inject, nextTick } from "vue"
import Editor from '@/components/Editor'
import { isEmpty, isNull, isImage } from '@/utils';
import Toast from '../Toast';
const props = defineProps({
    placeholder: String,
    contentBtn: String,
    paraentId: String,
    replay: String
})

const content = ref('')
const action = ref(false)
const disabled = ref(true)
const editorRef = ref()
const popperRef = ref()
const inputRef = ref()
const imgList = ref([])
const files2 = ref([])
const state = reactive({
    imgLength: 0
})
const input = (e) => {
    isEmpty(content.value.replace(/&nbsp;|<br>| /g, '')) ? (disabled.value = true) : (disabled.value = false)
}
const emit = defineEmits([    'close',    'hide']);
const submit = inject('InjectionCommentFun') // 由Comment.vue procide
const emoji = inject('InjectionEmojiApi') // 由Comment.vue procide
// 提交评论的数据
const onSubmit = () => {
    submit({
        content: props.replay ? `回复<span style="color:#50cf97;">@${props.replay}</span> ${content.value}` : content.value,
        paraentId: isNull(props.paraentId, null),
        files: files2.value,
        finish: () => {
            // 清空评论数据
            editorRef.value.clear(),
                imgList.value.length = 0,
                // 关闭评论
                emit('close')
        }
    })
}
// 点击评论框外关闭操作栏和失去评论焦点
function onClickOutside(event) {
    // 评论框有内容就不执行操作
    if (isEmpty(content.value) && !state.imgLength) {
        action.value = false;
        emit('hide', event)
    }
}

function onFocus() {
    // 显示操作栏
    action.value = true;
    nextTick(() => {
        // 所有以'el-popper-container'开头的id且被选中的元素
        popperRef.value = document.querySelector("div[id^='el-popper-container']")
    })
}

defineExpose({
    focus: () => editorRef.value?.focus
})

//获取文件url
function createObjectURL(blob) {
    if (window.URL) {
        return window.URL.createObjectURL(blob)
    } else if (window.webkitURL) {
        return window.webkitURL.createObjectURL(blob)
    } else {
        return ''
    }
}
const change = () => {
    imgList.value.length = 0;
    files2.value.length = 0;

    const files = inputRef.value?.files;
    state.imgLength = isNull(files?.length, 0);
    if(files){
        for(let i = 0; i < files.length; i++){
            let fileName = files[i].name;   // 获取当前文件对象的URL
            files2.value.push(files[i]);
            //判断文件是否是图片类型
            if(isImage(fileName)){
                imgList.value.push(url)
            } else {
                Toast({ type: 'warning', message: '请选择图片类型文件', duration: 2500})
            }
        }
    }
}
</script>

<style lang="less" scoped>
.comment-box {
    width: 100%;
    position: relative;
    overflow: hidden;

    .action-box {
        display: flex;
        align-items: center;
        margin-top: 8px;

        .el-button {
            margin-left: auto;
        }

        .picture {
            margin-left: 20px;
            font-size: 14px;
            color: var(--u-text-color-secondary);
            cursor: pointer;

            .icon {
                fill: var(--u-text-color-secondary);
                margin-right: 4px;
                margin-bottom: 1px;
            }

            #comment-upload {
                display: none;
            }
        }
    }

    .picture:hover {
        color: var(--u-color-primary);

        .icon {
            fill: var(--u-color-primary);
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
