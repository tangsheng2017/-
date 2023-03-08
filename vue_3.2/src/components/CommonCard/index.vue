<template>
  <div class="common-card">
    <div class="common-card__header" v-if="$slots.header || props.header">
      <slot name="header">{{ props.header }}</slot>
    </div>
    <div class="common-card__body" :style="props.bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['header', 'bodyStyle'])
</script>

<style scoped>
.common-card {
  overflow: hidden;
  margin-bottom: 10px;
  border: 1px solid #e8ecef;
  color: #333;
  background: #fff;
  border-radius: 10px;
}

.common-card__header {
  margin: 15px 20px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8ecef;
  font-size: 20px;
  font-weight: 600;
  color: #334681;
}

.common-card__body {
  padding: 20px;
}
</style>
