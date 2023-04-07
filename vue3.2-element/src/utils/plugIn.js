import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default (app) => {
  app.use(VXETable) // 表格插件
  app.use(ElementPlus, {
    // 设置element为中文
    locale: zhCn
  })
}
