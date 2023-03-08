<template>
  <div class="order">
    <CommonCard>
      <template #header>{{ $route.meta.title }}</template>
      <CommonTable
        :tabelHeader="tableHeader"
        :tableData="tableData"
        @tableCellClick="handleTableOperation"
        @selectionChange="selectionChange"
      />
      <CommonPagination :pageObj="pageObj" @paginationEvent="tablePageFun" />
    </CommonCard>
    <editDialog ref="dialog" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getTableList } from '@/api/order'
import useTableProps from '@/hooks/useTable'
import editDialog from './dialog/editDialog.vue'
import useDialogProps from '@/hooks/useDialog'

const router = useRouter()

// 表格头设置
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
        name: '编辑',
        judeKey: 'primary',
        styleKey: 'testStyle',
        type: 'edit',
        status: 'success'
      },
      {
        name: '删除',
        judeKey: 'primary',
        styleKey: 'testStyle',
        type: 'delete',
        status: 'danger'
      }
    ],
    width: '220'
  }
]
// 筛选项
const filter = reactive({})
const { tablePageFun, tableData, pageObj } = useTableProps(filter, getTableList)

// 弹窗ref
const dialog = ref(null)
const { openHooksDialog } = useDialogProps(dialog)

// 点击表格按钮方法
const handleTableOperation = (eventObj) => {
  const type = eventObj.type
  const data = eventObj.data
  if (type === 'check') {
    router.push(`/orderDetails/${data.id}`)
  } else if (type === 'edit') {
    openHooksDialog(eventObj)
  }
}

// 表格多选框回调
const selectionChange = (res) => {
  console.log(res)
}
</script>

<style></style>
