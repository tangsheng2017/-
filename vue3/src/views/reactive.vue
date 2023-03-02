<template>
  <div>
    <h1>{{ obj.job }}</h1>
    <h1>{{ hobby }}</h1>
    <button @click="changeName">修改工作</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'app',
  setup() {
    // 定义对象或数组用reactive
    let obj = reactive({
      job: '工作'
    })
    let hobby = reactive(['aaa', 'bbb', 'ccc'])
    function changeName() {
      obj.job = '切图仔'
      hobby[0] = '111'
    }

    console.log(obj)

    return {
      obj,
      hobby,
      changeName
    }
  }
}
</script>
<style lang="scss" scoped></style>
