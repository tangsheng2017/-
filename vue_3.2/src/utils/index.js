import lodash from 'lodash'

import {
  setlocalStorage,
  getlocalStorage,
  removelocalStorage,
  checklocalStorage,
  setsessionStorage,
  getsessionStorage,
  removesessionStorage,
  checksessionStorage
} from './storage'

export default {
  setlocalStorage,
  getlocalStorage,
  removelocalStorage,
  checklocalStorage,
  setsessionStorage,
  getsessionStorage,
  removesessionStorage,
  checksessionStorage,
  cloneDeep: lodash.cloneDeep, // 深拷贝
  debounce: lodash.debounce // 防抖
}
