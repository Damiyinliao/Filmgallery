<template>
    <div class="comment">
        <div class="comment-form">
            <div class="header">
                <span class="header-title">评论</span>
            </div>
            <div class="content">
                <div class="avatar-box">
                    <el-avatar :size="40" :src="user.avatar">
                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt="">
                    </el-avatar>
                </div>
                <CommentBox placeholder="输入评论（Enter换行，Ctrl + Enter发送）" content-btn="发表评论"></CommentBox>
            </div>
        </div>
        <!-- 评论列表 -->
        <div class="comment-list-wrapper">
            <slot name="list-title">全部评论</slot>
        </div>
        <CommentList :data="comments">
            <template>
                <slot name="userInfo"></slot>
            </template>
        </CommentList>
    </div>
</template>

<script setup>
import { ElAvatar } from 'element-plus'
import CommentBox from './CommentBox.vue'
import CommentList from './CommentList.vue'
import { provide, toRefs, useSlots, reactive } from 'vue'


// defineOptions({
//     name: 'Comment'
// })
const props = defineProps({
    config: Object,
    showSize: {
        type:Number,
        default: 3
    },   //显示评论的数量
    page: {
        type: Boolean,
        default: false
    }
})

const slots = useSlots();

// 将config属性转换为响应式数据
const { user, comments } = toRefs(props.config);

const emit = defineEmits([    'submit',    'like',    'replyPage',    'report',    'getUser',    'report',    'remove'])

/**
 * 提交评论
 * @param {*} obj 
 */
const submit = (obj) => {
    let { content, parentId, files } = obj;
    const finish = (comment) => {
        //添加内容回调处理，添加到评论列表
        obj.finish();
        if (obj.parentId) {
            let raw_comment = comments.value.find(v => v.id == obj.parentId);
            if (raw_comment) {
                let reply = raw_comment.reply;
                if (reply) {
                    reply.list.unshift(comment);
                    reply.total++
                } else {
                    raw_comment.reply = {
                        total: 1,
                        list: [comment]
                    }
                }
            } else {
                comments.value.unshift(comment);
            }
        }
        emit('submit', { content, parentId, files, finish })
    }
}

/**
 * contentBox点赞事件提供
 * @param id
 */
const like = (id) => {
    // 点赞评论数组处理
    const editLike = (id, count) => {
        let tar = null;
        comments.value.forEach(v => {
            if (v.id != id) {
                tar = v.reply?.list.find(v => v.id == id);
            } else {
                tar = v;
            }
            if (tar) {
                tar.likes += count
            }
        })
    }

    //点赞事件处理
    const likeIds = props.config.user.likeIds;
    let temp = likeIds.map(String);//讲likeIds里的转为string并赋值给temp
    emit('like', id, () => {
        if (temp.indexOf(id) == -1) {
            // 点赞
            likeIds.push(id);
            editLike(id, 1);
        } else {
            //取消点赞
            let index = temp.findIndex(item => item == id); //找到对应的索引
            if (index != -1) likeIds.splice(index, 1);   // 删除掉
            editLike(id, -1);
        }
    })
}
/**
 * ReplyBox.vue需要用到参数或方法
 */

const replyBox = {
    replyPage: (parentId, pageNum, pageSize, finish) => {
        emit('replyPage', { parentId, pageNum, pageSize, finish })
    },
    showSize: props.showSize,
    page: props.page,
    comments: comments
}

/**
 * ContentBox.vue需要用到参数或方法
 */

const contentBox = {
    user: user,
    like: like,
    isUserInfo: slots.userInfo != undefined,
    getUser: (uid, show) => emit('getUser', uid, show),
    report: (id, close) => emit('report', id, close),
    remove: (id, parentId, close) =>
        emit('remove', id, () => {
            close()
            // 删除评论数据操作
            if (parentId) {
                let comment = comments.value.find(item => item.id == parentId)
                let reply = comment?.reply
                if (reply) {
                    let index = reply.list.findIndex(item => item.id == id)
                    if (index != -1) {
                        reply.list.splice(index, 1)
                        reply.total--
                    }
                }
            } else {
                let index = comments.value.findIndex(item => item.id == id)
                if (index != -1) {
                    comments.value.splice(index, 1)
                }
            }
        })
}
provide('InjectionCommentFun', submit)
provide('InjectionEmojiApi', props.config.emoji)
provide('InjectionReply', replyBox)
provide('InjectionContentBox', contentBox)
</script>

<style lang="less" scoped>
.comment {
    background-color: #fff;
    color: #303133;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 2.5rem;
    padding-bottom: 2rem;
    margin-top: 1.5rem;

    .comment-form {
        padding-top: 2rem;

        .header {
            .header-title {
                font-size: 18px;
                line-height: 30px;
                font-weight: 600;
            }
        }

        .content {
            margin-top: 2rem;
            display: flex;

            .el-avatar {
                margin-right: 16px;
            }
        }
    }
}
</style>
