<template>
  <div>
    <div>{{ person }}</div>
    <br />
    <input type="text" v-model="person.name" /><br />
    <input type="text" v-model="person.age" /><br />
    <input type="text" v-model="person.aaa.bbb.ccc" />
  </div>
</template>

<script setup>
import { shallowReactive } from 'vue'
// shallowReactive，浅层响应式，只有对象最外层监听，节约内存
let person = shallowReactive({
  name: '张三',
  age: 18,
  aaa: {
    bbb: {
      ccc: 'ccc'
    }
  }
})
</script>
<style lang="scss" scoped></style>
