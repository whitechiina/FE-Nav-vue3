<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-03-03 15:49:46
-->
<template>
    <div>
      <div v-for="(item, index) in 10">
        <ArticleItem></ArticleItem>
      </div>
      <ArticleMore></ArticleMore>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, toRefs, onMounted} from 'vue'
  import ArticleItem from './ArticleItem.vue';
  import ArticleMore from './ArticleMore.vue';
  
  </script>
  <style scoped lang="less">
  </style>