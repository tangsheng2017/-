<template>
  <div class="box"></div>
</template>

<script setup>
const boxWidth = '200px'
</script>
<style lang="scss" scoped>
.box {
  width: v-bind(boxWidth);
  height: 200px;
  background-color: skyblue;
}
</style>
