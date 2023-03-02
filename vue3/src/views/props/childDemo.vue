<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="test()">点击触发父组件事件</button>
    <slot name="qqq" :value1="value1" :value2="value2"></slot>
  </div>
</template>

<script>
export default {
  props: ['msg'], //接收父组件传来数据
  emits: ['hello'], //接收父组件方法
  setup(props, context) {
    const value1 = '子组件的value1' //传值给父组件
    const value2 = '子组件的value2' //传值给父组件
    // console.log(props, context)
    // console.log(context.attrs);//如果没有设置props，父组件数据就在这里
    // console.log(context.emit); //使用父组件方法，使用方法同vue2的this.emit
    // console.log(context.slots); //父组件传来插槽，最好用v-slot:
    const qqq = context.slots.qqq
    function test() {
      context.emit('hello', '111')
    }

    return {
      value1,
      value2,
      qqq,
      test
    }
  }
}
</script>
