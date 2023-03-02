<template>
  <vxe-table
    border
    round
    show-header-overflow
    show-overflow
    :row-config="{ isHover: true }"
    :data="props.tableData"
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
      <template #default v-if="item.button">
        <vxe-button
          size="mini"
          v-for="(btn, index) in item.btnLis"
          :key="index"
          :status="btn.status"
        >
          {{ btn.name }}
        </vxe-button>
      </template>
    </vxe-column>
  </vxe-table>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['tabelHeader', 'tableData'])
console.log(props.tableData)
</script>

<style scoped></style>
