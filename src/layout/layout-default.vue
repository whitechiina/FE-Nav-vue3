<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-03-04 17:46:56
-->

<template>
    <div id="content">
      <!-- 背景图 -->
      <div id="background">
        <div id="bgs"></div>
      </div>
      <CommonHeader></CommonHeader>
      <div id="main">
        <div class="main-left">
          <CommonLeft></CommonLeft>
        </div>
        <div class="main-mid">
          <RouterView></RouterView>
        </div>
        <div class="main-right">
          <CommonRight></CommonRight>
        </div>
      </div>
      <CommonFooter></CommonFooter>
      <BiYing></BiYing>
    </div>
</template>
  
<script setup lang="ts">
import CommonHeader from "@/components/index.vue/CommonHeader.vue";
import CommonFooter from "@/components/index.vue/commonFooter.vue";
import CommonSwiper from "../components/index.vue/CommonSwiper.vue";
import CommonLeft from "../components/index.vue/CommonLeft.vue";
import CommonRight from "../components/index.vue/CommonRight.vue";
import CommonMid from "../components/index.vue/CommonMid.vue";
import BiYing from "@/components/widget/BiYing.vue";
</script>

<style scoped lang="scss">
#background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -99;
}
#bgs {
  position: absolute;
  background-image: url("../assets/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  opacity: 0.3;
  width: 100%;
  height: 100%;
}
#main {
display: flex;
position: relative;
flex-direction: row;
justify-content: space-between;
width: 1050px;
margin: 0 auto;
padding-top: 70px;
    .main-mid {
        flex: 1;
        overflow: hidden;
    }
    .main-left {
        width: 160px;
        flex-shrink: 0;
        height: auto;
        margin-right: 10px;
    }
    .main-right {
        width: 200px;
        margin-left: 10px;
    }
}
  </style>