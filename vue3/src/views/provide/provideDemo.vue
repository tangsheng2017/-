<template>
  <div>
    <div>
      <div>父组件</div>
      <div>{{ obj }}</div>
      <div><input type="text" v-model="obj.name" /></div>
      <div><input type="text" v-model="obj.age" /></div>
    </div>
    <br />
    <br />
    <br />
    <injectDemo></injectDemo>
  </div>
</template>

<script setup>
import { reactive, provide } from 'vue'
import injectDemo from './injectDemo'
let obj = reactive({
  name: 'aaa',
  age: 18
})
provide('provideObj', obj)
</script>

<style></style>
