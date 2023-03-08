<template>
  <vxe-table
    border
    round
    show-header-overflow
    show-overflow
    :row-config="{ isHover: true }"
    :data="props.tableData"
    :span-method="spanMethod"
    @checkbox-all="selectChangeEvent"
    @checkbox-change="selectChangeEvent"
  >
    <vxe-column
      :title="item.value"
      :field="item.key"
      :type="item.type"
      :width="item.width"
      :fixed="item.fixed"
      v-for="item in props.tabelHeader"
      :key="item.key"
    >
      <template #default="{ row }" v-if="item.button">
        <vxe-button
          size="mini"
          v-for="(btn, index) in item.btnLis"
          :key="index"
          :status="btn.status"
          @click="btnClick(row, btn)"
        >
          {{ btn.name }}
        </vxe-button>
      </template>
    </vxe-column>
  </vxe-table>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  tabelHeader: {
    type: Array,
    default: () => []
  },
  tableData: {
    type: Array,
    default: () => []
  },
  fields: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['tableCellClick', 'selectionChange'])

// 点击按钮方法
const btnClick = (data, btn) => {
  const obj = {
    type: btn.type,
    data
  }
  emit('tableCellClick', obj)
}

// 多选框方法
const selectChangeEvent = (res) => {
  const records = res.records
  emit('selectionChange', records)
}

const spanMethod = ({ row, _rowIndex, column, visibleData }) => {
  const fields = props.fields
  const cellValue = row[column.field]
  if (cellValue && fields.includes(column.field)) {
    const prevRow = visibleData[_rowIndex - 1]
    let nextRow = visibleData[_rowIndex + 1]
    if (prevRow && prevRow[column.field] === cellValue) {
      return {
        rowspan: 0,
        colspan: 0
      }
    } else {
      let countRowspan = 1
      while (nextRow && nextRow[column.field] === cellValue) {
        nextRow = visibleData[++countRowspan + _rowIndex]
      }
      if (countRowspan > 1) {
        return {
          rowspan: countRowspan,
          colspan: 1
        }
      }
    }
  }
}
</script>

<style scoped></style>
