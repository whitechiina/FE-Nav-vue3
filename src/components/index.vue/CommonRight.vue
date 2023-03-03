<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-28 09:42:07
-->
<template>
    <div>
        <CommonSearch></CommonSearch>
        <div id="main" :class="isFixed ? 'is-fixed' : 'txt'" ref="fixedName">
            {{ isFixed }}
        </div>
    </div>
  </template>
  
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import CommonSearch from './CommonSearch.vue';

onMounted(() => { window.addEventListener('scroll', update) })

// 定义一个响应式数据
const y = ref(0);
const isFixed = ref(false);
const fixedName = ref(null);

const update = () => {
  y.value = document.documentElement.scrollTop
  y.value > 54? isFixed.value = true : isFixed.value = false
}

onUnmounted(() => { window.removeEventListener('scroll', update) })
</script>

<style scoped lang="scss">
  //不吸顶
.txt{
  width: 200px;
  background-color: #FFFFFF;
  padding: 15px;
}

//吸顶
.is-fixed {
  position: fixed;
  top: 70px;
  right: 266px;
  z-index: 100;
  width: 200px;
  background-color: #FFFFFF;
  padding: 15px;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 500;
  color: #222222;
  line-height: 60px;
  text-align: center;
}
</style>