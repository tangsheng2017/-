<template>
  <CommonCard>
    <template #header>{{ $route.meta.title }}</template>
    <CommonTable
      :tabelHeader="tableHeader"
      :tableData="tableData"
      :fields="fields"
    />
    <CommonPagination :pageObj="pageObj" @paginationEvent="tablePageFun" />
  </CommonCard>
</template>

<script setup>
import { getTableList } from '@/api/orderTimeOut'
import { reactive } from 'vue'
import useTableProps from '@/hooks/useTable'
import { sortObjArr } from '@/utils'

// 表格头设置
const tableHeader = [
  {
    key: 'roadname',
    value: '高速名称',
    width: '200'
  },
  {
    key: 'rescueno',
    value: '工单',
    width: '200'
  },
  {
    key: 'infomanname',
    value: '调度人',
    width: '200'
  },
  {
    key: 'dispatchmembernames',
    value: '队员',
    width: '200'
  },
  {
    key: 'dispatch_timeout',
    value: '调度超时',
    width: '200'
  },
  {
    key: 'timeoutreason',
    value: '调度超时是否填写',
    width: '200'
  },
  {
    key: 'js_timeout',
    value: '接受超时',
    width: '200'
  },
  {
    key: 'cc_timeout',
    value: '出发超时',
    width: '200'
  },
  {
    key: 'dc_timeout',
    value: '到达超时',
    width: '200'
  },
  {
    key: 'qz_timeout',
    value: '救援超时',
    width: '200'
  }
]

// 筛选项
const filter = reactive({})
const fields = ['roadname'] // 设置合并行的key，目前只封装了合并一行

const { tablePageFun, tableData, pageObj } = useTableProps(filter, getTableList)
tableData.value.sort(sortObjArr(fields[0]))
</script>

<style></style>
