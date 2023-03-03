/*
 * @LastEditors: whitechiina 1293616053@qq.com
 * @LastEditTime: 2023-03-03 15:19:09
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login.vue'),
    meta: { title: '登录页', keepAlive: false }
  },
  {
    path: '/',
    redirect: 'home',
    name: 'Layout',
    component: () => import('@/layout/layout-default.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/layout/layout-default.vue'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/home/article',
        name: 'article',
        component: () => import('@/view/article.vue'),
        meta: { title: '文章页', keepAlive: false }
      },
    ]
  },
  {
    path: '/app',
    name: 'Layouts',
    component: () => import('@/layout/layout-alone.vue'),
    children: [
      {
        path: '/app',
        name: 'app',
        component: () => import('@/view/app.vue'),
        meta: { title: 'app', keepAlive: false }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),//你的网站根目录地址
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.onError((handler) => {
  console.log("error:", handler);
});

export default router;
