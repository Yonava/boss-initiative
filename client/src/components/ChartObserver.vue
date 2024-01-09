<template>
  <div
    ref="chart"
    class="min-h-[400px]"
  >
    <div v-if="showChart">
      <slot><!-- optional fallback --></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const chart = ref()
const showChart = ref(false)

const { stop } = useIntersectionObserver(chart, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    stop()
    setTimeout(() => {
      showChart.value = true
    }, 500)
  }
}, {
  threshold: 0.9,
})
</script>