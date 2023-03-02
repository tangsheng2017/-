import router from './index'
import store from '@/store'

const whiteList = ['/login'] // 白名单
router.beforeEach((to, from, next) => {
  if (store.getters.userData) {
    if (!store.getters.menuList) {
      store.dispatch('menu/getMenuList').then((res) => {
        next(res)
      })
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
