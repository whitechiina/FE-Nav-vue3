<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-27 14:58:11
-->
<template>
    <div class="main-list">
        <div class="main-item" v-for="(item, index) in data.searchWay" :key="index" @click="ToPage(index)">
            <div :class="item.active? 'main-item-active' : '' ">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Vue from 'vue';
import { ref, reactive, toRefs, onMounted } from 'vue'

const data = reactive({
    searchWay: [
        { name: '百度', active: true },
        { name: '百度', active: false },
        { name: '微博', active: false },
        { name: '必应', active: false },
        { name: '谷歌', active: false }
    ]
})

const ToPage = (index: number) => {
    data.searchWay = data.searchWay.map((e, i) => ({
        ...e, active: i === index,
    }));
}


</script>
<style scoped lang="scss">
.main-list {
    width: 160px;
    padding: 0;
    margin: 0;
    position: fixed;
    .main-item {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 160px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 10px;
        text-decoration: none;
        letter-spacing: .5px;
        will-change: background-color;
        transition: background-color .06s;
        border-radius: 4px;
        overflow: hidden;
        text-align: center;
        font-weight: 900;
        color: #00000080;
        cursor: pointer;
        font-size: 14px;
        .main-item-active {
            width: 100%;
            text-align: center;
            height: 50px;
            font-weight: 900;
            line-height: 50px;
            color: #0088f5;
            background-color: #fff;
        }
    }
}
</style>