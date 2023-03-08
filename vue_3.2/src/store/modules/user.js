import { loginApi } from '@/api/user'
import router from '@/router'
import { checklocalStorage, setlocalStorage } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    userData: checklocalStorage('userData') // 登陆后用户信息
  }),
  mutations: {
    setUserData(state, userData) {
      // 设置用户信息
      state.userData = userData
      setlocalStorage('userData', JSON.stringify(userData))
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
