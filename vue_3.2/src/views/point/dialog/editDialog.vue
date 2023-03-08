<template>
  <!--  teleport，内置组件，表示把dom移动到id为app下，解决布局问题-->
  <teleport to="#app">
    <el-dialog v-model="dialogFormVisible" align-center title="编辑驻点">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="90px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="驻点名称" prop="pointname">
              <el-input v-model="form.pointname" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="队伍" prop="teamid">
              <el-select v-model="form.teamid" placeholder="请选择">
                <el-option
                  v-for="item in filterArr.teamid"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="经度">
              <el-input v-model="form.longitude" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="纬度">
              <el-input v-model="form.latitude" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="类型" prop="type">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option
                  v-for="item in filterArr.type"
                  :key="item.dictcode"
                  :label="item.dictname"
                  :value="item.dictcode"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="备注">
              <el-input v-model="form.remark" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm()"> 保存</el-button>
      </template>
    </el-dialog>
  </teleport>
</template>

<script setup>
import { ref, defineExpose, reactive, defineProps } from 'vue'
import { getDetails, editDetails, addDetails } from '@/api/point'
import { getTeam, getDictType } from '@/api/common'
import { ElMessage } from 'element-plus'

// 筛选项的数组
const filterArr = {
  type: [],
  teamid: []
}
Promise.all([getTeam(), getDictType({ codetype: 134 })]).then((values) => {
  filterArr.teamid = values[0].data
  filterArr.type = values[1].data
})

const props = defineProps({
  reload: Function // 添加或修改完后，刷新列表页
})

const dialogFormVisible = ref(false)
const form = ref({})
const type = ref('')
// 打开弹窗
const openDialog = (data) => {
  if (data.type === 'edit') {
    type.value = data.type
    getDetails({ id: data.data.pointid }).then((res) => {
      form.value = res.data
    })
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
  ],
  teamid: [
    {
      required: true,
      message: '请选择队伍',
      trigger: 'change'
    }
  ],
  type: [
    {
      required: true,
      message: '请选择类型',
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
