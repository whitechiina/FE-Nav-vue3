<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-03-04 17:49:31
-->
<template>
  <div class="main-content">
    <div class="main-bg">
      <video autoplay loop muted style="width: 100%">
          <source src="../assets/page-about-background.mp4" />
      </video>
    </div>
    <div class="avative">
        <img src="../assets/logo.png" alt="">
      </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main-content {
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  .avative {
    width: 100%;
    position: absolute;
    margin: auto;
    top: 250px;
    display: flex;
    justify-content: center;
    z-index: 999;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 10px solid #fff;
    }
  }
  .main-bg {
    display: block;
    position: absolute;
    width: 100%;
    height: 300px;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    ::after {
      content: "";
      position: absolute;
      display: block;
      height: 1rem;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      background-image: radial-gradient(circle,transparent 70%,var(#fff) 70%);
      background-size: 0.7em 1em;
      background-position: 0 -0.5em;
    }
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 30%;
    pointer-events: none;
  }
  video::-webkit-media-controls{ 
    display:none !important;
  }
}
</style>