/*
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-02-22 14:50:49
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import '@/assets/styles/common.scss'

createApp(App).use(router).mount('#app')
