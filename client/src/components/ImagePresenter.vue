<template>
  <img
    class="object-fit"
    :src="image"
  >
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  imgs: string[],
  range: number[],
}>()

const image = ref('')

document.addEventListener('scroll', () => {
  const index = props.range.findIndex((r) => window.scrollY < r)
  if (index === -1) return (image.value = '')
  image.value = props.imgs[index]
})
</script>