<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-03-03 15:44:30
-->
<template>
  <div class="list">
    <div class="list-item" @click="toContent()">
        <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55687568403b4110b5fe34131f20c584~tplv-k3u1fbpfcp-watermark.awebp?" alt="">
        <div class="list-text">
            <h4>标题</h4>
            <h4>介绍</h4>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const toContent = () => {
    router.push({ path: '/article' })
}
</script>
<style scoped lang="scss">
.list {
    width: 100%;
    height: 140px;
    background-color: #fff;
	margin-bottom: 10px;
    border-radius: 4px;
    box-sizing: content-box;
    .list-item {
        height: auto;
        display: flex;
        padding: 10px;
    	margin-bottom: 10px;
        border-radius: 4px;
        box-sizing: content-box;
        img {
            height: 120px;
        }
        .list-text {
            margin-left: 20px;
        }
    }
}
</style>