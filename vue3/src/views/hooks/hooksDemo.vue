<template>
  <div>{{ point }}</div>
</template>

<script setup>
// hooks功能，跟vue2的mixin一样
import pointCommon from './common'
const point = pointCommon()
</script>
<style lang="scss" scoped></style>
