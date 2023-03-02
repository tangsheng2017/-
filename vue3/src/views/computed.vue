<template>
  <div>
    <div>姓：<input type="text" v-model="person.firstname" /></div>
    <div>名：<input type="text" v-model="person.lastname" /></div>
    <div>姓名：{{ person.name }}</div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'app',
  setup() {
    let person = reactive({
      firstname: '张',
      lastname: '三'
    })
    //这种方法获得的值只能读不能修改，想修改用get、set方法
    person.name = computed(() => {
      return person.firstname + person.lastname
    })
    return { person }
  }
}
</script>
<style lang="scss" scoped></style>
