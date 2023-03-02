import { getMenuListApi } from '@/api/menu'
import router from '@/router'
import lodash from 'lodash'
import utils from '@/utils'

export default {
  namespaced: true,
  state: () => ({
    menuList: null
  }),
  mutations: {
    setMenuList(state, menuList) {
      state.menuList = menuList
    }
  },
  actions: {
    getMenuList({ rootGetters, commit }) {
      const postObj = {
        Authorization: rootGetters.userData.token,
        systemID: 'T201207231623558210000194'
      }
      return new Promise((resolve, reject) => {
        getMenuListApi(postObj)
          .then((res) => {
            // 菜单信息
            const resData = lodash.cloneDeep(res.data)
            const asyncRoutes = lodash.cloneDeep(router.asyncRoutes) // 深拷贝路由，防止修改原数据
            let firstAccessibleRoute = utils.getsessionStorage('defaultActive') // 第一个路由

            function getMenuList(element, item) {
              item.forEach((item1) => {
                if (element.meta.funcCode === item1.funcCode) {
                  element.meta.id = item1.id
                  if (!element.hidden) {
                    element.hidden = false
                  }
                  if (
                    element.meta.firstAccessibleRoute &&
                    !element.hidden &&
                    !firstAccessibleRoute
                  ) {
                    firstAccessibleRoute = element.meta.firstAccessibleRoute
                  }
                  if (element.children && element.children.length > 0) {
                    element.children.forEach((element1) => {
                      getMenuList(element1, item1.children)
                    })
                  }
                }
              })
            }
            asyncRoutes.forEach((element) => {
              getMenuList(element, resData)
            })
            asyncRoutes.forEach((element) => {
              router.addRoute(element)
            })
            commit('setMenuList', asyncRoutes)
            resolve(firstAccessibleRoute)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
