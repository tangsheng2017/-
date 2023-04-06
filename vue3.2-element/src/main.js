import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import '@/router/permission' // 路由守卫
import appComponent from '@/utils/appComponent'
import plugIn from '@/utils/plugIn'

const app = createApp(App)

plugIn(app) // 各类插件注册
SvgIcon(app) // 注册svg图标
appComponent(app) // 注册公共组件
app.use(store).use(router).mount('#app')
