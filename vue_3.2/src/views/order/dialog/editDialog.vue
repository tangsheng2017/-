<template>
  <!--  teleport，内置组件，表示把dom移动到id为app下，解决布局问题-->
  <teleport to="#app">
    <el-dialog v-model="dialogFormVisible" align-center title="编辑工单">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="90px">
        <el-form-item label="Promotion name">
          <el-input v-model="form.id" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm()"> 保存 </el-button>
        </span>
      </template>
    </el-dialog>
  </teleport>
</template>

<script setup>
import { ref, defineExpose, reactive, defineProps } from 'vue'
import { ElMessage } from 'element-plus'
import { addDetails, editDetails } from '@/api/point'

const props = defineProps({
  reload: Function // 添加或修改完后，刷新列表页
})
const dialogFormVisible = ref(false)
const form = ref({})
const type = ref('')
// 暴露数据给父组件
const openDialog = (data) => {
  if (data.type === 'edit') {
    type.value = data.type
  } else if (data.type === 'add') {
    form.value = {
      type: '',
      teamid: ''
    }
  }
  dialogFormVisible.value = true
}

// 表单校验
const rules = reactive({
  pointname: [
    {
      required: true,
      message: '请输入驻点名称',
      trigger: 'change'
    }
  ]
})
const formRef = ref(null)
// 提交表单
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      const successCallBack = (data) => {
        ElMessage.success(data)
        dialogFormVisible.value = false
        // 调用父方法重新拉取表格数据
        if (props.reload) props.reload()
      }
      if (type.value === 'edit') {
        editDetails(form.value).then((res) => {
          successCallBack(res.data)
        })
      } else {
        addDetails(form.value).then((res) => {
          successCallBack(res.data)
        })
      }
    }
  })
}

// 暴露数据/方法给父组件
defineExpose({
  openDialog
})
</script>

<style scoped></style>
