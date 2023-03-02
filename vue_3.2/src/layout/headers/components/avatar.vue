<template>
  <div>
    <!-- <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar> -->
    <div @click="logout">退出</div>
  </div>
  <!-- <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
    </span>
    <div @click="logout">退出</div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown> -->
</template>

<script setup>
// import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'

const store = useStore()

// const squareUrl = ref(
//   'https://img0.baidu.com/it/u=1056811702,4111096278&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
// )

const logout = () => {
  ElMessageBox.confirm('是否退出登录?', '温馨提示', {
    confirmButtonText: '退出',
    cancelButtonText: '取消'
  })
    .then(() => {
      store.dispatch('user/logout')
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出登录'
      })
    })
}
</script>

<style lang="scss" scoped>
::v-deep(.el-dropdown-menu__item) {
  white-space: nowrap;
}
</style>
