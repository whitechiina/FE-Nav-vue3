<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-27 21:36:40
-->
<template>
  <div class="header">
    <div class="header-main">
      <div class="header-logo">logo</div>
      <div class="header-tools">工具栏</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 60px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: fixed;
  z-index: 99;
  .header-main {
    width: 1050px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>