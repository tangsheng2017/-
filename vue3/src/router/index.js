import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/parentDemo',
    name: 'parentDemo',
    component: () => import('../views/props/parentDemo.vue')
  },
  {
    path: '/hooksDemo',
    name: 'hooksDemo',
    component: () => import('../views/hooks/hooksDemo.vue')
  },
  {
    path: '/provideDemo',
    name: 'provideDemo',
    component: () => import('../views/provide/provideDemo.vue')
  },
  {
    path: '/GMap',
    name: 'GMap',
    component: () => import('../views/GMap/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
