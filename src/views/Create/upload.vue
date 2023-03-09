<template>
    <el-upload 
        v-model:file-list="fileList" 
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        list-type="picture-card" 
        :on-preview="handlePictureCardPreview" 
        :on-remove="handleRemove">
        <el-icon>
            <Plus />
        </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
</template>
  
<script setup>
import { ref } from 'vue'
import { ElUpload, ElDialog, ElIcon } from 'element-plus';
import { Plus } from '@element-plus/icons-vue'

const fileList = ref([
    {
        name: 'kodak-gold-200-1.jpeg',
        url: '/images/kodak-gold-200-1.jpeg',
    },
    {
        name: 'kodak-gold-200-2.png',
        url: '/images/kodak-gold-200-2.jpeg',
    },
    {
        name: 'kodak-gold-200-3.jpg',
        url: '/images/kodak-gold-200-3.jpg',
    }
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}
</script>
  