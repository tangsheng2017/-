<template>
  <div>
    <div>后代组件</div>
    <div>{{ obj }}</div>
    <div><input type="text" v-model="obj.name" /></div>
    <div><input type="text" v-model="obj.age" /></div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
// 任何后代组件都可以用inject接收，并且数据都是响应式
let obj = inject('provideObj')
</script>

<style></style>
