<template>
  <el-form ref="formRef" :model="form" class="login-form" :rules="rules">
    <el-form-item prop="username">
      <el-input v-model="form.username" placeholder="账号" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" placeholder="密码" />
    </el-form-item>
  </el-form>
  <el-button type="primary" class="login-button" @click="handleLogin"
    >登陆
  </el-button>
</template>

<script setup>
// import { loginApi } from '@/api/login'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const form = reactive({
  username: 'zxq',
  password: 'uroad123'
})

const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

const formRef = ref(null)
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('user/login', form)
      // loginApi(form).then((res) => console.log(res))
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>

<style></style>
