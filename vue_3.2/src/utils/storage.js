const config = require('@/config')

function setlocalStorage(key, val) {
  localStorage.setItem(config.prefix + key, val)
}

function getlocalStorage(key) {
  const item = localStorage.getItem(config.prefix + key)
  return item
}

function removelocalStorage(key) {
  localStorage.removeItem(config.prefix + key)
}

function checklocalStorage(key) {
  let data = getlocalStorage(key)
  if (data) {
    try {
      data = JSON.parse(data)
      return data
    } catch (err) {
      return false
    }
  } else {
    return false
  }
}

function setsessionStorage(key, val) {
  sessionStorage.setItem(config.prefix + key, val)
}

function getsessionStorage(key) {
  const item = sessionStorage.getItem(config.prefix + key)
  return item
}

function removesessionStorage(key) {
  sessionStorage.removeItem(config.prefix + key)
}

function checksessionStorage(key) {
  let data = getsessionStorage(key)
  if (data) {
    try {
      data = JSON.parse(data)
      return data
    } catch (err) {
      return false
    }
  } else {
    return false
  }
}

export {
  setlocalStorage,
  getlocalStorage,
  removelocalStorage,
  checklocalStorage,
  setsessionStorage,
  getsessionStorage,
  removesessionStorage,
  checksessionStorage
}
