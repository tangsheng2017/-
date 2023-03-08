<template>
  <el-upload
    action="#"
    :before-upload="uploadFile"
    :http-request="uploadFileHttp"
    list-type="picture-card"
    :auto-upload="false"
  >
    <el-icon>
      <Plus />
    </el-icon>
  </el-upload>
</template>

<script setup>
const uploadFile = (data) => {
  console.log(data)
}

const uploadFileHttp = (data) => {
  console.log(data)
}
</script>

<style scoped></style>
