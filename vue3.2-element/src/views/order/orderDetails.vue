<template>
  <div class="orderDetails">
    <CommonCard>
      <template #header>{{ $route.meta.title }}</template>
      <div>工单id：{{ route.params.id }}</div>
    </CommonCard>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style></style>
