<template>
  <vxe-pager
    v-model:current-page="page.currentPage"
    v-model:page-size="page.pageSize"
    :total="page.totalResult"
    @page-change="pageChange"
  >
  </vxe-pager>
</template>

<script setup>
import { defineProps, reactive, defineEmits } from 'vue'

const props = defineProps({
  pageObj: {
    type: Object,
    default: () => {}
  }
})
const page = reactive(props.pageObj)

const emit = defineEmits(['paginationEvent'])
const pageChange = (data) => {
  // console.log(res)
  const obj = {
    type: 'paginationSizeChange',
    data
  }
  emit('paginationEvent', obj)
}
</script>

<style scoped></style>
