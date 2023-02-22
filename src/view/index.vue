<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-22 16:17:48
-->

<template>
  <div>
    <CommonHeader></CommonHeader>
    <CommonSearch></CommonSearch>
    <CommonFooter></CommonFooter>
    <BiYing></BiYing>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import CommonHeader from "@/components/index.vue/CommonHeader.vue";
import CommonFooter from "@/components/index.vue/commonFooter.vue";
import CommonSearch from "../components/index.vue/CommonSearch.vue";
import BiYing from "@/components/widget/BiYing.vue";
</script>
  <style scoped lang="less">
</style>
