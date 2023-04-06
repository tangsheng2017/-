<template>
  <el-menu
    :active-text-color="variables.menuActiveText"
    :background-color="variables.menuBg"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :text-color="variables.menuText"
    router
    unique-opened
    :collapse="!$store.getters.siderType"
  >
    <el-sub-menu
      :index="item.meta.id"
      v-for="item in menusList"
      :key="item.meta.id"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon ? item.meta.icon : 'menu'"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <template v-for="it in item.children">
        <el-menu-item
          :index="'/' + it.path"
          :key="it.meta.id"
          @click="savePath(it.path)"
          v-if="!it.hidden"
        >
          <template #title>
            <el-icon>
              <component :is="it.meta.icon ? it.meta.icon : 'menu'"></component>
            </el-icon>
            <span>{{ it.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, computed } from 'vue'
import variables from '@/styles/variables.scss'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { setsessionStorage } from '@/utils/storage'

// 获取菜单
const store = useStore()
const menusList = computed(() => {
  return store.getters.menuList
})

// 设置默认菜单
const route = useRoute()
const defaultActive = ref(route.path)

// 记录设置默认路由，刷新页面时返回本页面
const savePath = (path) => {
  setsessionStorage('defaultActive', `/${path}`)
}
</script>

<style lang="scss" scoped></style>
