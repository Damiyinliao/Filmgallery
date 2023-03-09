<template>
    <div id="create">
        <aside>
            <BackBtn></BackBtn>
            <div class="menu card">
                <div class="create-card menu-item">
                    <a class="card" style="background-color: #a2c2df;">发布Card</a>
                </div>
                <div class="manage-card menu-item">
                    <a class="card" style="background-color: pink;">管理Card</a>
                </div>
            </div>

        </aside>
        <section class="card">
            <div class="header">
                <span class="header-icon"></span>
                <span class="header-title">发布图文</span>
            </div>
            <div class="content1">
                <div class="imgs-box">
                    <div class="top">
                        <div class="title">图片编辑</div>
                        <button class="btn">
                            <span class="btn-content">
                                <img src="@/assets/add.svg" alt="">
                                上传更多
                            </span>
                        </button>
                    </div>
                    <div class="card-pics">
                        <el-upload 
                            v-model:file-list="fileList" 
                            action="http://upload-cn-east-2.qiniup.com"
                            list-type="picture-card" 
                            :on-preview="handlePictureCardPreview" 
                            :on-remove="handleRemove"
                            :data="uploadData"
                            :before-upload="handleBeforeUpload"
                            :on-success="handleUploadSuccess"
                        >
                            <el-icon>
                                <Plus />
                            </el-icon>
                        </el-upload>

                        <el-dialog v-model="dialogVisible">
                            <img w-full :src="dialogImageUrl" alt="Preview Image" />
                        </el-dialog>
                    </div>
                    <div class="card-title">
                        <Editor
                            ref="editor1Ref"
                            v-model="cardInfo.title"
                            placeholder="填写标题，会有更多赞~"
                        ></Editor>
                    </div>
                    <div class="card-desc">
                        <Editor
                            ref="editor2Ref"
                            v-model="cardInfo.title"
                            placeholder="填写更全面的信息，让更多人看到你的作品"
                        ></Editor>
                    </div>
                </div>
                
            </div>
            <div class="header">
                <span class="header-icon"></span>
                <span class="header-title">详细内容</span>
            </div>
            <div class="content2">
                <div class="select">
                    <a style="background-color: #f9d770" @click="cardInfo.type='film'">胶片</a>
                    <a style="background-color: #96c24e" @click="cardInfo.type='sim'">模拟胶片</a>
                </div>
                <div class="details-box">
                    <ul class="film" v-show="cardInfo.type=='film'">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElUpload, ElDialog, ElIcon } from 'element-plus';
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/icon/style/css'
import { Plus } from '@element-plus/icons-vue'
import Editor from '@/components/Editor'
import { reqQiniuToken } from '@/api'
import { useStore } from 'vuex';
const store = useStore()
const cardInfo = reactive({
    user_id: store.state.user.userInfo._id,
    user_avatar: store.state.user.userInfo.avatar,
    username: '',
    nickname:'',
    card_title:'',
    desc:'',
    isSimulation: false,
    film_type:'',
    equipment:'',
    photos:[]
})
const qiniu_token = ref({token:""})

const uploadData = reactive({
    token:'DmyiQS2tf_DcCjS6c-UAf3bFmnWNvhBoFx-YSxho:OT9f98cEIcFfXYKsjEx0pB-KKBQ=:eyJzY29wZSI6ImZ1amlmaWxtcyIsImRlYWRsaW5lIjoxNjc4Mzc5NDU2fQ==',
    key:''
})

async function getToken(){
    let { data } = await reqQiniuToken();
    console.log(data); //  { token: xxxxx }
    qiniu_token.value = data
}
const fileList = ref([
    // {
    //     name: 'kodak-gold-200-1.jpeg',
    //     url: '/images/kodak-gold-200-1.jpg',
    // },
    // {
    //     name: 'kodak-gold-200-2.png',
    //     url: '/images/kodak-gold-200-2.jpg',
    // },
    // {
    //     name: 'kodak-gold-200-3.jpg',
    //     url: '/images/kodak-gold-200-3.jpg',
    // }
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handleBeforeUpload = (uploadFile) => {
    // console.log(uploadFile.name);
    http://img.filmgallery.cn/upload/2023-03-03_14-58-40.png
    // 加上 'upload/' 表明你的图片位置存储到   你的空间/upload/file.name
    uploadData.key = 'upload/' + uploadFile.name;
}
const handleUploadSuccess = (uploadFile, uploadFiles) => {
    //console.log("aaa",uploadFile);{hash: 'FvdMnQwbUs88DXhWqWZCVDE9tUlj', key: 'upload/fujifilm x100v.png'}
    let photo_item = {
        url: `http://img.filmgallery.cn/${uploadFile.key}`
    }
    // 上传成功之后向photos添加链接
    cardInfo.photos.push(photo_item);
}
const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile);
}

const handlePictureCardPreview = (uploadFile) => {
    // console.log(uploadFile);
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}
// onMounted(()=>{
//     getToken()
// })
</script>

<style lang="less" scoped>
#create {
    display: flex;
    justify-content: space-around;
    margin-top: 120px;
    position: relative;
    margin-bottom: 60px;
}

aside {
    width: 300px;
    height: auto;

    .menu {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .menu-item {
            padding: 10px;

            a {
                display: block;
                width: 200px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                transition: all .2s ease;
            }

            a:hover {
                transform: scale(1.04);
            }
        }
    }
}

section {
    width: 1100px;
    // height: 600px;
    padding: 28px 24px;

    .header {
        line-height: 28px;
        font-size: 20px;
        margin-bottom: 24px;

        .header-icon {
            position: relative;
            top: 2px;
            display: inline-block;
            width: 6px;
            height: 18px;
            background: #84a3c0;
            border-radius: 3px;
            margin-right: 2px;
        }
    }

    .content1 {
        position: relative;
        width: 100%;
        padding: 0 300px 0 13px;
    }

    .imgs-box {
        margin-bottom: 12px;
    }

    .top {
        display: flex;
        align-items: center;
        margin-bottom: 12px;

        .title {
            font-size: 18px;
            line-height: 26px;
            color: #262626;
        }

        input[type="file"] {
            appearance: none;
            background-color: initial;
            cursor: default;
            align-items: baseline;
            color: inherit;
            text-overflow: ellipsis;
            white-space: pre;
            text-align: start !important;
            padding: initial;
            border: initial;
            overflow: hidden !important;
        }
        .btn{
            -webkit-font-smoothing: antialiased;
            appearance: none;
            font-family: RedNum, RedZh, RedEn, -apple-system;
            vertical-align: middle;
            text-decoration: none;
            border: 1px solid transparent;
            outline: none;
            user-select: none;
            cursor: pointer;
            display: inline-flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            margin-right: 16px;
            padding: 0px 16px;
            border-radius: 4px;
            color: rgb(58, 100, 255);
            background-color: transparent;
            height: 32px;
            font-size: 14px;
        }
        .btn-content{
            display: flex;
            align-items: center;
        }
    }
    .card-pics{
        margin-bottom: 15px;
    }
    .card-title{
        margin-bottom: 12px;
    }
    .card-desc{
        margin-bottom: 12px;
    }
    .content2{
        .select{
            display: flex;
            flex-direction: row;
            a{
                display: block;
                width: 100px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                transition: all .2s ease;
                border-radius: 3px;
                margin-right: 10px;
            }
            a:hover{
                transform: scale(1.04);
            }
        }
        
    }
    // .details-box{

    // }
}
</style>
