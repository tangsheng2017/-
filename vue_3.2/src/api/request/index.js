import axios from 'axios'
import store from '@/store'
import md5 from 'js-md5'
import requestFun from './requestFun'
import { decrypt, encrypt } from './cryptoJs'
import { ElMessage } from 'element-plus'
// 需要在控制台打印请求参数和响应结果时，设置 isDebugRequest 为 true，否则为 false
const isDebugRequest = process.env.NODE_ENV === 'development'
const service = axios.create({
  timeout: 600000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    DeviceNo: 'JY'
  }
})
if (process.env.NODE_ENV !== 'development') {
  service.defaults.baseURL = process.env.VUE_APP_BASE_API // url = base url + request url
}
service.interceptors.request.use(
  (config) => {
    let requestData = {}
    if (config.method === 'post') {
      requestData = config.data || {}
    }
    if (config.method === 'get') {
      requestData = config.params || {}
    }

    // 排序、去空处理后，生成接口签名
    // 如果是数组不做排序处理，因为排序处理会转成对象
    let requestDataTemp = {}
    if (!Array.isArray(requestData)) {
      requestDataTemp = requestFun.objKeySort(requestData)
    } else {
      requestDataTemp = requestData
    }
    requestDataTemp = requestFun.filterNull(requestDataTemp)
    const timestamp = new Date().getTime() // 时间戳
    const sign = md5(JSON.stringify(requestDataTemp) + timestamp) // 接口签名

    const requestObj = {}
    if (requestData) {
      // 按与后端协商好的格式组成新的请求参数
      requestObj.data = requestDataTemp
      requestObj.timestamp = timestamp
      requestObj.sign = sign
    }

    const userData = store.getters.userData
    config.headers.Authorization = `Bearer ${userData.token}`

    // 对新请求参数的 json 字符串进行加密
    if (config.method === 'post') {
      config.data = encrypt(JSON.stringify(requestObj))
    }
    if (config.method === 'get') {
      config.params = {
        data: encrypt(JSON.stringify(requestObj))
      }
    }
    if (isDebugRequest) {
      config.url = `/api/${config.url}`
    }
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)
service.interceptors.response.use(
  (response) => {
    let resDecrypt = null
    try {
      resDecrypt = decrypt(response.data.data)
    } catch (error) {
      const message = '接口返回数据解密失败'
      ElMessage.error(message)
      return Promise.reject(error)
    }

    if (requestFun.isJSON(resDecrypt)) {
      const resObj = JSON.parse(resDecrypt)
      if (
        !!resObj.status &&
        (String(resObj.code).indexOf('20') === 0 ||
          (isNaN(resObj.status) &&
            resObj.status.toLocaleUpperCase() === 'true') ||
          resObj.success.toLocaleUpperCase() === 'ok')
      ) {
        // 接口返回的数据中 code 为 20x，status 为 true，说明接口请求成功，可以正常拿到数据

        return resObj
      } else {
        // 接口自定义错误代码处理

        if (isDebugRequest) {
          console.log(
            '%c%s',
            'color: green;',
            `${response.config.url} 响应结果: `,
            resObj
          )
        }

        if (resObj.code === '402') {
          // 清除用户信息，跳转登录页
          // ElMessage.error(resObj.msg)
          ElMessage.error('登陆已过期，请重新登陆')
          store.dispatch('user/logout')
        } else {
          ElMessage.error(resObj.msg)
        }
      }
    } else {
      const message = '接口返回数据格式有误！'
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    const message = '接口程序错误'
    ElMessage.error(message)
    return Promise.reject(new Error(error))
  }
)
export default service
