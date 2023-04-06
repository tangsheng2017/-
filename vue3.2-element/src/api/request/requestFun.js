function isJSON(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.log('error：' + str + '!!!' + e)
      return false
    }
  } else {
    return false
  }
}
// 自定义判断元素类型
function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
// 对象排序
function objKeySort(arys) {
  // 先用 Object 内置类的 keys 方法获取要排序对象的属性名，再利用 Array 原型上的 sort 方法对获取的属性名进行排序，newkey 是一个数组
  var newkey = Object.keys(arys).sort()
  var newObj = {} // 创建一个新的对象，用于存放排好序的键值对
  // 遍历 newkey 数组
  for (var i = 0; i < newkey.length; i++) {
    // 向新创建的对象中按照排好的顺序依次增加键值对
    newObj[newkey[i]] = arys[newkey[i]]
  }
  return newObj // 返回排好序的新对象
}
export default {
  isJSON,
  filterNull,
  objKeySort
}
