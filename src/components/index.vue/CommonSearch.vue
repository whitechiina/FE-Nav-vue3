<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-22 16:13:13
-->

<template>
  <div class="search-panel">
    <div class="search">
        <input class="search-form" type="text" placeholder="输入关键词搜索 | tab键切换引擎">
        <div class="search-selector">
            <img src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/google.323f7015.png" alt="">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="scss">
.search-panel {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .search {
        width: 400px;
        height: 40px;
        padding: 10px;
        background-color: red;
        box-sizing: content-box;
        position: relative;
        .search-form {
            width: 400px;
            height: 40px;
            padding-left: 60px;
        }
        .search-selector {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 40px;
            height: 40px;
            img {
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>