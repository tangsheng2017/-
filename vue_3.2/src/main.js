import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
import '@/router/permission'
import utils from '@/utils/index'
import appComponent from '@/utils/appComponent'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)

app.provide('$utils', utils)

app.use(VXETable)

SvgIcon(app)
appComponent(app)
app.use(store).use(router).mount('#app')
