<template>
  <div></div>
</template>

<script setup>
// 使用全局方法
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
console.log(proxy.$msg)
</script>
