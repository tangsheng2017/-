<template>
  <div class="upload-oss">
    <input type="file" @change="change" :accept="props.accept" />
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import { ElMessage } from 'element-plus'

const emit = defineEmits(['addFile'])
// fileId：用来区分多个选择情况，fileType：限制选择文件类型，multiple：是否多选
const props = defineProps({
  fileId: {
    type: String,
    default: () => ''
  },
  accept: {
    type: String,
    default: () => '*'
  },
  multiple: {
    type: String,
    default: () => 'single'
  }
})

const OSS = require('ali-oss')
const client = new OSS({
  region: process.env.VUE_APP_OSSREGION,
  accessKeyId: process.env.VUE_APP_OSSACCESSKEYID,
  accessKeySecret: process.env.VUE_APP_OSSACCESSKEYSECRET,
  bucket: process.env.VUE_APP_OSSBUCKET
})

// 单选
const change = (event) => {
  const files = event.target.files
  files.forEach(async (file) => {
    // 判断扩展名
    const num = file.name.lastIndexOf('.')
    const fileType = file.name.substring(num + 1)
    const time = new Date().getTime()
    const fileName = `uRescue/${file.name.slice(0, num)}${time}.${fileType}`
    try {
      const result = await client.put(fileName, file)
      const obj = {
        url: result.url,
        name: file.name,
        fileId: props.fileId
      }
      emit('addFile', obj)
    } catch {
      ElMessage.error('上传失败')
    }
  })
}
</script>

<style lang="scss" scoped></style>
