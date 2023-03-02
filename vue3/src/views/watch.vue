<template>
  <div>
    <div><input type="text" v-model="sum" /></div>
    <div><input type="text" v-model="msg" /></div>
    <br />
    <br />
    <div>person对象监听</div>
    <div><input type="text" v-model="person.name" /></div>
    <div><input type="text" v-model="person.age" /></div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'app',
  setup() {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18
    })

    // 情况一：监视ref所定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log('sum变了', newValue, oldValue)
    })

    // 情况二：监视ref所定义的多个响应式数据
    watch([sum, msg], (newValue, oldValue) => {
      console.log('sum或msg变了', newValue, oldValue)
    })

    // 情况三：监视reactive所定义的多个响应式数据的全部属性
    // watch(person, (newValue, oldValue) => {
    //   console.log("person变了", newValue, oldValue);
    // });

    // 情况四：监视reactive所定义的多个响应式数据的某个属性
    // watch(
    //   () => person.name,
    //   (newValue, oldValue) => {
    //     console.log("person的name变了", newValue, oldValue);
    //   }
    // );

    // // 情况四：监视reactive所定义的多个响应式数据的某个属性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log("person的name或者age变了", newValue, oldValue);
    // });

    return { sum, msg, person }
  }
}
</script>
<style lang="scss" scoped></style>
