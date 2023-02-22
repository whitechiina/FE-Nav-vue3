<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-23 00:14:10
-->

<template>
  <div class="biying" @click="openBi">
    必应壁纸
  </div>
  <div class="biying-model" v-show="data.pop">
    <div class="biying-wall">
        <div class="biying-img" :style="{ 'background-image': 'url('+ data.bingData.url +')' }">
            <div class="biying-story">
                <h2>{{ data.bingData.copyright }}</h2>
                <div class="biying-tool">
                    <div @click="back">上一页</div>
                    <div @click="prev">下一页</div>
                    <div @click="openBi">关闭</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive, onMounted} from 'vue'

// https://api.no0a.cn/bing.html

onMounted(() => {
    axios({
        method: "get",
        url: "https://api.no0a.cn/api/bing/1"
    }).then((res) => {
        if (res.status === 200) {
            data.bingData = res.data.bing;
        };
    });
})

const data = reactive({
    bingData: [],
    imageUrl: '',
    imagtext: '',
    pop: false
})


const openBi = () => {
    data.pop = !data.pop;
}

const back = () => {
    
}

const prev = () => {}
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
        border: 10px solid #fff;
        border-radius: 10px;
        background-color: #fff;
        .biying-img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
            .biying-story {
                width: 100%;
                height: 140px;
                padding: 20px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: rgba($color: #fff, $alpha: .6);
                .biying-tool {
                    display: flex;
                    align-items: center;
                    .item {
                        width: 50px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        padding: 20px;
                    }
                }
            }
        }
    }
}
</style>