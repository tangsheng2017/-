<template>
  <div class="order">
    <CommonCard>
      <template #header>{{ $route.meta.title }}</template>
      <CommonTable :tabelHeader="tableHeader" :tableData="tableData" />
    </CommonCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 表格头设置
import { getTableList } from '@/api/order'

const tableHeader = [
  {
    type: 'checkbox',
    width: 60
  },
  {
    key: 'compName',
    value: '路段管理单位',
    width: '200'
  },
  {
    key: 'rescueno',
    value: '工单编号',
    width: '200'
  },
  {
    key: 'callhelpphone',
    value: '报警电话',
    width: '200'
  },
  {
    key: 'roadname',
    value: '高速公路',
    width: '200'
  },
  {
    key: 'directionname',
    value: '行车方向',
    width: '200'
  },
  {
    key: 'rescueLocation',
    value: '救援位置',
    width: '200'
  },
  {
    key: 'infomanname',
    value: '调度员',
    width: '200'
  },
  {
    key: 'alarmtime',
    value: '接警时间',
    width: '200'
  },
  {
    key: 'rescuetypename',
    value: '工单类型',
    width: '200'
  },
  {
    key: 'statusname',
    value: '状态',
    width: '100'
  },
  {
    button: true,
    fixed: 'right', // 滚动时固定在右侧
    value: '操作',
    btnLis: [
      {
        name: '查看',
        judeKey: 'primary',
        styleKey: 'editStyle',
        type: 'check',
        status: 'primary'
      },
      {
        name: '测试单',
        judeKey: 'primary',
        styleKey: 'testStyle',
        type: 'test',
        status: 'success'
      }
    ],
    width: '180'
  }
]
// 表格数据
const tableData = ref([])

getTableList().then((res) => {
  tableData.value = res.data
})
</script>

<style></style>
