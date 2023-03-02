import { createStore } from 'vuex'
import user from './modules/user'
import menu from './modules/menu'
import app from './modules/app'
import getters from './getters'
export default createStore({
  modules: {
    app,
    user,
    menu
  },
  getters
})
