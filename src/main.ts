/*
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-03-03 16:16:47
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import '@/assets/styles/common.scss'
import '@/assets/icon/icon.css'

createApp(App).use(router).mount('#app')
