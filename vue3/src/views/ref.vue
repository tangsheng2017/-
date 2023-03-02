<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'app',
  setup() {
    // 定义基本数据类型用ref
    let name = ref('aaa')
    function changeName() {
      name.value = '111'
    }
    return {
      name,
      changeName
    }
  }
}
</script>
<style lang="scss" scoped></style>
