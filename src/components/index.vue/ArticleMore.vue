<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-27 17:48:03
-->
<template>
  <div class="article">
    <div class="article-load">
        <div class="left">.</div>
        <div class="right">.</div>
    </div>
    <div class="article-main">
        <div class="left">1/10</div>
        <div class="right">加载更多</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="scss">
.article {
    position: relative;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    height: 40px;
    margin-bottom: 10px;
    .article-load {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 8;
        .left {
            flex: 1;
            margin-left: -10px;
            margin-right: 10px;
            background: #fff;
            transform: skew(-20deg);
        }
        .right {
            width: 12rem;
            margin-right: -10px;
            background: #fff;
            transform: skew(-20deg);
        }
    }
    .article-main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        .left {
            margin-left: 20px;
        }
        .right {
            margin-right: 20px;
        }
    }
}

</style>