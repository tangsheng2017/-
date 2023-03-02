<template>
  <div>
    <h3>{{ person }}</h3>
    <div>
      <div>直接取person对象</div>
      <!-- 正常定义的reactive对象，每次用都要加上person，比较麻烦 -->
      <input type="text" v-model="person.name" /><br />
      <input type="text" v-model="person.age" /><br />
      <input type="text" v-model="person.aaa.bbb.ccc" />
    </div>
    <br /><br />
    <div>
      <div>正常赋值情况下，只是初始化时取值，不会跟任何数据绑定</div>
      <input type="text" v-model="nameStr" /><br />
      <input type="text" v-model="ageStr" /><br />
    </div>
    <br /><br />
    <div>
      <div>使用toRef定义，依然会跟person双向数据绑定</div>
      <input type="text" v-model="nametoRef" /><br />
      <input type="text" v-model="agetoRef" /><br />
      <input type="text" v-model="ccctoRef" />
    </div>
    <br /><br />
    <div>
      <div>toRefs定义的数据，方便读取，依然是响应式数据</div>
      <input type="text" v-model="name" /><br />
      <input type="text" v-model="age" /><br />
      <input type="text" v-model="aaa.bbb.ccc" />
    </div>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      aaa: {
        bbb: {
          ccc: 'ccc'
        }
      }
    })

    // 正常赋值情况下，只是初始化时取值，不会跟任何数据绑定
    let nameStr = person.name
    let ageStr = person.age

    // 使用toRef定义，依然会跟person双向数据绑定
    let nametoRef = toRef(person, 'name')
    let agetoRef = toRef(person, 'age')
    let ccctoRef = toRef(person.aaa.bbb, 'ccc')

    return {
      person,
      nameStr,
      ageStr,
      nametoRef,
      agetoRef,
      ccctoRef,
      ...toRefs(person) //js展开运算符批量处理person
    }
  }
}
</script>
<style lang="scss" scoped></style>
