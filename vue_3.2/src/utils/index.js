import lodash from 'lodash'

// 根据字符串进行排序
export const sortObjArr = (props) => {
  return function (a, b) {
    // return a[props] - b[props]
    return a[props].localeCompare(b[props])
  }
}

// 深拷贝
export const cloneDeep = lodash.cloneDeep

// 防抖
export const debounce = lodash.debounce

// export default {
//   setlocalStorage,
//   getlocalStorage,
//   removelocalStorage,
//   checklocalStorage,
//   setsessionStorage,
//   getsessionStorage,
//   removesessionStorage,
//   checksessionStorage,
//   sortObjArr,
//   cloneDeep: lodash.cloneDeep, // 深拷贝
//   debounce: lodash.debounce // 防抖
// }
