<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-27 16:37:46
-->

<template>
  <div class="search-panel">
    <div class="search">
        <input class="search-form" type="text" placeholder="输入关键词搜索 | tab键切换引擎">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

const data = reactive({
    activeWay: []
})

</script>
<style scoped lang="scss">
.search-panel {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    .search {
        width:100%;
        height: 40px;
        padding: 5px;
        border: 1px solid red;
        box-sizing: content-box;
        position: relative;
        border-radius: 30px;
        input {
            border-radius: 30px;
        }
        .search-form {
            width:200px;
            height: 40px;
            padding-left: 10px;
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