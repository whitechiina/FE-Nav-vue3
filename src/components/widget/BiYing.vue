<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-03-03 16:28:45
-->

<template>
  <div class="biying" @click="open()">
    必应壁纸<i class="iconfont icon-biying"></i>
  </div>
  <div class="biying-model" v-show="data.pop">
    <div class="biying-wall">
        <div class="biying-img" :style="{ 'background-image': 'url('+ data.bingData.url +')' }">
            <div class="biying-story">
                <h2>{{ data.bingData.copyright }}</h2>
                <div class="biying-tool">
                    <div @click="pagechange(false)">上一页</div>
                    <div @click="pagechange(true)">下一页</div>
                    <div @click="open()">关闭</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive, onMounted} from 'vue'

interface Type {
    bingData: any,
    imageUrl: String,
    imagtext: String,
    index: Number,
    pop: Boolean
}

onMounted(() => {
    getData()
})

const getData = () => {
    axios({
        method: "get",
        url: `https://api.no0a.cn/api/bing/${data.index}`
    }).then((res) => {
        if (res.status === 200) {
            data.bingData = res.data.bing;
        };
    });
}

const data = reactive<Type>({
    bingData: [],
    imageUrl: '',
    imagtext: '',
    index: 1,
    pop: false
})


const open = () => {
    data.pop = !data.pop;
}

const pagechange = (flag: Boolean) => {
    if (data.index as any == 0 || data.index as any < 8) {
        flag? data.index++ : data.index != 0? data.index-- : '';
        getData();
    };
}
</script>

<style scoped lang="scss">
.biying {
    position: fixed;
    top: 30%;
    right: 0px;
    
}
.biying-model {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #c0c0c080;
    transition: opacity .1s,visibility .1s;
    backdrop-filter: blur(5px);
    .biying-wall {
        position: relative;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 88vw;
        height: 88vh;
        border: 8px solid rgba($color: #fff, $alpha: .1);
        border-radius: 4px;
        background-color: rgba($color: #fff, $alpha: 0.3);
        .biying-img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 2px;
            .biying-story {
                width: 100%;
                height: 140px;
                padding: 20px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: rgba($color: #fff, $alpha: .6);
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                h2 {
                    color: #efefef;
                    text-shadow: 0px 0px 0px #efefef, 0px 0px 2px rgb(0 0 0 / 60%), 0px 0px 4px rgb(0 0 0 / 60%);
                }
                .biying-tool {
                    width: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .item {
                        width: 50px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                    }
                }
            }
        }
    }
}
</style>