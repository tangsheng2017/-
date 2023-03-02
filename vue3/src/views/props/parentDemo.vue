<template>
  <div>
    <childDemo msg="123" @hello="helloWrod" ref="newChild">
      <!-- 把子组件传来的值赋值给slotonevalue -->
      <template v-slot:qqq="slotonevalue">
        <div>slot插槽</div>
        <div>{{ slotonevalue }}</div>
      </template>
    </childDemo>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import childDemo from './childDemo'
export default {
  components: {
    childDemo
  },
  setup(props, context) {
    console.log(props, context.expose)

    // context.expose
    function helloWrod(data) {
      alert('触发了helloWrod事件' + data)
    }

    onMounted(() => {
      const newChild = ref()
      console.log(newChild)
    })

    return {
      helloWrod
    }
  }
}
</script>
