import { loginApi } from '@/api/user'
import router from '@/router'
import utils from '@/utils/index'
export default {
  namespaced: true,
  state: () => ({
    userData: utils.checklocalStorage('userData') // 登陆后用户信息
  }),
  mutations: {
    setUserData(state, userData) {
      // 设置用户信息
      state.userData = userData
      utils.setlocalStorage('userData', JSON.stringify(userData))
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then((res) => {
            // 用户信息
            const resData = res.data
            commit('setUserData', resData)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 退出登陆
    logout({ state }) {
      state.userData = false
      localStorage.clear()
      router.replace('/login')
    }
  }
}
