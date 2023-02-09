<template>
    <el-select v-model="typeValue" class="m-2" placeholder="胶片类型">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
            <!-- <img src="./images/movie.png" style="width: 20px;height: 20px;">
            <span>{{ item.label }}</span> -->
        </el-option>
    </el-select>
    <el-select v-model="brandValue" class="m-2" placeholder="品牌">
        <el-option v-for="item in brandOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <el-select v-model="isoValue" class="m-2" placeholder="ISO">
        <el-option v-for="item in isoOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <br>
    <el-select v-model="grainValue" class="m-2" placeholder="颗粒">
        <el-option v-for="item in grainOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <el-select v-model="contrastValue" class="m-2" placeholder="对比度">
        <el-option v-for="item in contrastOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <el-select v-model="useCaseValue" class="m-2" placeholder="使用场景">
        <el-option v-for="item in useCaseOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const typeValue = ref('');
        const brandValue = ref('');
        const isoValue = ref('');
        const grainValue = ref('');
        const contrastValue = ref('');
        const useCaseValue = ref('');
        const typeOptions = [
            {
                value: 'ColorNegative',
                label: '彩色负片',
            },
            {
                value: 'ColorSlide',
                label: '彩色正片',
            },
            {
                value: 'Black&White',
                label: '黑白',
            },
            {
                value: 'Black&WhiteSlide',
                label: '黑白正片',
            },
            {
                value: 'Cinestrip',
                label: '电影卷',
            },
        ];
        const brandOptions = [
            {
                value: 'Fujifilm',
                label: '富士'
            },
            {
                value: 'Kodak',
                label: '柯达'
            },
            {
                value: 'Fomapan',
                label: '福马'
            },
            {
                value: 'Lomography',
                label: '乐魔'
            }
        ];
        const isoOptions = [
            {
                value: '20',
                label: '20'
            },
            {
                value: '50',
                label: '50'
            },
            {
                value: '100',
                label: '100'
            },
            {
                value: '125',
                label: '125'
            },
            {
                value: '160',
                label: '160'
            },
            {
                value: '200',
                label: '200'
            },
            {
                value: '320',
                label: '320'
            },
            {
                value: '400',
                label: '400'
            },
            {
                value: '800',
                label: '800'
            },
            {
                value: '1600',
                label: '1600'
            }
        ];
        const grainOptions = [
            {
                value: 'VeryFine',
                label: '细腻'
            },
            {
                value: 'Fine',
                label: '较细'
            },
            {
                value: 'Normal',
                label: '普通'
            },
            {
                value: 'Medium',
                label: '中等'
            }
        ];
        const contrastOptions = [
            {
                value: 'Low',
                label: '低'
            },
            {
                value: 'Medium',
                label: '中'
            },
            {
                value: 'High',
                label: '高'
            },
            {
                value: 'VeryHigh',
                label: '很高'
            }
        ];
        const useCaseOptions = [
            {
                value: 'GeneralPurpose',
                label: '普通使用'
            },
            {
                value: 'LowLightConditions',
                label: '低照明条件'
            },
            {
                value: 'SunnyConditions',
                label: '晴天'
            },
            {
                value: 'Portraits',
                label: '人像'
            },
            {
                value: 'Wedding',
                label: '婚礼'
            },
            {
                value: 'Product',
                label: '产品'
            }
        ]
        return {
            typeValue,
            brandValue,
            isoValue,
            grainValue,
            contrastValue,
            useCaseValue,
            typeOptions,
            brandOptions,
            isoOptions,
            grainOptions,
            contrastOptions,
            useCaseOptions
        }
    }
}
</script>

<style scoped>
    .m-2{
        margin: 5px;
    }
</style>>
