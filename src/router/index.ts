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
    redirect: '/home',
    name: 'Layout',
    component: () => import('@/view/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/index.vue'),
        meta: { title: '工作台', keepAlive: false }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),//你的网站根目录地址
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * 路由错误回调
 */
router.onError((handler) => {
  console.log("error:", handler);
});

export default router;
