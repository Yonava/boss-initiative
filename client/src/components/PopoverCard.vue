<template>
  <div
    class="absolute z-50 bg-white rounded-xl shadow-lg flex overflow-hidden h-32"
    :style="{
      left: x - 75 + 'px',
      top: y + 75 + 'px',
    }"
  >
    <img
      v-if="fetchedImg"
      class="aspect-square object-cover"
      :src="fetchedImg"
    />
    <div class="py-1 px-3 w-96">
      <h1 class="font-extrabold text-xl">
        {{ title }}
      </h1>
      <p>
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps<{
  title: string,
  img: string,
  desc: string
  x: number,
  y: number
}>()

const fetchedImg = ref<string | null>(null)

watch(() => props.img, async () => {
  if (!props.img) return fetchedImg.value = null
  fetchedImg.value = (await import(props.img)).default
}, { immediate: true })
</script>