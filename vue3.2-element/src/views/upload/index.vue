<template>
  <CommonCard>
    <img :src="img.url" v-for="(img, index) in imgList" :key="index" />
    <upload @addFile="addFile" :accept="'image/*'" />
  </CommonCard>
</template>

<script setup>
import { ref } from 'vue'
import upload from '@/components/upload'

const imgList = ref([])

const addFile = (data) => {
  imgList.value.push(data)
  console.log(data)
}
</script>

<style lang="scss" scoped>
img {
  width: 50px;
}
</style>
