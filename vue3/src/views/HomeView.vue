<template>
  <div class="box"></div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const boxWidth = '200px'
console.log(getCurrentInstance().proxy.$msg)
</script>
<style lang="scss" scoped>
.box {
  width: v-bind(boxWidth);
  height: 200px;
  background-color: skyblue;
}
</style>
