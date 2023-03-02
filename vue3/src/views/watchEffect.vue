<template>
  <div>
    <div><input type="text" v-model="sum" /></div>
    <div><input type="text" v-model="msg" /></div>
    <br />
    <br />
    <div>person对象监听</div>
    <div><input type="text" v-model="person.name" /></div>
    <div><input type="text" v-model="person.age" /></div>
    <div><input type="text" v-model="person.aaa.bbb.ccc.ddd" /></div>
  </div>
</template>

<script>
import { ref, reactive, watchEffect } from 'vue'
export default {
  name: 'app',
  setup() {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      aaa: {
        bbb: {
          ccc: {
            ddd: 'ddd'
          }
        }
      }
    })

    // 跟计算属性computed类似，watchEffect的回调里只要数据发生变化就会执行
    watchEffect(() => {
      let x1 = sum.value
      let x2 = person.aaa.bbb.ccc.ddd
      console.log('watchEffect启动了' + x1)
      console.log('watchEffect启动了' + x2)
    })

    return { sum, msg, person }
  }
}
</script>
<style lang="scss" scoped></style>
