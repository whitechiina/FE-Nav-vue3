<!--
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-22 15:42:29
-->
<template>
	<div class="home">
		<swiper
			:modules="modules"
			:loop="true"
			:slides-per-view="1"
			:autoplay="{ delay: 4000, disableOnInteraction: false }"
			navigation
			:pagination="{ clickable: true }"
			:scrollbar="{ draggable: true }">
			<!-- loop可循环轮播，autoplay可自动播放 -->
			<swiper-slide v-for="(item, index) in data.imgData" :key="index">
                <img class="swiper-img" :src="item">
            </swiper-slide>
		</swiper>
	</div>
</template>
<script lang="ts" setup>
    import { reactive } from 'vue'
	// 引入swiper组件
	import { Swiper, SwiperSlide } from 'swiper/vue'
	// 引入swiper样式（按需导入）
	import 'swiper/css'
	import 'swiper/css/pagination' // 轮播图底面的小圆点
	import 'swiper/css/navigation' // 轮播图两边的左右箭头
	import 'swiper/css/scrollbar' // 轮播图的滚动条
	// 引入swiper核心和所需模块
	import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
	const modules = [Autoplay, Pagination, Navigation, Scrollbar]
    
    const data = reactive({
        imgData: [
            'https://maliquankai.oss-cn-shenzhen.aliyuncs.com/%E5%AE%98%E7%BD%91/HomeTime%20-%20%E4%BD%99%E7%94%9F%E5%BE%88%E9%95%BF%EF%BC%8C%E7%95%99%E7%82%B9%E6%97%B6%E9%97%B4%E9%99%AA%E4%BC%B4%E5%AE%B6%E4%BA%BA/hometime_bannercode.png',
            'https://maliquankai.oss-cn-shenzhen.aliyuncs.com/%E5%AE%98%E7%BD%91/%E6%96%B0%E4%BA%A7%E5%93%81%20%7C%20%E5%96%B5%E4%B8%80%E4%BC%9A-%E6%97%A5%E5%B8%B8%E4%B8%93%E6%B3%A8%E5%92%8C%E4%B9%A0%E6%83%AF%E5%85%BB%E6%88%90/%E6%96%B0%E4%BA%A7%E5%93%81_%E5%96%B5%E4%B8%80%E4%BC%9A_%E6%97%A5%E5%B8%B8%E4%B8%93%E6%B3%A8%E5%92%8C%E4%B9%A0%E6%83%AF%E5%85%BB%E6%88%90_gzs.png',
            'https://maliquankai.oss-cn-shenzhen.aliyuncs.com/%E5%AE%98%E7%BD%91/%E8%8A%B1%E4%B8%80%E5%A4%A9%E6%97%B6%E9%97%B4%E5%81%9A%E4%BA%86%E4%B8%80%E4%B8%AA%E7%A0%81%E5%8A%9B%E5%85%A8%E5%BC%80%E8%B5%84%E6%BA%90%E7%AB%99/mlqksite_banner.png',
        ]
    })
</script>
<style lang="scss">
	.home {
        width: 100%;
		height: 300px;
		.swiper-slide {
			height: 300px;
		}
		.swiper-button-prev,
		.swiper-button-next {
			transform: translateY(-50%);
		}
        .swiper-scrollbar, .swiper-scrollbar-drag {
            display: none;
        }
        .swiper-img {
            width: 100%;
            height: 300px;
        }
	}
</style>

