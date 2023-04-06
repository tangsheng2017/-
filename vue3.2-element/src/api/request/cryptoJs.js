const CryptoJS = require('crypto-js')
const config = require('@/config') // 引入公共配置文件
const key = CryptoJS.enc.Utf8.parse(config.publicKey) // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse(config.publicKey.substr(0, 32)) // 十六位十六进制数作为密钥偏移量

// 解密方法
function decrypt(word) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

// 加密方法
function encrypt(word) {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString().toUpperCase()
}

export { decrypt, encrypt }
