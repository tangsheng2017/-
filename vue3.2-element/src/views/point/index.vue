<template>
  <div class="point">
    <CommonCard>
      <template #header>{{ $route.meta.title }}</template>
      <el-button type="primary" @click="openHooksDialog()">新增</el-button>
      <el-date-picker
        v-model="filter.data"
        type="date"
        value-format="YYYY-MM-DD"
        placeholder="请选择日期"
      />
      <CommonTable
        :tabelHeader="tableHeader"
        :tableData="tableData"
        @tableCellClick="handleTableOperation"
      />
      <CommonPagination :pageObj="pageObj" @paginationEvent="tablePageFun" />
    </CommonCard>
    <editDialog ref="dialog" :reload="getListFun" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { getTableList, delDetails } from '@/api/point'
import useTableProps from '@/hooks/useTable'
import useDialogProps from '@/hooks/useDialog'
import { ElMessageBox, ElMessage } from 'element-plus'
import editDialog from './dialog/editDialog.vue'
import dayjs from 'dayjs'

// 表格头设置
const tableHeader = [
  {
    key: 'pointname',
    value: '驻点名称'
  },
  {
    key: 'teamname',
    value: '队伍名称'
  },
  {
    key: 'compname',
    value: '路段管理单位'
  },
  {
    key: 'longitude',
    value: '经度'
  },
  {
    key: 'latitude',
    value: '纬度'
  },
  {
    key: 'created',
    value: '创建时间'
  },
  {
    button: true,
    fixed: 'right', // 滚动时固定在右侧
    value: '操作',
    btnLis: [
      {
        name: '编辑',
        judeKey: 'primary',
        styleKey: 'testStyle',
        type: 'edit',
        status: 'primary'
      },
      {
        name: '删除',
        judeKey: 'primary',
        styleKey: 'testStyle',
        type: 'delete',
        status: 'danger'
      }
    ],
    width: '150'
  }
]
// 筛选项
const filter = reactive({
  data: dayjs().format('YYYY-MM-DD')
})
// 表格和分页hooks
const { getListFun, tablePageFun, tableData, pageObj } = useTableProps(
  filter,
  getTableList
)

// 弹窗ref
const dialog = ref(null)
const { openHooksDialog } = useDialogProps(dialog)

const handleTableOperation = (eventObj) => {
  const type = eventObj.type
  const data = eventObj.data
  if (type === 'edit') {
    openHooksDialog(eventObj)
  } else if (type === 'delete') {
    ElMessageBox.confirm('是否删除数据？', '温馨提示', {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'error'
    })
      .then(() => {
        const postObj = {
          id: data.pointid
        }
        delDetails(postObj).then((res) => {
          getListFun()
          ElMessage.success(res.data)
        })
      })
      .catch(() => {})
  }
}
</script>

<style lang="scss" scoped></style>
