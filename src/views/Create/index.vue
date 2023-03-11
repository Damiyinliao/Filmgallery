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
                        <button class="btn" @click="getToken">
                            <span class="btn-content">
                                <img src="@/assets/add.svg" alt="">
                                启动上传
                            </span>
                        </button>
                    </div>
                    <div class="card-pics">
                        <el-upload 
                            v-model:file-list="fileList" 
                            action="http://upload-cn-east-2.qiniup.com"
                            multiple
                            list-type="picture-card" 
                            :on-preview="handlePictureCardPreview" 
                            :on-remove="handleRemove"
                            :data="uploadData"
                            :before-upload="handleBeforeUpload"
                            :on-success="handleUploadSuccess"
                            :on-error="handleUploadError"
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
                        <el-input
                            ref="editor1Ref"
                            v-model="cardInfo.card_title"
                            placeholder="填写标题，会有更多赞~"
                        ></el-input>
                    </div>
                    <div class="card-desc">
                        <el-input
                            v-model="cardInfo.desc"
                            autosize
                            type="textarea"
                            placeholder="填写更全面的信息，让更多人看到你的作品"
                        ></el-input>
                    </div>
                </div>
                
            </div>
            <div class="header">
                <span class="header-icon"></span>
                <span class="header-title">详细内容</span>
            </div>
            <div class="content2">
                <div class="select">
                    <a @click="cardInfo.isSimulation=false">胶片</a>
                    <a @click="cardInfo.isSimulation=true">模拟胶片</a>
                </div>
                <div class="details-box">
                    <ul class="film" v-if="!cardInfo.isSimulation">
                        <li>
                            <span class="item">胶片：</span><el-input v-model="cardInfo.film_type" placeholder="胶片类型" />
                        </li>
                        <li>
                            <span class="item">相机：</span><el-input v-model="cardInfo.equipment" placeholder="相机名称" />
                        </li>
                    </ul>
                    <ul v-else>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="submit-box">
                    <button @click="submitAll"><span>发布</span></button>
                    <button @click="clear"><span>清除</span></button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, inject } from 'vue'
import { ElUpload, ElDialog, ElIcon, } from 'element-plus';
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/icon/style/css'
import { Plus } from '@element-plus/icons-vue'
import { reqQiniuToken } from '@/api'
import { useStore } from 'vuex';
import Toast from '@/components/Toast';
const $API = inject("$API");
const store = useStore()
const cardInfo = reactive({
    user_id: store.state.user.userInfo._id,
    user_avatar: store.state.user.userInfo.avatar,
    username: store.state.user.userInfo.username,
    nickname:store.state.user.userInfo.nickname,
    card_title:'',
    desc:'',
    isSimulation: false,
    film_type:'',
    equipment:'',
    photos:[],
    like:0
})

const uploadData = reactive({
    token:'',
    key:''
})

async function getToken(){
    let qiniu_token = localStorage.getItem("qiniu_token");
    if(qiniu_token){
        console.log(qiniu_token);
        uploadData.token = qiniu_token;
    }else{
        let { data } = await reqQiniuToken();
        console.log(data); //  { token: xxxxx }
        localStorage.setItem("qiniu_token",data.token);
        uploadData.token = data.token;
    }   
}
// 绑定的照片数组
const fileList = ref([
    
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
// 上传之前要处理的回调
const handleBeforeUpload = (uploadFile) => {
    console.log(uploadData);
    http://img.filmgallery.cn/upload/2023-03-03_14-58-40.png
    // 加上 'upload/' 表明你的图片位置存储到   你的空间/upload/file.name
    uploadData.key = 'upload/' + uploadFile.name;
}
// 上传成功之后处理的回调
const handleUploadSuccess = (uploadFile, uploadFiles) => {
    //console.log("aaa",uploadFile);{hash: 'FvdMnQwbUs88DXhWqWZCVDE9tUlj', key: 'upload/fujifilm x100v.png'}
    let photo_item = {
        url: `http://img.filmgallery.cn/${uploadFile.key}`
    }
    // 上传成功之后向photos添加链接
    cardInfo.photos.push(photo_item);
}
// 移除照片处理的回调
const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile.response.key);
    // 要删除的照片的url
    let photoUrl = `http://img.filmgallery.cn/${uploadFile.response.key}`;
    // 对应的索引
    let deleteIndex = cardInfo.photos.findIndex(item => item.url == photoUrl);
    // 删掉对应的照片
    cardInfo.photos.splice(deleteIndex, 1);
}
// 预览照片要处理的回调
const handlePictureCardPreview = (uploadFile) => {
    // console.log(uploadFile);
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}
// 处理上传失败的回调
const handleUploadError = (file) =>{
    console.log(file);
    // getToken();
}
const clear = () => {
    cardInfo.card_title = '';
    cardInfo.desc = '';
    cardInfo.film_type = '';
    cardInfo.equipment = '';
    fileList.value = '';
    cardInfo.photos = [];
}
// 提交所有
const submitAll = async () => {
    console.log(cardInfo);
    let result = await $API.uploadCard(cardInfo);
    if(result.data._id){
        Toast({type: 'success', message: '发布成功', duration: 2500 })
    }
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
                border: .5px solid #cbccd0;
            }
            a:hover{
                transform: scale(1.04);
                background-color: #b1b4bb;
            }
            a:focus{
                background-color: #b1b4bb;;
            }
        }
        
    }
    .details-box{
        padding: 20px;
        .film{
            display: flex;
            li{
                width: 400px;
                padding: 5px;
                display: flex;
                // justify-content: ;
                align-items: center;
                
            }
        }
        .item{
            width: 60px;
        }
    }
    .submit-box{
        button{
            width: 110px;
            height: 40px;
            font-size: 16px;
            transition: all .5s ease;
            margin-right: 20px;
            border-radius: 4px;
            border: 1px solid transparent;
            cursor: pointer;
        }
        button:hover{
            transform: scale(1.04);
        }
    }
    .submit-box button:first-child{
        color: white;
        background-color: #ff2442;
        
    }
}
</style>
